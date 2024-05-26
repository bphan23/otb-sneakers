/* eslint-disable no-unused-vars */
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

// update inventory data -> mark item as isSold
export async function updateInventory(id) {
  console.log(id);
  // update single item
  const { error } = await supabase
    .from("inventory")
    .update({ isSold: true })
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Inventory could not be updated");
  }
}
