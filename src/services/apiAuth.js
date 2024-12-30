import supabase from "./supabase";

export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) throw new Error(error.message);
  console.log(data);

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

  console.log("logged in user", data);

  if (error) throw new Error(error.message);

  return data?.user;
}
