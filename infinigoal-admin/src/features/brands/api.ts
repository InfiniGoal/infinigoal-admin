import { supabase } from "@/lib/supabaseClient";
import type { AdminBrand } from "./types";

export async function listAdminBrands() {
  const { data, error } = await supabase
    .from("admin_brands")
    .select("*")
    .order("display_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) throw error;
  return (data ?? []) as AdminBrand[];
}

export async function createAdminBrand(payload: {
  name: string;
  slug: string;
  is_active: boolean;
  display_order: number;
}) {
  const { data, error } = await supabase
    .from("admin_brands")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data as AdminBrand;
}

export async function updateAdminBrand(
  id: string,
  payload: Partial<Pick<AdminBrand, "name" | "slug" | "is_active" | "display_order">>
) {
  const { data, error } = await supabase
    .from("admin_brands")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as AdminBrand;
}

export async function deleteAdminBrand(id: string) {
  const { error } = await supabase.from("admin_brands").delete().eq("id", id);
  if (error) throw error;
}

export async function getBrandUsageCount(brandName: string) {
  const { count, error } = await supabase
    .from("products")
    .select("id", { count: "exact", head: true })
    .eq("brand", brandName);

  if (error) throw error;
  return count ?? 0;
}

export async function listActiveBrandNames() {
  const { data, error } = await supabase
    .from("admin_brands")
    .select("name")
    .eq("is_active", true)
    .order("name", { ascending: true });

  if (error) throw error;
  return (data ?? []).map((x) => x.name as string);
}
