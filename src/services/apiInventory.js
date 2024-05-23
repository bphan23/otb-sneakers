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

// update inventory when adding item to cart - match id
// export async function updateInventory({ id }) {
//   const { error } = await supabase
//     .from("inventory")
//     .update({ inCart: true })
//     .eq("id", id);
// }
