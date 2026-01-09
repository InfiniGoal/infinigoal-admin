import { supabase } from "../../lib/supabaseClient";

export async function createProduct(payload: any) {
  const { data, error } = await supabase
    .from("products")
    .insert({
      ...payload,
      thumbnail: "", // will be updated later
    })
    .select("*")
    .single();

  if (error) throw error;
  return data;
}
