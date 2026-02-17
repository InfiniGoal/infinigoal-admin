// import { useEffect, useState } from "react";
// import {
//   listAdminCategories,
//   createAdminCategory,
//   updateAdminCategory,
//   deleteAdminCategory,
//   getCategoryUsageCount,
// } from "../api";
// import type { AdminCategory } from "../types";
// import CategoryProductsPanel from "../components/CategoryProductsPanel";

// export default function CategoriesV2() {
//   const [categories, setCategories] = useState<AdminCategory[]>([]);
//   const [usageMap, setUsageMap] = useState<Record<string, number>>({});
//   const [loading, setLoading] = useState(true);

//   const [newCategory, setNewCategory] = useState("");
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editingValue, setEditingValue] = useState("");

//   const [showCategory, setShowCategory] = useState<string | null>(null);

//   useEffect(() => {
//     refresh();
//   }, []);

//   async function refresh() {
//     setLoading(true);
//     const rows = await listAdminCategories();
//     setCategories(rows);

//     const map: Record<string, number> = {};
//     for (const c of rows) {
//       map[c.name] = await getCategoryUsageCount(c.name);
//     }
//     setUsageMap(map);
//     setLoading(false);
//   }

//   function toSlug(v: string) {
//     return v.trim().toLowerCase().replace(/\s+/g, "-");
//   }

//   async function addCategory() {
//     if (!newCategory.trim()) return;

//     await createAdminCategory({
//       name: newCategory.trim(),
//       slug: toSlug(newCategory),
//       is_active: true,
//       display_order: categories.length + 1,
//     });

//     setNewCategory("");
//     refresh();
//   }

//   async function saveEdit(c: AdminCategory) {
//     const next = editingValue.trim();
//     if (!next) {
//       setEditingId(null);
//       return;
//     }

//     await updateAdminCategory(c.id, {
//       name: next,
//       slug: toSlug(next),
//     });

//     setEditingId(null);
//     refresh();
//   }

//   async function safeDelete(c: AdminCategory) {
//     if ((usageMap[c.name] ?? 0) > 0) {
//       alert(`Cannot delete. Used in ${usageMap[c.name]} products`);
//       return;
//     }

//     if (!confirm(`Delete category "${c.name}"?`)) return;

//     await deleteAdminCategory(c.id);
//     refresh();
//   }

//   if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

//   return (
//     <>
//       <div style={wrap}>
//         <div style={card}>
//           <h2 style={title}>Categories</h2>

//           <div style={addRow}>
//             <input
//               placeholder="New category"
//               value={newCategory}
//               onChange={(e) => setNewCategory(e.target.value)}
//               style={input}
//             />
//             <button onClick={addCategory} style={btn}>
//               Add
//             </button>
//           </div>

//           <table style={table}>
//             <thead>
//               <tr>
//                 <th style={th}>Name</th>
//                 <th style={th}>Active</th>
//                 <th style={th}>Used</th>
//                 <th style={th}>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {categories.map((c) => (
//                 <tr key={c.id}>
//                   <td style={td}>
//                     {editingId === c.id ? (
//                       <input
//                         value={editingValue}
//                         onChange={(e) => setEditingValue(e.target.value)}
//                         onBlur={() => saveEdit(c)}
//                         autoFocus
//                       />
//                     ) : (
//                       c.name
//                     )}
//                   </td>

//                   <td style={td}>
//                     <input
//                       type="checkbox"
//                       checked={c.is_active}
//                       onChange={() =>
//                         updateAdminCategory(c.id, {
//                           is_active: !c.is_active,
//                         }).then(refresh)
//                       }
//                     />
//                   </td>

//                   <td
//                     style={{
//                       ...td,
//                       cursor: "pointer",
//                       color: "#bf9602",
//                       fontWeight: 800,
//                     }}
//                     onClick={() => setShowCategory(c.name)}
//                   >
//                     {usageMap[c.name] ?? 0}
//                   </td>

//                   <td style={td}>
//                     <button
//                       onClick={() => {
//                         setEditingId(c.id);
//                         setEditingValue(c.name);
//                       }}
//                     >
//                       ✏️
//                     </button>
//                     <button onClick={() => safeDelete(c)}>🗑️</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showCategory && (
//         <CategoryProductsPanel
//           name={showCategory}
//           type="category"
//           onClose={() => setShowCategory(null)}
//         />
//       )}
//     </>
//   );
// }

// const wrap: React.CSSProperties = {
//   padding: 20,
//   maxWidth: 1000,
//   margin: "0 auto",
// };

// const card: React.CSSProperties = {
//   background: "#fff",
//   borderRadius: 18,
//   padding: 16,
//   boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
// };

// const title: React.CSSProperties = {
//   fontSize: 18,
//   fontWeight: 900,
//   marginBottom: 14,
// };

// const addRow: React.CSSProperties = {
//   display: "flex",
//   gap: 8,
//   marginBottom: 14,
// };

// const input: React.CSSProperties = {
//   flex: 1,
//   padding: 8,
//   borderRadius: 8,
//   border: "1px solid #ddd",
// };

// const btn: React.CSSProperties = {
//   padding: "8px 14px",
//   borderRadius: 8,
//   border: "none",
//   cursor: "pointer",
//   background: "#bf9602",
//   color: "#fff",
//   fontWeight: 700,
// };

// const table: React.CSSProperties = {
//   width: "100%",
//   borderCollapse: "collapse",
// };

// const th: React.CSSProperties = {
//   textAlign: "left",
//   fontSize: 12,
//   color: "#6C7A89",
//   padding: "10px 8px",
//   borderBottom: "1px solid #eee",
// };

// const td: React.CSSProperties = {
//   padding: "10px 8px",
//   borderBottom: "1px solid #f2f2f2",
//   fontSize: 14,
// };





///////////////


// import { useEffect, useState } from "react";
// import {
//   listAdminCategories,
//   createAdminCategory,
//   updateAdminCategory,
//   deleteAdminCategory,
//   getCategoryUsageCount,
// } from "../api";
// import type { AdminCategory } from "../types";
// import CategoryProductsPanel from "../components/CategoryProductsPanel";

// export default function CategoriesV2() {
//   const [categories, setCategories] = useState<AdminCategory[]>([]);
//   const [usageMap, setUsageMap] = useState<Record<string, number>>({});
//   const [loading, setLoading] = useState(true);

//   const [newCategory, setNewCategory] = useState("");
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editingValue, setEditingValue] = useState("");

//   const [showCategory, setShowCategory] = useState<string | null>(null);

//   useEffect(() => {
//     refresh();
//   }, []);

//   async function refresh() {
//     setLoading(true);
//     const rows = await listAdminCategories();
//     setCategories(rows);

//     const map: Record<string, number> = {};
//     for (const c of rows) {
//       map[c.name] = await getCategoryUsageCount(c.name);
//     }
//     setUsageMap(map);
//     setLoading(false);
//   }

//   function toSlug(v: string) {
//     return v.trim().toLowerCase().replace(/\s+/g, "-");
//   }

//   async function addCategory() {
//     if (!newCategory.trim()) return;

//     await createAdminCategory({
//       name: newCategory.trim(),
//       slug: toSlug(newCategory),
//       is_active: true,
//       display_order: categories.length + 1,
//     });

//     setNewCategory("");
//     refresh();
//   }

//   async function saveEdit(c: AdminCategory) {
//     const next = editingValue.trim();
//     if (!next) {
//       setEditingId(null);
//       return;
//     }

//     await updateAdminCategory(c.id, {
//       name: next,
//       slug: toSlug(next),
//     });

//     setEditingId(null);
//     refresh();
//   }

//   async function safeDelete(c: AdminCategory) {
//     if ((usageMap[c.name] ?? 0) > 0) {
//       alert(`Cannot delete. Used in ${usageMap[c.name]} products`);
//       return;
//     }

//     if (!confirm(`Delete category "${c.name}"?`)) return;

//     await deleteAdminCategory(c.id);
//     refresh();
//   }

//   if (loading) return <div style={loadingWrap}>Loading categories...</div>;

//   return (
//     <>
//       <div style={page}>
//         {/* HEADER */}
//         <div style={header}>
//           <div>
//             <h2 style={title}>Categories</h2>
//             <p style={subtitle}>
//               Manage product classification and structure
//             </p>
//           </div>
//         </div>

//         {/* ADD BAR */}
//         <div style={addBar}>
//           <input
//             placeholder="Enter category name..."
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             style={addInput}
//           />
//           <button onClick={addCategory} style={addBtn}>
//             Add Category
//           </button>
//         </div>

//         {/* TABLE */}
//         <div style={tableWrap}>
//           <table style={table}>
//             <thead>
//               <tr>
//                 <th style={{ ...th, width: "40%" }}>Name</th>
//                 <th style={{ ...th, width: "15%" }}>Active</th>
//                 <th style={{ ...th, width: "15%" }}>Used</th>
//                 <th style={{ ...th, width: "30%", textAlign: "right" }}>
//                   Actions
//                 </th>
//               </tr>
//             </thead>

//             <tbody>
//               {categories.map((c) => (
//                 <tr key={c.id} style={row}>
//                   <td style={td}>
//                     {editingId === c.id ? (
//                       <input
//                         value={editingValue}
//                         onChange={(e) => setEditingValue(e.target.value)}
//                         onBlur={() => saveEdit(c)}
//                         autoFocus
//                         style={editInput}
//                       />
//                     ) : (
//                       <strong>{c.name}</strong>
//                     )}
//                   </td>

//                   <td style={td}>
//                     <Toggle
//                       checked={c.is_active}
//                       onChange={() =>
//                         updateAdminCategory(c.id, {
//                           is_active: !c.is_active,
//                         }).then(refresh)
//                       }
//                     />
//                   </td>

//                   <td
//                     style={{ ...td, cursor: "pointer" }}
//                     onClick={() => setShowCategory(c.name)}
//                   >
//                     <span style={usageBadge}>
//                       {usageMap[c.name] ?? 0}
//                     </span>
//                   </td>

//                   <td style={{ ...td, textAlign: "right" }}>
//                     <button
//                       style={iconBtn}
//                       onClick={() => {
//                         setEditingId(c.id);
//                         setEditingValue(c.name);
//                       }}
//                     >
//                       ✏️
//                     </button>

//                     <button
//                       style={{ ...iconBtn, color: "#dc2626" }}
//                       onClick={() => safeDelete(c)}
//                     >
//                       🗑️
//                     </button>
//                   </td>
//                 </tr>
//               ))}

//               {categories.length === 0 && (
//                 <tr>
//                   <td colSpan={4} style={emptyState}>
//                     No categories created yet.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {showCategory && (
//         <CategoryProductsPanel
//           name={showCategory}
//           type="category"
//           onClose={() => setShowCategory(null)}
//         />
//       )}
//     </>
//   );
// }

// /* ================= STYLES ================= */

// const page: React.CSSProperties = {
//   padding: 28,
//   width: "100%",
// };

// const header: React.CSSProperties = {
//   marginBottom: 24,
// };

// const title: React.CSSProperties = {
//   fontSize: 22,
//   fontWeight: 900,
//   margin: 0,
// };

// const subtitle: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 6,
// };

// const addBar: React.CSSProperties = {
//   display: "flex",
//   gap: 12,
//   marginBottom: 20,
// };

// const addInput: React.CSSProperties = {
//   flex: 1,
//   padding: "12px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   background: "#fafafa",
// };

// const addBtn: React.CSSProperties = {
//   padding: "12px 18px",
//   borderRadius: 12,
//   border: "none",
//   background: "#bf9602",
//   color: "#fff",
//   fontWeight: 800,
//   cursor: "pointer",
// };

// const tableWrap: React.CSSProperties = {
//   background: "#fff",
//   borderRadius: 16,
//   overflow: "hidden",
//   boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// };

// const table: React.CSSProperties = {
//   width: "100%",
//   borderCollapse: "collapse",
// };

// const th: React.CSSProperties = {
//   textAlign: "left",
//   fontSize: 12,
//   fontWeight: 800,
//   color: "#6b7280",
//   padding: "14px 18px",
//   background: "#f9fafb",
//   borderBottom: "1px solid #eee",
// };

// const td: React.CSSProperties = {
//   padding: "14px 18px",
//   borderBottom: "1px solid #f1f1f1",
//   fontSize: 14,
// };

// const row: React.CSSProperties = {
//   transition: "background 0.15s ease",
// };

// const usageBadge: React.CSSProperties = {
//   background: "#bf9602",
//   color: "#fff",
//   padding: "4px 10px",
//   borderRadius: 999,
//   fontWeight: 800,
//   fontSize: 12,
// };

// const iconBtn: React.CSSProperties = {
//   background: "none",
//   border: "none",
//   cursor: "pointer",
//   fontSize: 16,
//   marginLeft: 10,
// };

// const editInput: React.CSSProperties = {
//   padding: "8px 10px",
//   borderRadius: 8,
//   border: "1px solid #e5e7eb",
// };

// const emptyState: React.CSSProperties = {
//   padding: 30,
//   textAlign: "center",
//   color: "#6b7280",
// };

// const loadingWrap: React.CSSProperties = {
//   padding: 30,
// };

// /* ===== TOGGLE ===== */

// function Toggle({ checked, onChange }: any) {
//   return (
//     <label style={toggleWrap}>
//       <input
//         type="checkbox"
//         checked={checked}
//         onChange={onChange}
//         style={toggleInput}
//       />
//       <span
//         style={{
//           ...toggleTrack,
//           background: checked ? "#bf9602" : "#e5e7eb",
//         }}
//       />
//       <span
//         style={{
//           ...toggleThumb,
//           transform: checked ? "translateX(18px)" : "translateX(0)",
//         }}
//       />
//     </label>
//   );
// }

// const toggleWrap: React.CSSProperties = {
//   position: "relative",
//   width: 42,
//   height: 22,
// };

// const toggleInput: React.CSSProperties = {
//   opacity: 0,
//   width: 42,
//   height: 22,
// };

// const toggleTrack: React.CSSProperties = {
//   position: "absolute",
//   inset: 0,
//   borderRadius: 999,
//   background: "#e5e7eb",
// };

// const toggleThumb: React.CSSProperties = {
//   position: "absolute",
//   width: 18,
//   height: 18,
//   borderRadius: 999,
//   background: "#fff",
//   top: 2,
//   left: 2,
//   transition: "transform 0.15s ease",
// };





//////////////////////////




// import { useEffect, useState } from "react";
// import {
//   listAdminCategories,
//   listAdminSubCategories,
//   createAdminCategory,
//   updateAdminCategory,
//   deleteAdminCategory,
//   createAdminSubCategory,
//   updateAdminSubCategory,
//   deleteAdminSubCategory,
//   getCategoryUsageCount,
//   getSubCategoryUsageCount,
// } from "../api";

// import type { AdminCategory, AdminSubCategory } from "../types";

// export default function CategoriesV2() {
//   const [categories, setCategories] = useState<AdminCategory[]>([]);
//   const [subcategories, setSubcategories] = useState<AdminSubCategory[]>([]);
//   const [usageMain, setUsageMain] = useState<Record<string, number>>({});
//   const [usageSub, setUsageSub] = useState<Record<string, number>>({});
//   const [expanded, setExpanded] = useState<string | null>(null);
//   const [newCategory, setNewCategory] = useState("");

//   const [editing, setEditing] = useState<string | null>(null);
//   const [editingValue, setEditingValue] = useState("");

//   useEffect(() => {
//     refresh();
//   }, []);

//   async function refresh() {
//     const cats = await listAdminCategories();
//     const subs = await listAdminSubCategories();

//     setCategories(cats);
//     setSubcategories(subs);

//     const mainUsage: Record<string, number> = {};
//     const subUsage: Record<string, number> = {};

//     for (const c of cats) {
//       mainUsage[c.name] = await getCategoryUsageCount(c.name);
//     }

//     for (const s of subs) {
//       subUsage[s.name] = await getSubCategoryUsageCount(s.name);
//     }

//     setUsageMain(mainUsage);
//     setUsageSub(subUsage);
//   }

//   function toSlug(v: string) {
//     return v.trim().toLowerCase().replace(/\s+/g, "-");
//   }

//   async function addCategory() {
//     if (!newCategory.trim()) return;

//     await createAdminCategory({
//       name: newCategory.trim(),
//       slug: toSlug(newCategory),
//       is_active: true,
//       display_order: categories.length + 1,
//     });

//     setNewCategory("");
//     refresh();
//   }

//   async function safeDeleteCategory(c: AdminCategory) {
//     if ((usageMain[c.name] ?? 0) > 0) {
//       alert("Cannot delete. Used in products.");
//       return;
//     }

//     if (!confirm(`Delete category "${c.name}"?`)) return;

//     await deleteAdminCategory(c.id);
//     refresh();
//   }

//   async function safeDeleteSub(s: AdminSubCategory) {
//     if ((usageSub[s.name] ?? 0) > 0) {
//       alert("Cannot delete. Used in products.");
//       return;
//     }

//     if (!confirm(`Delete subcategory "${s.name}"?`)) return;

//     await deleteAdminSubCategory(s.id);
//     refresh();
//   }

//   return (
//     <div style={wrap}>
//       <div style={card}>
//         <h2 style={title}>Categories</h2>

//         <div style={addRow}>
//           <input
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             placeholder="Add new category"
//             style={input}
//           />
//           <button onClick={addCategory} style={btn}>
//             Add
//           </button>
//         </div>

//         <div style={responsiveTable}>
//           {categories.map((cat) => {
//             const subs = subcategories.filter(
//               (s) => s.category_id === cat.id
//             );

//             return (
//               <div key={cat.id} style={categoryBlock}>
//                 {/* MAIN CATEGORY ROW */}
//                 <div style={rowMain}>
//                   <div
//                     style={nameCell}
//                     onClick={() =>
//                       setExpanded(expanded === cat.id ? null : cat.id)
//                     }
//                   >
//                     {expanded === cat.id ? "▼" : "▶"}{" "}
//                     {editing === cat.id ? (
//                       <input
//                         value={editingValue}
//                         onChange={(e) => setEditingValue(e.target.value)}
//                         onBlur={async () => {
//                           await updateAdminCategory(cat.id, {
//                             name: editingValue,
//                             slug: toSlug(editingValue),
//                           });
//                           setEditing(null);
//                           refresh();
//                         }}
//                         autoFocus
//                       />
//                     ) : (
//                       cat.name
//                     )}
//                   </div>

//                   <div style={countCell}>
//                     {usageMain[cat.name] ?? 0}
//                   </div>

//                   <div style={toggleCell}>
//                     <input
//                       type="checkbox"
//                       checked={cat.is_active}
//                       onChange={async () => {
//                         await updateAdminCategory(cat.id, {
//                           is_active: !cat.is_active,
//                         });
//                         refresh();
//                       }}
//                     />
//                   </div>

//                   <div style={actionCell}>
//                     <button
//                       onClick={() => {
//                         setEditing(cat.id);
//                         setEditingValue(cat.name);
//                       }}
//                     >
//                       ✏️
//                     </button>

//                     <button
//                       onClick={() => safeDeleteCategory(cat)}
//                       style={{ color: "red" }}
//                     >
//                       🗑️
//                     </button>
//                   </div>
//                 </div>

//                 {/* SUBCATEGORY LIST */}
//                 {expanded === cat.id &&
//                   subs.map((sub) => (
//                     <div key={sub.id} style={rowSub}>
//                       <div style={subName}>
//                         {editing === sub.id ? (
//                           <input
//                             value={editingValue}
//                             onChange={(e) =>
//                               setEditingValue(e.target.value)
//                             }
//                             onBlur={async () => {
//                               await updateAdminSubCategory(sub.id, {
//                                 name: editingValue,
//                                 slug: toSlug(editingValue),
//                               });
//                               setEditing(null);
//                               refresh();
//                             }}
//                             autoFocus
//                           />
//                         ) : (
//                           sub.name
//                         )}
//                       </div>

//                       <div style={countCell}>
//                         {usageSub[sub.name] ?? 0}
//                       </div>

//                       <div style={toggleCell}>
//                         <input
//                           type="checkbox"
//                           checked={sub.is_active}
//                           onChange={async () => {
//                             await updateAdminSubCategory(sub.id, {
//                               is_active: !sub.is_active,
//                             });
//                             refresh();
//                           }}
//                         />
//                       </div>

//                       <div style={actionCell}>
//                         <button
//                           onClick={() => {
//                             setEditing(sub.id);
//                             setEditingValue(sub.name);
//                           }}
//                         >
//                           ✏️
//                         </button>

//                         <button
//                           onClick={() => safeDeleteSub(sub)}
//                           style={{ color: "red" }}
//                         >
//                           🗑️
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const wrap: React.CSSProperties = {
//   padding: 20,
//   maxWidth: 1100,
//   margin: "0 auto",
// };

// const card: React.CSSProperties = {
//   background: "#fff",
//   padding: 20,
//   borderRadius: 18,
//   boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
// };

// const title: React.CSSProperties = {
//   fontSize: 18,
//   fontWeight: 900,
//   marginBottom: 20,
// };

// const addRow: React.CSSProperties = {
//   display: "flex",
//   gap: 10,
//   marginBottom: 20,
// };

// const input: React.CSSProperties = {
//   flex: 1,
//   padding: 10,
//   borderRadius: 8,
//   border: "1px solid #ddd",
// };

// const btn: React.CSSProperties = {
//   padding: "10px 16px",
//   borderRadius: 8,
//   border: "none",
//   background: "#bf9602",
//   color: "#fff",
//   fontWeight: 700,
//   cursor: "pointer",
// };

// const responsiveTable: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 10,
// };

// const categoryBlock: React.CSSProperties = {
//   border: "1px solid #f1f1f1",
//   borderRadius: 12,
//   overflow: "hidden",
// };

// const rowMain: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 100px 80px 120px",
//   padding: 12,
//   alignItems: "center",
//   background: "#fafafa",
// };

// const rowSub: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 100px 80px 120px",
//   padding: 12,
//   alignItems: "center",
//   paddingLeft: 40,
//   borderTop: "1px solid #f2f2f2",
// };

// const nameCell = { fontWeight: 700, cursor: "pointer" };
// const subName = { fontWeight: 500 };
// const countCell = { fontWeight: 700 };
// const toggleCell = { textAlign: "center" };
// const actionCell = { display: "flex", gap: 8 };





///////////////////////////////////


// import { useEffect, useMemo, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import type { AdminCategory, AdminSubCategory } from "../types";

// import {
//   listAdminCategories,
//   listAdminSubCategories,
//   createAdminCategory,
//   updateAdminCategory,
//   deleteAdminCategory,
//   createAdminSubCategory,
//   updateAdminSubCategory,
//   deleteAdminSubCategory,
//   getCategoryUsageCount,
//   getSubCategoryUsageCount,
//   reorderAdminCategories,
//   reorderAdminSubCategories,
//   bulkSetCategoriesActive,
//   bulkSetSubCategoriesActive,
//   listProductsByCategoryName,
//   listProductsBySubCategoryName,
//   type ProductLite,
// } from "../api";

// type UsageTarget =
//   | { type: "category"; name: string }
//   | { type: "subcategory"; name: string }
//   | null;

// export default function CategoriesV2() {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);

//   const [categories, setCategories] = useState<AdminCategory[]>([]);
//   const [subcategories, setSubcategories] = useState<AdminSubCategory[]>([]);

//   const [usageMain, setUsageMain] = useState<Record<string, number>>({});
//   const [usageSub, setUsageSub] = useState<Record<string, number>>({});

//   const [expanded, setExpanded] = useState<string | null>(null);

//   // search
//   const [q, setQ] = useState("");

//   // add main category
//   const [newCategory, setNewCategory] = useState("");

//   // add subcategory
//   const [subDraft, setSubDraft] = useState<Record<string, string>>({});

//   // inline editing (category/subcategory)
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editingValue, setEditingValue] = useState("");

//   // bulk selection
//   const [selectedCats, setSelectedCats] = useState<Record<string, boolean>>({});
//   const [selectedSubs, setSelectedSubs] = useState<Record<string, boolean>>({});

//   // usage modal
//   const [usageTarget, setUsageTarget] = useState<UsageTarget>(null);
//   const [usageProducts, setUsageProducts] = useState<ProductLite[]>([]);
//   const [usageLoading, setUsageLoading] = useState(false);

//   // drag/drop
//   const dragCatId = useRef<string | null>(null);
//   const dragSubId = useRef<string | null>(null);

//   useEffect(() => {
//     refresh();
//   }, []);

//   async function refresh() {
//     setLoading(true);

//     const cats = await listAdminCategories();
//     const subs = await listAdminSubCategories();

//     setCategories(cats);
//     setSubcategories(subs);

//     const mainUsage: Record<string, number> = {};
//     const subUsage: Record<string, number> = {};

//     for (const c of cats) mainUsage[c.name] = await getCategoryUsageCount(c.name);
//     for (const s of subs) subUsage[s.name] = await getSubCategoryUsageCount(s.name);

//     setUsageMain(mainUsage);
//     setUsageSub(subUsage);

//     setLoading(false);
//   }

//   function toSlug(v: string) {
//     return v.trim().toLowerCase().replace(/\s+/g, "-");
//   }

//   // =========================
//   // FILTERED DATA
//   // =========================
//   const filteredCategories = useMemo(() => {
//     const term = q.trim().toLowerCase();
//     if (!term) return categories;

//     return categories.filter((c) => {
//       const nameMatch = c.name.toLowerCase().includes(term);
//       const subMatch = subcategories
//         .filter((s) => s.category_id === c.id)
//         .some((s) => s.name.toLowerCase().includes(term));
//       return nameMatch || subMatch;
//     });
//   }, [q, categories, subcategories]);

//   // =========================
//   // ADD MAIN CATEGORY
//   // =========================
//   async function addCategory() {
//     if (!newCategory.trim()) return;

//     await createAdminCategory({
//       name: newCategory.trim(),
//       slug: toSlug(newCategory),
//       is_active: true,
//       display_order: categories.length + 1,
//     });

//     setNewCategory("");
//     refresh();
//   }

//   // =========================
//   // ADD SUBCATEGORY
//   // =========================
//   async function addSub(category: AdminCategory) {
//     const name = (subDraft[category.id] ?? "").trim();
//     if (!name) return;

//     const currentSubs = subcategories.filter((s) => s.category_id === category.id);
//     await createAdminSubCategory({
//       category_id: category.id,
//       name,
//       slug: toSlug(name),
//       is_active: true,
//       display_order: currentSubs.length + 1,
//     });

//     setSubDraft((p) => ({ ...p, [category.id]: "" }));
//     setExpanded(category.id);
//     refresh();
//   }

//   // =========================
//   // SAFE DELETE
//   // =========================
//   async function safeDeleteCategory(c: AdminCategory) {
//     if ((usageMain[c.name] ?? 0) > 0) {
//       alert(`Cannot delete. Used in ${usageMain[c.name]} products`);
//       return;
//     }
//     const hasSubs = subcategories.some((s) => s.category_id === c.id);
//     if (hasSubs) {
//       alert("Cannot delete. This category has subcategories.");
//       return;
//     }

//     if (!confirm(`Delete category "${c.name}"?`)) return;
//     await deleteAdminCategory(c.id);
//     refresh();
//   }

//   async function safeDeleteSub(s: AdminSubCategory) {
//     if ((usageSub[s.name] ?? 0) > 0) {
//       alert(`Cannot delete. Used in ${usageSub[s.name]} products`);
//       return;
//     }

//     if (!confirm(`Delete subcategory "${s.name}"?`)) return;
//     await deleteAdminSubCategory(s.id);
//     refresh();
//   }

//   // =========================
//   // BULK ACTIONS
//   // =========================
//   const selectedCategoryIds = useMemo(
//     () => Object.keys(selectedCats).filter((id) => selectedCats[id]),
//     [selectedCats]
//   );
//   const selectedSubIds = useMemo(
//     () => Object.keys(selectedSubs).filter((id) => selectedSubs[id]),
//     [selectedSubs]
//   );

//   async function bulkCats(active: boolean) {
//     await bulkSetCategoriesActive(selectedCategoryIds, active);
//     setSelectedCats({});
//     refresh();
//   }

//   async function bulkSubs(active: boolean) {
//     await bulkSetSubCategoriesActive(selectedSubIds, active);
//     setSelectedSubs({});
//     refresh();
//   }

//   // =========================
//   // USAGE MODAL
//   // =========================
//   async function openUsage(target: UsageTarget) {
//     if (!target) return;
//     setUsageTarget(target);
//     setUsageLoading(true);
//     try {
//       const items =
//         target.type === "category"
//           ? await listProductsByCategoryName(target.name)
//           : await listProductsBySubCategoryName(target.name);

//       setUsageProducts(items);
//     } finally {
//       setUsageLoading(false);
//     }
//   }

//   function goToProductEdit(productId: string) {
//     // IMPORTANT: adjust the route if your edit path differs
//     // Common patterns: /products/:id/edit  OR  /products/edit/:id
//     navigate(`/products/${productId}/edit`);
//   }

//   // =========================
//   // DRAG & DROP (CATEGORY)
//   // =========================
//   async function onDropCategory(targetId: string) {
//     const fromId = dragCatId.current;
//     dragCatId.current = null;
//     if (!fromId || fromId === targetId) return;

//     const arr = [...categories].sort((a, b) => a.display_order - b.display_order);
//     const fromIdx = arr.findIndex((x) => x.id === fromId);
//     const toIdx = arr.findIndex((x) => x.id === targetId);
//     if (fromIdx < 0 || toIdx < 0) return;

//     const [moved] = arr.splice(fromIdx, 1);
//     arr.splice(toIdx, 0, moved);

//     const ordered = arr.map((c, i) => ({ id: c.id, display_order: i + 1 }));
//     setCategories(ordered.map((o) => ({ ...arr.find((x) => x.id === o.id)!, display_order: o.display_order })));

//     await reorderAdminCategories(ordered);
//     refresh();
//   }

//   // =========================
//   // DRAG & DROP (SUBCATEGORY)
//   // =========================
//   async function onDropSub(categoryId: string, targetSubId: string) {
//     const fromId = dragSubId.current;
//     dragSubId.current = null;
//     if (!fromId || fromId === targetSubId) return;

//     const subs = subcategories
//       .filter((s) => s.category_id === categoryId)
//       .sort((a, b) => a.display_order - b.display_order);

//     const fromIdx = subs.findIndex((x) => x.id === fromId);
//     const toIdx = subs.findIndex((x) => x.id === targetSubId);
//     if (fromIdx < 0 || toIdx < 0) return;

//     const [moved] = subs.splice(fromIdx, 1);
//     subs.splice(toIdx, 0, moved);

//     const ordered = subs.map((s, i) => ({ id: s.id, display_order: i + 1 }));

//     // update local immediately
//     const nextAll = subcategories.map((s) => {
//       const found = ordered.find((o) => o.id === s.id);
//       return found ? { ...s, display_order: found.display_order } : s;
//     });
//     setSubcategories(nextAll);

//     await reorderAdminSubCategories(ordered);
//     refresh();
//   }

//   if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

//   return (
//     <div style={wrap}>
//       <div style={card}>
//         <div style={headRow}>
//           <div>
//             <h2 style={title}>Categories</h2>
//             <div style={subTitle}>Manage categories + subcategories + ordering</div>
//           </div>

//           <div style={searchWrap}>
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search category / subcategory..."
//               style={searchInput}
//             />
//           </div>
//         </div>

//         {/* ADD MAIN CATEGORY */}
//         <div style={addRow}>
//           <input
//             placeholder="Add new category"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             style={input}
//           />
//           <button onClick={addCategory} style={btn}>
//             Add Category
//           </button>
//         </div>

//         {/* BULK ACTIONS BAR */}
//         {(selectedCategoryIds.length > 0 || selectedSubIds.length > 0) && (
//           <div style={bulkBar}>
//             <div style={bulkLeft}>
//               <strong>Selected:</strong>{" "}
//               <span>
//                 {selectedCategoryIds.length} categories, {selectedSubIds.length} subcategories
//               </span>
//             </div>

//             <div style={bulkRight}>
//               {selectedCategoryIds.length > 0 && (
//                 <>
//                   <button style={bulkBtn} onClick={() => bulkCats(true)}>
//                     Activate Categories
//                   </button>
//                   <button style={bulkBtnGhost} onClick={() => bulkCats(false)}>
//                     Deactivate Categories
//                   </button>
//                 </>
//               )}

//               {selectedSubIds.length > 0 && (
//                 <>
//                   <button style={bulkBtn} onClick={() => bulkSubs(true)}>
//                     Activate Subcategories
//                   </button>
//                   <button style={bulkBtnGhost} onClick={() => bulkSubs(false)}>
//                     Deactivate Subcategories
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         )}

//         {/* LIST */}
//         <div style={list}>
//           {filteredCategories
//             .slice()
//             .sort((a, b) => a.display_order - b.display_order)
//             .map((cat) => {
//               const subs = subcategories
//                 .filter((s) => s.category_id === cat.id)
//                 .sort((a, b) => a.display_order - b.display_order);

//               const isOpen = expanded === cat.id;

//               return (
//                 <div key={cat.id} style={block}>
//                   {/* CATEGORY ROW */}
//                   <div
//                     style={rowMain}
//                     draggable
//                     onDragStart={() => (dragCatId.current = cat.id)}
//                     onDragOver={(e) => e.preventDefault()}
//                     onDrop={() => onDropCategory(cat.id)}
//                   >
//                     <div style={cellCheck}>
//                       <input
//                         type="checkbox"
//                         checked={!!selectedCats[cat.id]}
//                         onChange={(e) =>
//                           setSelectedCats((p) => ({ ...p, [cat.id]: e.target.checked }))
//                         }
//                       />
//                     </div>

//                     <button
//                       type="button"
//                       style={expandBtn}
//                       onClick={() => setExpanded(isOpen ? null : cat.id)}
//                       aria-label="toggle"
//                     >
//                       {isOpen ? "▼" : "▶"}
//                     </button>

//                     <div style={cellName}>
//                       {editingId === cat.id ? (
//                         <input
//                           value={editingValue}
//                           onChange={(e) => setEditingValue(e.target.value)}
//                           onBlur={async () => {
//                             const next = editingValue.trim();
//                             setEditingId(null);
//                             if (!next) return;
//                             await updateAdminCategory(cat.id, { name: next, slug: toSlug(next) });
//                             refresh();
//                           }}
//                           autoFocus
//                           style={inlineInput}
//                         />
//                       ) : (
//                         <div style={nameLine}>
//                           <span style={nameStrong}>{cat.name}</span>
//                           <span style={pill}>Order: {cat.display_order}</span>
//                           {!cat.is_active && <span style={pillOff}>Inactive</span>}
//                         </div>
//                       )}
//                       {/* <div style={miniLine}>
//                         Drag to reorder • Click arrow to view subcategories
//                       </div> */}
//                     </div>

//                     <button
//                       type="button"
//                       style={cellCountBtn}
//                       onClick={() => openUsage({ type: "category", name: cat.name })}
//                       title="View products"
//                     >
//                       {usageMain[cat.name] ?? 0}
//                     </button>

//                     <div style={cellToggle}>
//                       <input
//                         type="checkbox"
//                         checked={cat.is_active}
//                         onChange={async () => {
//                           await updateAdminCategory(cat.id, { is_active: !cat.is_active });
//                           refresh();
//                         }}
//                       />
//                     </div>

//                     <div style={cellActions}>
//                       <button
//                         type="button"
//                         style={iconBtn}
//                         onClick={() => {
//                           setEditingId(cat.id);
//                           setEditingValue(cat.name);
//                         }}
//                         title="Edit"
//                       >
//                         ✏️
//                       </button>
//                       <button
//                         type="button"
//                         style={iconBtnDanger}
//                         onClick={() => safeDeleteCategory(cat)}
//                         title="Delete"
//                       >
//                         🗑️
//                       </button>
//                     </div>
//                   </div>

//                   {/* EXPAND AREA (ANIMATED) */}
//                   <div
//                     style={{
//                       ...expandWrap,
//                       maxHeight: isOpen ? 600 : 0,
//                       opacity: isOpen ? 1 : 0,
//                       padding: isOpen ? "12px 12px 14px" : "0 12px",
//                     }}
//                   >
//                     {/* ADD SUBCATEGORY */}
//                     <div style={subAddRow}>
//                       <input
//                         value={subDraft[cat.id] ?? ""}
//                         onChange={(e) =>
//                           setSubDraft((p) => ({ ...p, [cat.id]: e.target.value }))
//                         }
//                         placeholder={`Add subcategory under "${cat.name}"`}
//                         style={subInput}
//                       />
//                       <button style={subBtn} onClick={() => addSub(cat)}>
//                         Add Sub
//                       </button>
//                     </div>

//                     {/* SUBCATEGORIES */}
//                     {subs.length === 0 ? (
//                       <div style={emptySub}>No subcategories yet.</div>
//                     ) : (
//                       <div style={subList}>
//                         {subs.map((s) => (
//                           <div
//                             key={s.id}
//                             style={rowSub}
//                             draggable
//                             onDragStart={() => (dragSubId.current = s.id)}
//                             onDragOver={(e) => e.preventDefault()}
//                             onDrop={() => onDropSub(cat.id, s.id)}
//                           >
//                             <div style={cellCheck}>
//                               <input
//                                 type="checkbox"
//                                 checked={!!selectedSubs[s.id]}
//                                 onChange={(e) =>
//                                   setSelectedSubs((p) => ({ ...p, [s.id]: e.target.checked }))
//                                 }
//                               />
//                             </div>

//                             <div style={subIndent}>↳</div>

//                             <div style={cellName}>
//                               {editingId === s.id ? (
//                                 <input
//                                   value={editingValue}
//                                   onChange={(e) => setEditingValue(e.target.value)}
//                                   onBlur={async () => {
//                                     const next = editingValue.trim();
//                                     setEditingId(null);
//                                     if (!next) return;
//                                     await updateAdminSubCategory(s.id, { name: next, slug: toSlug(next) });
//                                     refresh();
//                                   }}
//                                   autoFocus
//                                   style={inlineInput}
//                                 />
//                               ) : (
//                                 <div style={nameLine}>
//                                   <span style={nameSub}>{s.name}</span>
//                                   <span style={pill}>Order: {s.display_order}</span>
//                                   {!s.is_active && <span style={pillOff}>Inactive</span>}
//                                 </div>
//                               )}
//                               {/* <div style={miniLine}>Drag to reorder inside this category</div> */}
//                             </div>

//                             <button
//                               type="button"
//                               style={cellCountBtn}
//                               onClick={() => openUsage({ type: "subcategory", name: s.name })}
//                               title="View products"
//                             >
//                               {usageSub[s.name] ?? 0}
//                             </button>

//                             <div style={cellToggle}>
//                               <input
//                                 type="checkbox"
//                                 checked={s.is_active}
//                                 onChange={async () => {
//                                   await updateAdminSubCategory(s.id, { is_active: !s.is_active });
//                                   refresh();
//                                 }}
//                               />
//                             </div>

//                             <div style={cellActions}>
//                               <button
//                                 type="button"
//                                 style={iconBtn}
//                                 onClick={() => {
//                                   setEditingId(s.id);
//                                   setEditingValue(s.name);
//                                 }}
//                                 title="Edit"
//                               >
//                                 ✏️
//                               </button>

//                               <button
//                                 type="button"
//                                 style={iconBtnDanger}
//                                 onClick={() => safeDeleteSub(s)}
//                                 title="Delete"
//                               >
//                                 🗑️
//                               </button>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//         </div>
//       </div>

//       {/* USAGE MODAL */}
//       {usageTarget && (
//         <Modal
//           title={
//             usageTarget.type === "category"
//               ? `Products in Category: ${usageTarget.name}`
//               : `Products in Subcategory: ${usageTarget.name}`
//           }
//           onClose={() => {
//             setUsageTarget(null);
//             setUsageProducts([]);
//           }}
//         >
//           {usageLoading ? (
//             <div style={{ padding: 12 }}>Loading products...</div>
//           ) : usageProducts.length === 0 ? (
//             <div style={{ padding: 12 }}>No products found.</div>
//           ) : (
//             <div style={modalList}>
//               {usageProducts.map((p) => (
//                 <button
//                   key={p.id}
//                   type="button"
//                   style={productRow}
//                   onClick={() => goToProductEdit(p.id)}
//                   title="Go to product edit"
//                 >
//                   <div style={{ minWidth: 0 }}>
//                     <div style={pName}>{p.name}</div>
//                     <div style={pMeta}>
//                       {p.brand ? `Brand: ${p.brand}` : "No brand"} • Price: ₹{p.price} • Stock: {p.stock} •{" "}
//                       {p.is_active ? "Active" : "Inactive"}
//                     </div>
//                   </div>
//                   <div style={goPill}>Open</div>
//                 </button>
//               ))}
//             </div>
//           )}
//         </Modal>
//       )}
//     </div>
//   );
// }

// /* =========================
//    MODAL
// ========================= */

// function Modal({
//   title,
//   children,
//   onClose,
// }: {
//   title: string;
//   children: React.ReactNode;
//   onClose: () => void;
// }) {
//   return (
//     <div style={overlay} onMouseDown={onClose}>
//       <div style={modal} onMouseDown={(e) => e.stopPropagation()}>
//         <div style={modalHead}>
//           <div style={modalTitle}>{title}</div>
//           <button type="button" style={closeBtn} onClick={onClose}>
//             ✕
//           </button>
//         </div>
//         <div style={modalBody}>{children}</div>
//       </div>
//     </div>
//   );
// }

// /* =========================
//    STYLES
// ========================= */

// const wrap: React.CSSProperties = { padding: 20, maxWidth: 1100, margin: "0 auto" };

// const card: React.CSSProperties = {
//   background: "#fff",
//   borderRadius: 18,
//   padding: 16,
//   boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
// };

// const headRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "end",
//   gap: 12,
//   flexWrap: "wrap",
//   marginBottom: 12,
// };

// const title: React.CSSProperties = { fontSize: 18, fontWeight: 900, margin: 0 };

// const subTitle: React.CSSProperties = { fontSize: 12, color: "#6B7280", marginTop: 6 };

// const searchWrap: React.CSSProperties = { minWidth: 260, flex: "0 0 320px" };

// const searchInput: React.CSSProperties = {
//   width: "100%",
//   padding: "10px 12px",
//   borderRadius: 12,
//   border: "1px solid #E5E7EB",
//   background: "#FAFAFA",
//   outline: "none",
// };

// const addRow: React.CSSProperties = { display: "flex", gap: 10, marginBottom: 12, flexWrap: "wrap" };

// const input: React.CSSProperties = {
//   flex: 1,
//   minWidth: 240,
//   padding: 10,
//   borderRadius: 12,
//   border: "1px solid #E5E7EB",
//   background: "#FAFAFA",
//   outline: "none",
// };

// const btn: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   border: "none",
//   background: "#bf9602",
//   color: "#fff",
//   fontWeight: 800,
//   cursor: "pointer",
// };

// const bulkBar: React.CSSProperties = {
//   margin: "10px 0 14px",
//   padding: "10px 12px",
//   borderRadius: 14,
//   border: "1px solid #f1f1f1",
//   background: "#fff",
//   boxShadow: "0 8px 18px rgba(0,0,0,0.05)",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   gap: 12,
//   flexWrap: "wrap",
// };

// const bulkLeft: React.CSSProperties = { display: "flex", gap: 8, alignItems: "center" };

// const bulkRight: React.CSSProperties = { display: "flex", gap: 10, flexWrap: "wrap" };

// const bulkBtn: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 12,
//   border: "none",
//   background: "#111827",
//   color: "#fff",
//   fontWeight: 800,
//   cursor: "pointer",
// };

// const bulkBtnGhost: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 12,
//   border: "1px solid #E5E7EB",
//   background: "#fff",
//   fontWeight: 800,
//   cursor: "pointer",
// };

// const list: React.CSSProperties = { display: "flex", flexDirection: "column", gap: 10 };

// const block: React.CSSProperties = {
//   border: "1px solid #f1f1f1",
//   borderRadius: 14,
//   overflow: "hidden",
// };

// const rowMain: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "40px 40px 1fr 90px 70px 110px",
//   alignItems: "center",
//   gap: 8,
//   padding: 12,
//   background: "#fafafa",
// };

// const rowSub: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "40px 40px 1fr 90px 70px 110px",
//   alignItems: "center",
//   gap: 8,
//   padding: 12,
//   borderTop: "1px solid #f2f2f2",
//   background: "#fff",
// };

// const cellCheck: React.CSSProperties = { display: "flex", justifyContent: "center" };

// const expandBtn: React.CSSProperties = {
//   border: "1px solid #E5E7EB",
//   background: "#fff",
//   width: 30,
//   height: 30,
//   borderRadius: 10,
//   cursor: "pointer",
//   fontWeight: 900,
// };

// const cellName: React.CSSProperties = { minWidth: 0 };

// const nameLine: React.CSSProperties = {
//   display: "flex",
//   gap: 8,
//   alignItems: "center",
//   flexWrap: "wrap",
// };

// const nameStrong: React.CSSProperties = { fontWeight: 900, color: "#111827" };
// const nameSub: React.CSSProperties = { fontWeight: 800, color: "#111827" };

// const miniLine: React.CSSProperties = { fontSize: 12, color: "#6B7280", marginTop: 4 };

// const pill: React.CSSProperties = {
//   fontSize: 11,
//   fontWeight: 900,
//   padding: "4px 8px",
//   borderRadius: 999,
//   border: "1px solid #E5E7EB",
//   background: "#fff",
//   color: "#111827",
// };

// const pillOff: React.CSSProperties = {
//   fontSize: 11,
//   fontWeight: 900,
//   padding: "4px 8px",
//   borderRadius: 999,
//   border: "1px solid #fecaca",
//   background: "#fff1f2",
//   color: "#991b1b",
// };

// const cellCountBtn: React.CSSProperties = {
//   border: "none",
//   background: "transparent",
//   cursor: "pointer",
//   fontWeight: 900,
//   color: "#bf9602",
//   justifySelf: "center",
// };

// const cellToggle: React.CSSProperties = { justifySelf: "center" };

// const cellActions: React.CSSProperties = { display: "flex", gap: 10, justifySelf: "end" };

// const iconBtn: React.CSSProperties = {
//   border: "1px solid #E5E7EB",
//   background: "#fff",
//   width: 36,
//   height: 32,
//   borderRadius: 12,
//   cursor: "pointer",
// };

// const iconBtnDanger: React.CSSProperties = {
//   ...iconBtn,
//   borderColor: "#fecaca",
//   background: "#fff",
// };

// const expandWrap: React.CSSProperties = {
//   overflow: "hidden",
//   transition: "max-height 260ms ease, opacity 220ms ease, padding 220ms ease",
//   background: "#fff",
// };

// const subAddRow: React.CSSProperties = {
//   display: "flex",
//   gap: 10,
//   marginBottom: 12,
//   flexWrap: "wrap",
// };

// const subInput: React.CSSProperties = {
//   flex: 1,
//   minWidth: 220,
//   padding: 10,
//   borderRadius: 12,
//   border: "1px solid #E5E7EB",
//   background: "#FAFAFA",
//   outline: "none",
// };

// const subBtn: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   border: "none",
//   background: "#111827",
//   color: "#fff",
//   fontWeight: 900,
//   cursor: "pointer",
// };

// const emptySub: React.CSSProperties = { fontSize: 12, color: "#6B7280", padding: 10 };

// const subList: React.CSSProperties = { display: "flex", flexDirection: "column" };

// const subIndent: React.CSSProperties = { textAlign: "center", color: "#9CA3AF", fontWeight: 900 };

// const inlineInput: React.CSSProperties = {
//   width: "100%",
//   padding: "8px 10px",
//   borderRadius: 12,
//   border: "1px solid #E5E7EB",
//   background: "#fff",
//   outline: "none",
//   fontWeight: 800,
// };

// const overlay: React.CSSProperties = {
//   position: "fixed",
//   inset: 0,
//   background: "rgba(0,0,0,0.38)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   padding: 16,
//   zIndex: 9999,
// };

// const modal: React.CSSProperties = {
//   width: "min(920px, 100%)",
//   background: "#fff",
//   borderRadius: 18,
//   boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
//   overflow: "hidden",
// };

// const modalHead: React.CSSProperties = {
//   padding: "14px 16px",
//   borderBottom: "1px solid #f1f1f1",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   gap: 10,
// };

// const modalTitle: React.CSSProperties = { fontWeight: 900, fontSize: 14 };

// const closeBtn: React.CSSProperties = {
//   border: "1px solid #E5E7EB",
//   background: "#fff",
//   borderRadius: 12,
//   width: 38,
//   height: 34,
//   cursor: "pointer",
//   fontWeight: 900,
// };

// const modalBody: React.CSSProperties = { maxHeight: "70vh", overflow: "auto" };

// const modalList: React.CSSProperties = { display: "flex", flexDirection: "column" };

// const productRow: React.CSSProperties = {
//   width: "100%",
//   textAlign: "left",
//   padding: "12px 14px",
//   border: "none",
//   background: "#fff",
//   borderBottom: "1px solid #f2f2f2",
//   cursor: "pointer",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   gap: 12,
// };

// const pName: React.CSSProperties = {
//   fontWeight: 900,
//   color: "#111827",
//   whiteSpace: "nowrap",
//   overflow: "hidden",
//   textOverflow: "ellipsis",
// };

// const pMeta: React.CSSProperties = { marginTop: 4, fontSize: 12, color: "#6B7280" };

// const goPill: React.CSSProperties = {
//   fontSize: 12,
//   fontWeight: 900,
//   padding: "8px 10px",
//   borderRadius: 999,
//   border: "1px solid #E5E7EB",
//   background: "#FAFAFA",
// };






//////////////////// some how looks good in this version


import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { AdminCategory, AdminSubCategory } from "../types";

import {
  listAdminCategories,
  listAdminSubCategories,
  createAdminCategory,
  updateAdminCategory,
  deleteAdminCategory,
  createAdminSubCategory,
  updateAdminSubCategory,
  deleteAdminSubCategory,
  getCategoryUsageCount,
  getSubCategoryUsageCount,
  listProductsByCategoryName,
  listProductsBySubCategoryName,
  type ProductLite,
} from "../api";

type UsageTarget =
  | { type: "category"; name: string }
  | { type: "subcategory"; name: string }
  | null;

export default function CategoriesV2() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState<AdminCategory[]>([]);
  const [subcategories, setSubcategories] = useState<AdminSubCategory[]>([]);

  const [usageMain, setUsageMain] = useState<Record<string, number>>({});
  const [usageSub, setUsageSub] = useState<Record<string, number>>({});

  const [expanded, setExpanded] = useState<string | null>(null);

  const [newCategory, setNewCategory] = useState("");
  const [subDraft, setSubDraft] = useState<Record<string, string>>({});

  const [search, setSearch] = useState("");

  const [usageTarget, setUsageTarget] = useState<UsageTarget>(null);
  const [usageProducts, setUsageProducts] = useState<ProductLite[]>([]);
  const [usageLoading, setUsageLoading] = useState(false);

  useEffect(() => {
    refresh();
  }, []);

  async function refresh() {
    setLoading(true);

    const cats = await listAdminCategories();
    const subs = await listAdminSubCategories();

    setCategories(cats);
    setSubcategories(subs);

    const mainUsage: Record<string, number> = {};
    const subUsage: Record<string, number> = {};

    await Promise.all(
      cats.map(async (c) => {
        mainUsage[c.name] = await getCategoryUsageCount(c.name);
      })
    );

    await Promise.all(
      subs.map(async (s) => {
        subUsage[s.name] = await getSubCategoryUsageCount(s.name);
      })
    );

    setUsageMain(mainUsage);
    setUsageSub(subUsage);

    setLoading(false);
  }

  function toSlug(v: string) {
    return v.trim().toLowerCase().replace(/\s+/g, "-");
  }

  async function openUsage(target: UsageTarget) {
    if (!target) return;

    setUsageTarget(target);
    setUsageLoading(true);

    try {
      const items =
        target.type === "category"
          ? await listProductsByCategoryName(target.name)
          : await listProductsBySubCategoryName(target.name);

      setUsageProducts(items);
    } finally {
      setUsageLoading(false);
    }
  }

  function goToProductEdit(id: string) {
    navigate(`/products/${id}/edit`);
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

  async function addSub(cat: AdminCategory) {
    const name = (subDraft[cat.id] ?? "").trim();
    if (!name) return;

    const current = subcategories.filter(
      (s) => s.category_id === cat.id
    );

    await createAdminSubCategory({
      category_id: cat.id,
      name,
      slug: toSlug(name),
      is_active: true,
      display_order: current.length + 1,
    });

    setSubDraft((p) => ({ ...p, [cat.id]: "" }));
    refresh();
  }

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const q = search.toLowerCase();

    return categories.filter((c) => {
      const matchMain = c.name.toLowerCase().includes(q);
      const matchSub = subcategories
        .filter((s) => s.category_id === c.id)
        .some((s) => s.name.toLowerCase().includes(q));

      return matchMain || matchSub;
    });
  }, [search, categories, subcategories]);

  if (loading) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={wrap}>
      <div style={card}>
        <h2 style={title}>Categories</h2>

        <input
          placeholder="Search category / subcategory..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />

        <div style={addRow}>
          <input
            placeholder="Add new category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            style={input}
          />
          <button onClick={addCategory} style={btn}>
            Add
          </button>
        </div>

        {filteredCategories.map((cat) => {
          const subs = subcategories.filter(
            (s) => s.category_id === cat.id
          );

          const isOpen = expanded === cat.id;

          return (
            <div key={cat.id} style={block}>
              <div style={rowMain}>
                <button
                  style={expandBtn}
                  onClick={() =>
                    setExpanded(isOpen ? null : cat.id)
                  }
                >
                  {isOpen ? "▼" : "▶"}
                </button>

                <div style={{ fontWeight: 900 }}>
                  {cat.name}
                </div>

                <button
                  style={countBtn}
                  onClick={() =>
                    openUsage({ type: "category", name: cat.name })
                  }
                >
                  {usageMain[cat.name] ?? 0}
                </button>

                <input
                  type="checkbox"
                  checked={cat.is_active}
                  onChange={async () => {
                    await updateAdminCategory(cat.id, {
                      is_active: !cat.is_active,
                    });
                    refresh();
                  }}
                />
              </div>

              {isOpen && (
                <div style={subWrap}>
                  <div style={subAddRow}>
                    <input
                      placeholder="Add subcategory"
                      value={subDraft[cat.id] ?? ""}
                      onChange={(e) =>
                        setSubDraft((p) => ({
                          ...p,
                          [cat.id]: e.target.value,
                        }))
                      }
                      style={input}
                    />
                    <button
                      style={subBtn}
                      onClick={() => addSub(cat)}
                    >
                      Add
                    </button>
                  </div>

                  {subs.map((s) => (
                    <div key={s.id} style={rowSub}>
                      <div>{s.name}</div>

                      <button
                        style={countBtn}
                        onClick={() =>
                          openUsage({
                            type: "subcategory",
                            name: s.name,
                          })
                        }
                      >
                        {usageSub[s.name] ?? 0}
                      </button>

                      <input
                        type="checkbox"
                        checked={s.is_active}
                        onChange={async () => {
                          await updateAdminSubCategory(s.id, {
                            is_active: !s.is_active,
                          });
                          refresh();
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {usageTarget && (
        <div style={overlay} onClick={() => setUsageTarget(null)}>
          <div style={modal} onClick={(e) => e.stopPropagation()}>
            <div style={modalHead}>
              <strong>
                Products in {usageTarget.name}
              </strong>
              <button onClick={() => setUsageTarget(null)}>
                ✕
              </button>
            </div>

            {usageLoading ? (
              <div style={{ padding: 20 }}>Loading...</div>
            ) : usageProducts.length === 0 ? (
              <div style={{ padding: 20 }}>No products found</div>
            ) : (
              <div style={modalList}>
                {usageProducts.map((p) => (
                  <div
                    key={p.id}
                    style={productRow}
                    onClick={() => goToProductEdit(p.id)}
                  >
                    <div>
                      <div style={{ fontWeight: 900 }}>
                        {p.name}
                      </div>
                      <div style={{ fontSize: 12, color: "#666" }}>
                        ₹{p.price} • Stock: {p.stock}
                      </div>
                    </div>
                    <div style={openBtn}>Open</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const wrap = { padding: 20, maxWidth: 1000, margin: "0 auto" };
const card = {
  background: "#fff",
  padding: 20,
  borderRadius: 16,
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};
const title = { fontWeight: 900 };
const searchInput = {
  width: "100%",
  padding: 10,
  marginBottom: 12,
  borderRadius: 10,
  border: "1px solid #e5e7eb",
};
const addRow = { display: "flex", gap: 10, marginBottom: 12 };
const input = {
  flex: 1,
  padding: 10,
  borderRadius: 10,
  border: "1px solid #e5e7eb",
};
const btn = {
  padding: "10px 14px",
  background: "#bf9602",
  color: "#fff",
  border: "none",
  borderRadius: 10,
  fontWeight: 800,
};
const block = {
  border: "1px solid #f1f1f1",
  borderRadius: 12,
  marginTop: 10,
};
const rowMain = {
  display: "grid",
  gridTemplateColumns: "40px 1fr 80px 60px",
  gap: 10,
  padding: 12,
  background: "#fafafa",
  alignItems: "center",
};
const rowSub = {
  display: "grid",
  gridTemplateColumns: "1fr 80px 60px",
  gap: 10,
  padding: 8,
  alignItems: "center",
};
const expandBtn = {
  border: "1px solid #e5e7eb",
  background: "#fff",
  borderRadius: 8,
  cursor: "pointer",
};
const subWrap = { padding: 12 };
const subAddRow = { display: "flex", gap: 10, marginBottom: 10 };
const subBtn = {
  padding: "8px 12px",
  background: "#111827",
  color: "#fff",
  border: "none",
  borderRadius: 8,
};
const countBtn = {
  border: "none",
  background: "transparent",
  fontWeight: 900,
  color: "#bf9602",
  cursor: "pointer",
};
const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const modal = {
  width: 700,
  background: "#fff",
  borderRadius: 16,
  overflow: "hidden",
};
const modalHead = {
  padding: 16,
  borderBottom: "1px solid #eee",
  display: "flex",
  justifyContent: "space-between",
};
const modalList = { maxHeight: 400, overflow: "auto" };
const productRow = {
  padding: 14,
  borderBottom: "1px solid #f1f1f1",
  cursor: "pointer",
  display: "flex",
  justifyContent: "space-between",
};
const openBtn = {
  background: "#bf9602",
  color: "#fff",
  padding: "6px 10px",
  borderRadius: 8,
  fontSize: 12,
};




