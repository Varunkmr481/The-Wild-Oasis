import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  // eslint-disable-next-line
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

// export async function createCabin(newCabin) {
//   const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
//   const imagePath = `cabin-images/${imageName}`; // Corrected image path format

//   // 1. Upload image to the bucket first
//   const { data: imageData, error: storageError } = await supabase.storage
//     .from("cabin-images")
//     .upload(imageName, newCabin.image);

//   if (storageError) {
//     console.log(storageError);
//     throw new Error("Cabin image could not be uploaded");
//   }

//   // 2. If image upload is successful, create the cabin
//   const imageUrl = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
//   const { data, error } = await supabase
//     .from("cabins")
//     .insert([{ ...newCabin, image: imageUrl }])
//     .select();

//   if (error) {
//     console.log(error);
//     // Optionally, you can delete the image from Supabase if cabin creation fails
//     await supabase.storage.from("cabin-images").remove([imageName]);
//     throw new Error("Cabin could not be created");
//   }

//   return data; // Return the newly created cabin data
// }

// newCabin : object
export async function createCabin(newCabin) {
  console.log(newCabin);
  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create a cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload image to bucket
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin if there was an error uploading image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
  }
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabin could not be deleted");
  }
}
