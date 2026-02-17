import { supabase } from "@/lib/supabaseClient";
import type { AdminCategory, AdminSubCategory } from "./types";

/* =========================
   CATEGORIES
========================= */

export async function listAdminCategories() {
  const { data, error } = await supabase
    .from("admin_categories")
    .select("*")
    .order("display_order", { ascending: true })
    .order("name", { ascending: true });

  if (error) throw error;
  return data as AdminCategory[];
}

export async function createAdminCategory(payload: {
  name: string;
  slug: string;
  is_active: boolean;
  display_order: number;
}) {
  const { data, error } = await supabase
    .from("admin_categories")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data as AdminCategory;
}

export async function updateAdminCategory(
  id: string,
  payload: Partial<
    Pick<AdminCategory, "name" | "slug" | "is_active" | "display_order">
  >
) {
  const { data, error } = await supabase
    .from("admin_categories")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as AdminCategory;
}

export async function deleteAdminCategory(id: string) {
  const { error } = await supabase.from("admin_categories").delete().eq("id", id);
  if (error) throw error;
}

/* =========================
   USAGE COUNTS
========================= */

export async function getCategoryUsageCount(categoryName: string) {
  const { count, error } = await supabase
    .from("products")
    .select("id", { count: "exact", head: true })
    .eq("main_category", categoryName);

  if (error) throw error;
  return count ?? 0;
}

export async function getSubCategoryUsageCount(subCategoryName: string) {
  const { count, error } = await supabase
    .from("products")
    .select("id", { count: "exact", head: true })
    .eq("sub_category", subCategoryName);

  if (error) throw error;
  return count ?? 0;
}

/* =========================
   SUBCATEGORIES
========================= */

export async function listAdminSubCategories(categoryId?: string) {
  let q = supabase
    .from("admin_subcategories")
    .select("*")
    .order("display_order", { ascending: true })
    .order("name", { ascending: true });

  if (categoryId) q = q.eq("category_id", categoryId);

  const { data, error } = await q;
  if (error) throw error;

  return data as AdminSubCategory[];
}

export async function createAdminSubCategory(payload: {
  category_id: string;
  name: string;
  slug: string;
  is_active: boolean;
  display_order: number;
}) {
  const { data, error } = await supabase
    .from("admin_subcategories")
    .insert(payload)
    .select()
    .single();

  if (error) throw error;
  return data as AdminSubCategory;
}

export async function updateAdminSubCategory(
  id: string,
  payload: Partial<
    Pick<
      AdminSubCategory,
      "name" | "slug" | "is_active" | "display_order" | "category_id"
    >
  >
) {
  const { data, error } = await supabase
    .from("admin_subcategories")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as AdminSubCategory;
}

export async function deleteAdminSubCategory(id: string) {
  const { error } = await supabase
    .from("admin_subcategories")
    .delete()
    .eq("id", id);

  if (error) throw error;
}






/* =========================
   REORDERING
========================= */

export async function reorderAdminCategories(
  ordered: { id: string; display_order: number }[]
) {
  for (const row of ordered) {
    const { error } = await supabase
      .from("admin_categories")
      .update({ display_order: row.display_order })
      .eq("id", row.id);

    if (error) throw error;
  }
}

export async function reorderAdminSubCategories(
  ordered: { id: string; display_order: number }[]
) {
  for (const row of ordered) {
    const { error } = await supabase
      .from("admin_subcategories")
      .update({ display_order: row.display_order })
      .eq("id", row.id);

    if (error) throw error;
  }
}

/* =========================
   BULK ACTIVE
========================= */

export async function bulkSetCategoriesActive(
  ids: string[],
  is_active: boolean
) {
  if (!ids.length) return;

  const { error } = await supabase
    .from("admin_categories")
    .update({ is_active })
    .in("id", ids);

  if (error) throw error;
}

export async function bulkSetSubCategoriesActive(
  ids: string[],
  is_active: boolean
) {
  if (!ids.length) return;

  const { error } = await supabase
    .from("admin_subcategories")
    .update({ is_active })
    .in("id", ids);

  if (error) throw error;
}

/* =========================
   PRODUCT LIST FOR MODAL
========================= */

export type ProductLite = {
  id: string;
  name: string;
  slug: string;
  price: number;
  stock: number;
  is_active: boolean;
  main_category: string | null;
  sub_category: string | null;
  brand: string | null;
};

export async function listProductsByCategoryName(categoryName: string) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,slug,price,stock,is_active,main_category,sub_category,brand"
    )
    .eq("main_category", categoryName)
    .order("name", { ascending: true });

  if (error) throw error;
  return (data ?? []) as ProductLite[];
}

export async function listProductsBySubCategoryName(subCategoryName: string) {
  const { data, error } = await supabase
    .from("products")
    .select(
      "id,name,slug,price,stock,is_active,main_category,sub_category,brand"
    )
    .eq("sub_category", subCategoryName)
    .order("name", { ascending: true });

  if (error) throw error;
  return (data ?? []) as ProductLite[];
}
