import supabase from "./supabase";
import { supabaseUrl } from "./supabase";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);
  // console.log(data);

  return data;
}

// fn for fetching current logged in user details
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  // if session is active, you can get user data from session only
  // bit more secure to do below
  // data : {user, session}
  const { data, error } = await supabase.auth.getUser();

  // console.log("logged in user", data);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  let { error } = await supabase.auth.signOut();

  if (error) throw new Error("Could not logout at this moment");
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  // 1. Update password or fullName
  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error: updateError } = await supabase.auth.updateUser(
    updateData
  );
  if (updateError) throw new Error(updateError.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updateUserData, error: updateUserError } =
    await supabase.auth.updateUser({
      data: {
        avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
      },
    });

  if (updateError) throw new Error(updateError.message);

  return updateUserData;
}
