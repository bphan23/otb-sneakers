import supabase from "./supabase";

// get all inventory
export async function getInventory() {
  const { data, error } = await supabase.from("inventory").select("*");

  if (error) {
    console.error(error);
    throw new Error("Inventory could not be loaded");
  }

  return data;
}
