import { useEffect, useState } from "react";
import type { AdminBrand } from "../types";
import {
  listAdminBrands,
  createAdminBrand,
  updateAdminBrand,
  deleteAdminBrand,
  getBrandUsageCount,
} from "../api";
import BrandProductsPanel from "@/features/categories/components/BrandProductsPanel";

export default function BrandsList() {
  const [brands, setBrands] = useState<AdminBrand[]>([]);
  const [loading, setLoading] = useState(true);

  const [newBrandName, setNewBrandName] = useState("");

  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingName, setEditingName] = useState("");

  const [usageMap, setUsageMap] = useState<Record<string, number>>({});
  const [showBrand, setShowBrand] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const rows = await listAdminBrands();
      setBrands(rows);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const map: Record<string, number> = {};
      for (const b of brands) map[b.name] = await getBrandUsageCount(b.name);
      setUsageMap(map);
    })();
  }, [brands]);

  async function refresh() {
    setBrands(await listAdminBrands());
  }

  function toSlug(v: string) {
    return v.trim().toLowerCase().replace(/\s+/g, "-");
  }

  async function addBrand() {
    if (!newBrandName.trim()) return;

    await createAdminBrand({
      name: newBrandName.trim(),
      slug: toSlug(newBrandName),
      is_active: true,
      display_order: brands.length + 1,
    });

    setNewBrandName("");
    refresh();
  }

  async function toggleActive(b: AdminBrand) {
    await updateAdminBrand(b.id, { is_active: !b.is_active });
    refresh();
  }

  async function move(b: AdminBrand, dir: "up" | "down") {
    const newOrder = dir === "up" ? b.display_order - 1 : b.display_order + 1;
    await updateAdminBrand(b.id, { display_order: newOrder });
    refresh();
  }

  async function saveEdit(b: AdminBrand) {
    const nextName = editingName.trim();
    if (!nextName) return setEditingId(null);

    await updateAdminBrand(b.id, { name: nextName, slug: toSlug(nextName) });
    setEditingId(null);
    refresh();
  }

  async function safeDelete(b: AdminBrand) {
    if ((usageMap[b.name] ?? 0) > 0) {
      alert(`Cannot delete. Used in ${usageMap[b.name]} products`);
      return;
    }
    if (!confirm(`Delete brand "${b.name}"?`)) return;
    await deleteAdminBrand(b.id);
    refresh();
  }

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <>
      <div style={wrap}>
        <div style={col}>
          <h2 style={h2}>Brands</h2>

          <div style={addRow}>
            <input
              placeholder="New brand"
              value={newBrandName}
              onChange={(e) => setNewBrandName(e.target.value)}
              style={input}
            />
            <button onClick={addBrand} style={btn}>Add</button>
          </div>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Active</th>
                <th style={th}>Used</th>
                <th style={th}>Order</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {brands.map((b) => (
                <tr key={b.id} style={tr}>
                  <td style={td}>
                    {editingId === b.id ? (
                      <input
                        value={editingName}
                        onChange={(e) => setEditingName(e.target.value)}
                        onBlur={() => saveEdit(b)}
                        autoFocus
                      />
                    ) : (
                      b.name
                    )}
                  </td>

                  <td style={td}>
                    <input
                      type="checkbox"
                      checked={b.is_active}
                      onChange={() => toggleActive(b)}
                    />
                  </td>

                  <td
                    style={{ ...td, cursor: "pointer", color: "#bf9602", fontWeight: 800 }}
                    onClick={() => setShowBrand(b.name)}
                  >
                    {usageMap[b.name] ?? 0}
                  </td>

                  <td style={td}>
                    <button onClick={() => move(b, "up")}>▲</button>
                    <button onClick={() => move(b, "down")}>▼</button>
                  </td>

                  <td style={td}>
                    <button onClick={() => { setEditingId(b.id); setEditingName(b.name); }}>✏️</button>
                    <button onClick={() => safeDelete(b)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showBrand && (
        <BrandProductsPanel brandName={showBrand} onClose={() => setShowBrand(null)} />
      )}
    </>
  );
}

const wrap: React.CSSProperties = { padding: 20, maxWidth: 1000, margin: "0 auto" };
const col: React.CSSProperties = { background: "#fff", borderRadius: 16, padding: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" };
const h2: React.CSSProperties = { marginBottom: 14 };
const addRow: React.CSSProperties = { display: "flex", gap: 8, marginBottom: 12 };
const input: React.CSSProperties = { flex: 1, padding: 8, borderRadius: 8, border: "1px solid #ddd" };
const btn: React.CSSProperties = { padding: "8px 14px", borderRadius: 8, border: "none", cursor: "pointer", background: "#bf9602", color: "#fff", fontWeight: 700 };
const table: React.CSSProperties = { width: "100%", borderCollapse: "collapse" };
const th: React.CSSProperties = { textAlign: "left", fontSize: 12, color: "#6C7A89", padding: "10px 8px", borderBottom: "1px solid #eee" };
const td: React.CSSProperties = { padding: "10px 8px", borderBottom: "1px solid #f2f2f2", fontSize: 14 };
const tr: React.CSSProperties = { cursor: "default" };
