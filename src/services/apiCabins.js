import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}

export async function createCabin(newCabin) {
  //For us to upload the image, we need to create an image NAME and  PATH as well,
  // then add it to the insert.
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  //If cabin name contains any slashes(/),supabase will create a folder based on that,
  // hence we replaced all "/" with " "

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //https://vnaeyyaupmjblcsqxwkr.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
  //1) CREATE A CABIN
  const { data, error } = await supabase
    .from("Cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  //2) UPLOAD THE IMAGE
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

    //3) Delete the cabin if there was an error uploading image
    if(storageError){
      await supabase.from("Cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error("Cabin image could not be uploaded and the cabin was not be created");
    } 
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
  return data;
}
