import { useEffect, useMemo, useState } from "react";
import {
  listTagsWithUsage,
  renameTag,
  deleteTag,
} from "../api";
import TagProductsPanel from "../components/TagProductsPanel";

type Row = { tag: string; count: number };

export default function TagsManager() {
  const [tags, setTags] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);

  // single edit
  const [editing, setEditing] = useState<string | null>(null);
  const [editingValue, setEditingValue] = useState("");

  // bulk mode
  const [bulkMode, setBulkMode] = useState(false);
  const [bulkMap, setBulkMap] = useState<Record<string, string>>({});

  // product panel
  const [showTag, setShowTag] = useState<string | null>(null);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setLoading(true);
    try {
      const data = await listTagsWithUsage();
      setTags(data);
    } finally {
      setLoading(false);
    }
  }

  // 🔥 TOP 10 TAGS BADGE
  const topTagsSet = useMemo(() => {
    const sorted = [...tags].sort((a, b) => b.count - a.count);
    return new Set(sorted.slice(0, 10).map((x) => x.tag));
  }, [tags]);

  async function saveRename(oldTag: string) {
    const next = editingValue.trim();
    if (!next) {
      setEditing(null);
      return;
    }

    await renameTag(oldTag, next);
    setEditing(null);
    refresh();
  }

  async function safeDelete(tag: string, count: number) {
    if (count > 0) {
      alert(`Cannot delete. Used in ${count} products`);
      return;
    }

    if (!confirm(`Delete tag "${tag}"?`)) return;

    await deleteTag(tag);
    refresh();
  }

  // BULK MODE
  function startBulkMode() {
    const initial: Record<string, string> = {};
    tags.forEach((t) => (initial[t.tag] = t.tag));
    setBulkMap(initial);
    setBulkMode(true);
  }

  function cancelBulkMode() {
    setBulkMode(false);
    setBulkMap({});
  }

  async function applyBulkRename() {
    const changes = Object.entries(bulkMap).filter(
      ([oldTag, newTag]) =>
        newTag.trim() && newTag.trim() !== oldTag
    );

    if (changes.length === 0) {
      alert("No changes to apply");
      return;
    }

    if (
      !confirm(
        `Apply ${changes.length} rename change(s)?`
      )
    )
      return;

    for (const [oldTag, newTag] of changes) {
      await renameTag(oldTag, newTag.trim());
    }

    cancelBulkMode();
    refresh();
  }

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <>
      <div style={wrap}>
        <div style={card}>
          {/* HEADER */}
          <div style={headerRow}>
            <div>
              <h2 style={title}>Tags</h2>
              <p style={subtitle}>
                Click usage count to view products
              </p>
            </div>

            <div style={headerActions}>
              {!bulkMode ? (
                <button
                  style={secondaryBtn}
                  onClick={startBulkMode}
                >
                  Bulk Rename
                </button>
              ) : (
                <>
                  <button
                    style={ghostBtn}
                    onClick={cancelBulkMode}
                  >
                    Cancel
                  </button>
                  <button
                    style={primaryBtn}
                    onClick={applyBulkRename}
                  >
                    Apply Changes
                  </button>
                </>
              )}
            </div>
          </div>

          {/* TABLE */}
          <div style={tableWrap}>
            <table style={table}>
              <thead>
                <tr>
                  <th style={th}>Tag</th>
                  <th style={th}>Used</th>
                  <th style={{ ...th, textAlign: "right" }}>
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {tags.map((t) => {
                  const isTop = topTagsSet.has(t.tag);

                  return (
                    <tr key={t.tag} style={tr}>
                      <td style={td}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          {bulkMode ? (
                            <input
                              value={
                                bulkMap[t.tag] ?? t.tag
                              }
                              onChange={(e) =>
                                setBulkMap((m) => ({
                                  ...m,
                                  [t.tag]:
                                    e.target.value,
                                }))
                              }
                              style={bulkInput}
                            />
                          ) : editing === t.tag ? (
                            <input
                              value={editingValue}
                              onChange={(e) =>
                                setEditingValue(
                                  e.target.value
                                )
                              }
                              onBlur={() =>
                                saveRename(t.tag)
                              }
                              autoFocus
                              style={editInput}
                            />
                          ) : (
                            <span
                              style={{
                                fontWeight: 700,
                              }}
                            >
                              {t.tag}
                            </span>
                          )}

                          {isTop && (
                            <span style={topBadge}>
                              TOP
                            </span>
                          )}
                        </div>
                      </td>

                      <td
                        style={{
                          ...td,
                          cursor: "pointer",
                          color: "#bf9602",
                          fontWeight: 800,
                        }}
                        onClick={() =>
                          setShowTag(t.tag)
                        }
                      >
                        {t.count}
                      </td>

                      <td
                        style={{
                          ...td,
                          textAlign: "right",
                        }}
                      >
                        {!bulkMode && (
                          <>
                            <button
                              style={iconBtn}
                              onClick={() => {
                                setEditing(t.tag);
                                setEditingValue(
                                  t.tag
                                );
                              }}
                            >
                              ✏️
                            </button>

                            <button
                              style={
                                iconBtnDanger
                              }
                              onClick={() =>
                                safeDelete(
                                  t.tag,
                                  t.count
                                )
                              }
                            >
                              🗑️
                            </button>
                          </>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {tags.length === 0 && (
              <div style={emptyState}>
                No tags found
              </div>
            )}
          </div>
        </div>
      </div>

      {showTag && (
        <TagProductsPanel
          tag={showTag}
          onClose={() => setShowTag(null)}
        />
      )}
    </>
  );
}

/* ================= STYLES ================= */

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

const headerRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: 16,
};

const title: React.CSSProperties = {
  margin: 0,
  fontSize: 18,
  fontWeight: 900,
};

const subtitle: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: 13,
  color: "#6B7280",
};

const headerActions: React.CSSProperties = {
  display: "flex",
  gap: 10,
};

const tableWrap: React.CSSProperties = {
  borderRadius: 14,
  overflow: "hidden",
  border: "1px solid #eee",
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
};

const th: React.CSSProperties = {
  textAlign: "left",
  fontSize: 12,
  color: "#6C7A89",
  padding: "12px 14px",
  borderBottom: "1px solid #eee",
  background: "#FAFAFA",
};

const td: React.CSSProperties = {
  padding: "12px 14px",
  borderBottom: "1px solid #f1f1f1",
  fontSize: 14,
};

const tr: React.CSSProperties = {};

const editInput: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #ddd",
  width: 260,
};

const bulkInput: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 10,
  border: "1px solid #ddd",
  width: 260,
};

const iconBtn: React.CSSProperties = {
  border: "none",
  background: "#F3F4F6",
  borderRadius: 10,
  padding: "8px 10px",
  cursor: "pointer",
  marginLeft: 8,
};

const iconBtnDanger: React.CSSProperties = {
  ...iconBtn,
  background: "#FEE2E2",
};

const primaryBtn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  background: "#bf9602",
  color: "#fff",
  fontWeight: 800,
};

const secondaryBtn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  cursor: "pointer",
  background: "#fff",
  fontWeight: 800,
};

const ghostBtn: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  background: "#F3F4F6",
  fontWeight: 800,
};

const topBadge: React.CSSProperties = {
  padding: "3px 10px",
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 900,
  background: "#bf9602",
  color: "#fff",
};

const emptyState: React.CSSProperties = {
  padding: 24,
  textAlign: "center",
  color: "#6B7280",
};
