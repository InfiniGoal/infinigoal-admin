import { useEffect, useState } from "react";
import {
  listAdminCategories,
  createAdminCategory,
  updateAdminCategory,
  deleteAdminCategory,
  getCategoryUsageCount,
} from "../api";
import type { AdminCategory } from "../types";
import CategoryProductsPanel from "../components/CategoryProductsPanel";

export default function CategoriesV2() {
  const [categories, setCategories] = useState<AdminCategory[]>([]);
  const [usageMap, setUsageMap] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");

  const [showCategory, setShowCategory] = useState<string | null>(null);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setLoading(true);
    const rows = await listAdminCategories();
    setCategories(rows);

    const map: Record<string, number> = {};
    for (const c of rows) {
      map[c.name] = await getCategoryUsageCount(c.name);
    }
    setUsageMap(map);
    setLoading(false);
  }

  function toSlug(v: string) {
    return v.trim().toLowerCase().replace(/\s+/g, "-");
  }

  async function addCategory() {
    if (!newCategory.trim()) return;

    await createAdminCategory({
      name: newCategory.trim(),
      slug: toSlug(newCategory),
      is_active: true,
      display_order: categories.length + 1,
    });

    setNewCategory("");
    refresh();
  }

  async function saveEdit(c: AdminCategory) {
    const next = editingValue.trim();
    if (!next) {
      setEditingId(null);
      return;
    }

    await updateAdminCategory(c.id, {
      name: next,
      slug: toSlug(next),
    });

    setEditingId(null);
    refresh();
  }

  async function safeDelete(c: AdminCategory) {
    if ((usageMap[c.name] ?? 0) > 0) {
      alert(`Cannot delete. Used in ${usageMap[c.name]} products`);
      return;
    }

    if (!confirm(`Delete category "${c.name}"?`)) return;

    await deleteAdminCategory(c.id);
    refresh();
  }

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <>
      <div style={wrap}>
        <div style={card}>
          <h2 style={title}>Categories</h2>

          <div style={addRow}>
            <input
              placeholder="New category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              style={input}
            />
            <button onClick={addCategory} style={btn}>
              Add
            </button>
          </div>

          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Name</th>
                <th style={th}>Active</th>
                <th style={th}>Used</th>
                <th style={th}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {categories.map((c) => (
                <tr key={c.id}>
                  <td style={td}>
                    {editingId === c.id ? (
                      <input
                        value={editingValue}
                        onChange={(e) => setEditingValue(e.target.value)}
                        onBlur={() => saveEdit(c)}
                        autoFocus
                      />
                    ) : (
                      c.name
                    )}
                  </td>

                  <td style={td}>
                    <input
                      type="checkbox"
                      checked={c.is_active}
                      onChange={() =>
                        updateAdminCategory(c.id, {
                          is_active: !c.is_active,
                        }).then(refresh)
                      }
                    />
                  </td>

                  <td
                    style={{
                      ...td,
                      cursor: "pointer",
                      color: "#bf9602",
                      fontWeight: 800,
                    }}
                    onClick={() => setShowCategory(c.name)}
                  >
                    {usageMap[c.name] ?? 0}
                  </td>

                  <td style={td}>
                    <button
                      onClick={() => {
                        setEditingId(c.id);
                        setEditingValue(c.name);
                      }}
                    >
                      ✏️
                    </button>
                    <button onClick={() => safeDelete(c)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showCategory && (
        <CategoryProductsPanel
          name={showCategory}
          type="category"
          onClose={() => setShowCategory(null)}
        />
      )}
    </>
  );
}

const wrap: React.CSSProperties = {
  padding: 20,
  maxWidth: 1000,
  margin: "0 auto",
};

const card: React.CSSProperties = {
  background: "#fff",
  borderRadius: 18,
  padding: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const title: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 900,
  marginBottom: 14,
};

const addRow: React.CSSProperties = {
  display: "flex",
  gap: 8,
  marginBottom: 14,
};

const input: React.CSSProperties = {
  flex: 1,
  padding: 8,
  borderRadius: 8,
  border: "1px solid #ddd",
};

const btn: React.CSSProperties = {
  padding: "8px 14px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  background: "#bf9602",
  color: "#fff",
  fontWeight: 700,
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
};

const th: React.CSSProperties = {
  textAlign: "left",
  fontSize: 12,
  color: "#6C7A89",
  padding: "10px 8px",
  borderBottom: "1px solid #eee",
};

const td: React.CSSProperties = {
  padding: "10px 8px",
  borderBottom: "1px solid #f2f2f2",
  fontSize: 14,
};
