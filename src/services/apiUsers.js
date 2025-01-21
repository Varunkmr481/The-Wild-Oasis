import supabase from "./supabase";

export async function getUsers() {
  // eslint-disable-next-line
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    console.error(error);
    throw new Error("Users could not be loaded");
  }

  return data.users;
}
