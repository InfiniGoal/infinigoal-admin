import { supabase } from "@/lib/supabaseClient";

export async function listTagsWithUsage() {
  // tags stored inside products.tags (text[])
  // We’ll read all tags then count in JS (simple + works well for admin scale)

  const { data, error } = await supabase
    .from("products")
    .select("tags");

  if (error) throw error;

  const map = new Map<string, number>();

  (data ?? []).forEach((row) => {
    const tags = (row as any).tags as string[] | null;
    if (!tags) return;
    tags.forEach((t) => {
      const tag = String(t).trim();
      if (!tag) return;
      map.set(tag, (map.get(tag) ?? 0) + 1);
    });
  });

  const rows = Array.from(map.entries()).map(([tag, count]) => ({ tag, count }));
  rows.sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag));

  return rows;
}

export async function listAllTags() {
  const rows = await listTagsWithUsage();
  return rows.map((r) => r.tag);
}

export async function listProductsByTag(tag: string) {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, price, is_active, tags")
    .contains("tags", [tag])
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function renameTag(oldTag: string, newTag: string) {
  const next = newTag.trim();
  if (!next) return;

  // fetch affected products
  const { data, error } = await supabase
    .from("products")
    .select("id, tags")
    .contains("tags", [oldTag]);

  if (error) throw error;

  for (const row of data ?? []) {
    const id = (row as any).id as string;
    const tags = ((row as any).tags ?? []) as string[];

    const updated = Array.from(
      new Set(
        tags
          .map((t) => (t === oldTag ? next : t))
          .map((t) => String(t).trim())
          .filter(Boolean)
      )
    );

    const { error: uErr } = await supabase
      .from("products")
      .update({ tags: updated })
      .eq("id", id);

    if (uErr) throw uErr;
  }
}

export async function deleteTag(tag: string) {
  // remove tag from any product that has it
  const { data, error } = await supabase
    .from("products")
    .select("id, tags")
    .contains("tags", [tag]);

  if (error) throw error;

  for (const row of data ?? []) {
    const id = (row as any).id as string;
    const tags = ((row as any).tags ?? []) as string[];

    const updated = tags.filter((t) => t !== tag);

    const { error: uErr } = await supabase
      .from("products")
      .update({ tags: updated })
      .eq("id", id);

    if (uErr) throw uErr;
  }
}
