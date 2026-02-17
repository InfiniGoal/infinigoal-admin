// import VariantImagesManager from "../images/VariantImagesManager";
// import AttributesEditor from "./AttributesEditor";
// import type { VariantUI } from "../schema";

// type Props = {
//   variant: VariantUI;
//   onUpdate: (v: VariantUI) => void;
//   onDelete: () => void;
// };

// export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
//   return (
//     <div style={card}>
//       <header style={header}>
//         <strong>{variant.variant_name}</strong>
//         <button onClick={onDelete} style={{ color: "red" }}>
//           Delete
//         </button>
//       </header>

//       <div style={grid}>
//         <input
//           value={variant.variant_name}
//           onChange={(e) =>
//             onUpdate({ ...variant, variant_name: e.target.value })
//           }
//           placeholder="Variant Name"
//         />

//         <input
//           type="number"
//           value={variant.price}
//           onChange={(e) =>
//             onUpdate({ ...variant, price: +e.target.value })
//           }
//           placeholder="Price"
//         />

//         <input
//           type="number"
//           value={variant.stock}
//           onChange={(e) =>
//             onUpdate({ ...variant, stock: +e.target.value })
//           }
//           placeholder="Stock"
//         />

//         <label>
//           <input
//             type="checkbox"
//             checked={variant.is_default}
//             onChange={(e) =>
//               onUpdate({ ...variant, is_default: e.target.checked })
//             }
//           />
//           Default Variant
//         </label>
//       </div>

//       <AttributesEditor
//         value={variant.attributes || {}}
//         onChange={(attrs) =>
//           onUpdate({ ...variant, attributes: attrs })
//         }
//       />

//       <VariantImagesManager
//         images={variant.images}
//         onChange={(imgs) =>
//           onUpdate({ ...variant, images: imgs })
//         }
//       />
//     </div>
//   );
// }

// const card: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 16,
//   marginTop: 16,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: 12,
//   marginTop: 12,
// };




//////////////////


// import AttributesEditor from "./AttributesEditor";
// import VariantImagesManager from "../images/VariantImagesManager";
// import type { VariantUI } from "../schema";

// type Props = {
//   variant: VariantUI;
//   onUpdate: (v: VariantUI) => void;
//   onDelete: () => void;
// };

// export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
//   return (
//     <div style={card}>
//       <header style={header}>
//         <strong>{variant.variant_name}</strong>
//         <button onClick={onDelete} style={{ color: "red" }}>Delete</button>
//       </header>

//       <div style={grid}>
//         <input
//           value={variant.variant_name}
//           onChange={(e) =>
//             onUpdate({ ...variant, variant_name: e.target.value })
//           }
//         />

//         <input
//           type="number"
//           value={variant.price}
//           onChange={(e) =>
//             onUpdate({ ...variant, price: +e.target.value })
//           }
//         />

//         <input
//           type="number"
//           value={variant.stock}
//           onChange={(e) =>
//             onUpdate({ ...variant, stock: +e.target.value })
//           }
//         />

//         <label>
//           <input
//             type="checkbox"
//             checked={variant.is_default}
//             onChange={(e) =>
//               onUpdate({ ...variant, is_default: e.target.checked })
//             }
//           />
//           Default
//         </label>
//       </div>

//       <AttributesEditor
//         value={variant.attributes || {}}
//         onChange={(attrs) =>
//           onUpdate({ ...variant, attributes: attrs })
//         }
//       />

//       <VariantImagesManager
//         images={variant.images}
//         onChange={(imgs) =>
//           onUpdate({ ...variant, images: imgs })
//         }
//       />
//     </div>
//   );
// }

// const card = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 16,
//   marginTop: 16,
// };

// const header = {
//   display: "flex",
//   justifyContent: "space-between",
// };

// const grid = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: 12,
//   marginTop: 12,
// };






///////////////////////



// import VariantImagesManager from "../images/VariantImagesManager";
// import AttributesEditor from "./AttributesEditor";
// import type { VariantUI } from "../schema";

// type Props = {
//   variant: VariantUI;
//   onUpdate: (v: VariantUI) => void;
//   onDelete: () => void;
// };

// export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
//   return (
//     <div style={card}>
//       <header style={header}>
//         <div>
//           <strong style={{ fontSize: 16 }}>{variant.variant_name}</strong>
//           {variant.is_default && <span style={defaultBadge}>Default</span>}
//         </div>

//         <button type="button" onClick={onDelete} style={btnDanger}>
//           Delete
//         </button>
//       </header>

//       <div style={grid}>
//         <Field label="Variant Name">
//           <input
//             value={variant.variant_name}
//             onChange={(e) => onUpdate({ ...variant, variant_name: e.target.value })}
//             style={input}
//             placeholder="e.g. 500g pack"
//           />
//         </Field>

//         <Field label="Short Label">
//           <input
//             value={variant.short_label ?? ""}
//             onChange={(e) => onUpdate({ ...variant, short_label: e.target.value })}
//             style={input}
//             placeholder="e.g. 500g"
//           />
//         </Field>

//         <Field label="Price">
//           <input
//             type="number"
//             value={variant.price}
//             onChange={(e) => onUpdate({ ...variant, price: Number(e.target.value) })}
//             style={input}
//           />
//         </Field>

//         <Field label="MRP">
//           <input
//             type="number"
//             value={variant.mrp ?? ""}
//             onChange={(e) =>
//               onUpdate({
//                 ...variant,
//                 mrp: e.target.value === "" ? undefined : Number(e.target.value),
//               })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Stock">
//           <input
//             type="number"
//             value={variant.stock}
//             onChange={(e) => onUpdate({ ...variant, stock: Number(e.target.value) })}
//             style={input}
//           />
//         </Field>

//         <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 10 }}>
//           <input
//             type="checkbox"
//             checked={variant.is_default}
//             onChange={(e) => onUpdate({ ...variant, is_default: e.target.checked })}
//           />
//           <span>Default Variant</span>
//         </div>
//       </div>

//       <div style={{ marginTop: 14 }}>
//         <h4 style={subTitle}>Variant Attributes</h4>
//         <AttributesEditor
//           value={variant.attributes}
//           onChange={(attrs) => onUpdate({ ...variant, attributes: attrs })}
//         />
//       </div>

//       <VariantImagesManager
//         images={variant.images}
//         onChange={(imgs) => onUpdate({ ...variant, images: imgs })}
//       />
//     </div>
//   );
// }

// /* ================= UI PARTS ================= */

// function Field({ label, children }: { label: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <div style={labelStyle}>{label}</div>
//       {children}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const card: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 16,
//   marginTop: 14,
//   background: "white",
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   gap: 12,
// };

// const defaultBadge: React.CSSProperties = {
//   marginLeft: 10,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#111827",
//   color: "white",
//   fontSize: 12,
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: 12,
//   marginTop: 14,
// };

// const labelStyle: React.CSSProperties = {
//   fontSize: 13,
//   fontWeight: 600,
//   color: "#374151",
//   marginBottom: 6,
// };

// const input: React.CSSProperties = {
//   width: "100%",
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
// };

// const subTitle: React.CSSProperties = {
//   margin: "0 0 8px 0",
//   fontSize: 14,
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 10px",
//   borderRadius: 10,
//   border: "1px solid #ef4444",
//   background: "#ef4444",
//   color: "white",
//   cursor: "pointer",
// };



////////// above code worked before without images


// import VariantImagesManager from "../images/VariantImagesManager";
// import AttributesEditor from "./AttributesEditor";
// import type { VariantUI } from "../schema";

// type Props = {
//   variant: VariantUI;
//   onUpdate: (v: VariantUI) => void;
//   onDelete: () => void;
// };

// export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
//   return (
//     <div style={card}>
//       <header style={header}>
//         <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
//           <strong style={{ fontSize: 16 }}>{variant.variant_name}</strong>
//           {variant.is_default && <span style={defaultBadge}>Default</span>}
//         </div>

//         <button type="button" onClick={onDelete} style={btnDanger}>
//           Delete
//         </button>
//       </header>

//       <div style={grid}>
//         <Field label="Variant Name">
//           <input
//             value={variant.variant_name}
//             onChange={(e) => onUpdate({ ...variant, variant_name: e.target.value })}
//             style={input}
//             placeholder="e.g. 500g Pack"
//           />
//         </Field>

//         <Field label="Short Label">
//           <input
//             value={variant.short_label ?? ""}
//             onChange={(e) => onUpdate({ ...variant, short_label: e.target.value })}
//             style={input}
//             placeholder="e.g. 500g"
//           />
//         </Field>

//         <Field label="Price">
//           <input
//             type="number"
//             value={variant.price}
//             onChange={(e) => onUpdate({ ...variant, price: Number(e.target.value) })}
//             style={input}
//           />
//         </Field>

//         <Field label="MRP">
//           <input
//             type="number"
//             value={variant.mrp ?? ""}
//             onChange={(e) =>
//               onUpdate({
//                 ...variant,
//                 mrp: e.target.value === "" ? undefined : Number(e.target.value),
//               })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Stock">
//           <input
//             type="number"
//             value={variant.stock}
//             onChange={(e) => onUpdate({ ...variant, stock: Number(e.target.value) })}
//             style={input}
//           />
//         </Field>

//         <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 22 }}>
//           <input
//             type="checkbox"
//             checked={variant.is_default}
//             onChange={(e) => onUpdate({ ...variant, is_default: e.target.checked })}
//           />
//           <span>Default Variant</span>
//         </div>
//       </div>

//       <div style={{ marginTop: 14 }}>
//         <h4 style={title}>Variant Attributes</h4>
//         <AttributesEditor
//           value={variant.attributes}
//           onChange={(attrs) => onUpdate({ ...variant, attributes: attrs })}
//         />
//       </div>

//       {/* ✅ THIS IS THE VARIANT IMAGES SECTION */}
//       <VariantImagesManager
//         images={variant.images}
//         onChange={(imgs) => onUpdate({ ...variant, images: imgs })}
//       />
//     </div>
//   );
// }

// function Field({ label, children }: { label: string; children: React.ReactNode }) {
//   return (
//     <div>
//       <div style={labelStyle}>{label}</div>
//       {children}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const card: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 16,
//   marginTop: 14,
//   background: "white",
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   gap: 12,
// };

// const defaultBadge: React.CSSProperties = {
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#111827",
//   color: "white",
//   fontSize: 12,
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: 12,
//   marginTop: 14,
// };

// const title: React.CSSProperties = {
//   margin: "0 0 8px 0",
//   fontSize: 14,
// };

// const labelStyle: React.CSSProperties = {
//   fontSize: 13,
//   fontWeight: 600,
//   color: "#374151",
//   marginBottom: 6,
// };

// const input: React.CSSProperties = {
//   width: "100%",
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 10px",
//   borderRadius: 10,
//   border: "1px solid #ef4444",
//   background: "#ef4444",
//   color: "white",
//   cursor: "pointer",
// };





///////////////////////// *****************         above code worked before the UI UX deisngs



// import VariantImagesManager from "../images/VariantImagesManager";
// import AttributesEditor from "./AttributesEditor";
// import type { VariantUI } from "../schema";

// type Props = {
//   variant: VariantUI;
//   onUpdate: (v: VariantUI) => void;
//   onDelete: () => void;
// };

// export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
//   return (
//     <div style={card}>
//       <header style={header}>
//         <div>
//           <div style={variantName}>{variant.variant_name}</div>
//           {variant.is_default && <span style={defaultBadge}>Default Variant</span>}
//         </div>

//         <button type="button" onClick={onDelete} style={deleteBtn}>
//           Delete
//         </button>
//       </header>

//       <div style={grid}>
//         <Field label="Variant Name">
//           <input
//             value={variant.variant_name}
//             onChange={(e) =>
//               onUpdate({ ...variant, variant_name: e.target.value })
//             }
//           />
//         </Field>

//         <Field label="Short Label">
//           <input
//             value={variant.short_label ?? ""}
//             onChange={(e) =>
//               onUpdate({ ...variant, short_label: e.target.value })
//             }
//           />
//         </Field>

//         <Field label="Price">
//           <input
//             type="number"
//             value={variant.price}
//             onChange={(e) =>
//               onUpdate({ ...variant, price: Number(e.target.value) })
//             }
//           />
//         </Field>

//         <Field label="MRP">
//           <input
//             type="number"
//             value={variant.mrp ?? ""}
//             onChange={(e) =>
//               onUpdate({
//                 ...variant,
//                 mrp: e.target.value === "" ? undefined : Number(e.target.value),
//               })
//             }
//           />
//         </Field>

//         <Field label="Stock">
//           <input
//             type="number"
//             value={variant.stock}
//             onChange={(e) =>
//               onUpdate({ ...variant, stock: Number(e.target.value) })
//             }
//           />
//         </Field>

//         <label style={defaultRow}>
//           <input
//             type="checkbox"
//             checked={variant.is_default}
//             onChange={(e) =>
//               onUpdate({ ...variant, is_default: e.target.checked })
//             }
//           />
//           <span>Default Variant</span>
//         </label>
//       </div>

//       <div style={section}>
//         <h4 style={sectionTitle}>Variant Attributes</h4>
//         <AttributesEditor
//           value={variant.attributes}
//           onChange={(attrs) =>
//             onUpdate({ ...variant, attributes: attrs })
//           }
//         />
//       </div>

//       <div style={section}>
//         <h4 style={sectionTitle}>Variant Images</h4>
//         <VariantImagesManager
//           images={variant.images}
//           onChange={(imgs) =>
//             onUpdate({ ...variant, images: imgs })
//           }
//         />
//       </div>
//     </div>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const card: React.CSSProperties = {
//   marginTop: 18,
//   padding: 20,
//   borderRadius: 18,
//   background: "#ffffff",
//   boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: 16,
// };

// const variantName: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 800,
// };

// const defaultBadge: React.CSSProperties = {
//   marginTop: 6,
//   display: "inline-block",
//   padding: "4px 10px",
//   background: "#111827",
//   color: "#fff",
//   borderRadius: 999,
//   fontSize: 12,
// };

// const deleteBtn: React.CSSProperties = {
//   background: "#ef4444",
//   border: "none",
//   color: "#fff",
//   padding: "8px 12px",
//   borderRadius: 10,
//   cursor: "pointer",
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: 14,
// };

// const defaultRow: React.CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   gap: 10,
//   paddingTop: 12,
// };

// const section: React.CSSProperties = {
//   marginTop: 20,
// };

// const sectionTitle: React.CSSProperties = {
//   fontSize: 14,
//   fontWeight: 700,
//   marginBottom: 8,
// };

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <div style={labelStyle}>{label}</div>
//       <div>{children}</div>
//     </div>
//   );
// }

// const labelStyle: React.CSSProperties = {
//   fontSize: 13,
//   fontWeight: 600,
//   color: "#374151",
//   marginBottom: 6,
// };




///////////////////// ************** above code worked before the UI UX designs


// import VariantImagesManager from "../images/VariantImagesManager";
// import AttributesEditor from "./AttributesEditor";
// import type { VariantUI } from "../schema";

// type Props = {
//   variant: VariantUI;
//   onUpdate: (v: VariantUI) => void;
//   onDelete: () => void;
// };

// export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
//   return (
//     <div style={card}>
//       <header style={header}>
//         <div>
//           <strong style={title}>{variant.variant_name}</strong>
//           {variant.is_default && <span style={badge}>Default</span>}
//         </div>

//         <button onClick={onDelete} style={deleteBtn}>
//           Delete
//         </button>
//       </header>

//       <div style={grid}>
//         <Field label="Variant Name">
//           <input
//             value={variant.variant_name}
//             onChange={(e) =>
//               onUpdate({ ...variant, variant_name: e.target.value })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Short Label">
//           <input
//             value={variant.short_label ?? ""}
//             onChange={(e) =>
//               onUpdate({ ...variant, short_label: e.target.value })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Price">
//           <input
//             type="number"
//             value={variant.price}
//             onChange={(e) =>
//               onUpdate({ ...variant, price: Number(e.target.value) })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="MRP">
//           <input
//             type="number"
//             value={variant.mrp ?? ""}
//             onChange={(e) =>
//               onUpdate({
//                 ...variant,
//                 mrp: e.target.value ? Number(e.target.value) : undefined,
//               })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Stock">
//           <input
//             type="number"
//             value={variant.stock}
//             onChange={(e) =>
//               onUpdate({ ...variant, stock: Number(e.target.value) })
//             }
//             style={input}
//           />
//         </Field>

//         <label style={checkboxRow}>
//           <input
//             type="checkbox"
//             checked={variant.is_default}
//             onChange={(e) =>
//               onUpdate({ ...variant, is_default: e.target.checked })
//             }
//           />
//           Default Variant
//         </label>
//       </div>

//       <Section title="Variant Attributes">
//         <AttributesEditor
//           value={variant.attributes}
//           onChange={(attrs) =>
//             onUpdate({ ...variant, attributes: attrs })
//           }
//         />
//       </Section>

//       <Section title="Variant Images">
//         <VariantImagesManager
//           images={variant.images}
//           onChange={(imgs) =>
//             onUpdate({ ...variant, images: imgs })
//           }
//         />
//       </Section>
//     </div>
//   );
// }

// /* ================= UI HELPERS ================= */

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <div style={labelStyle}>{label}</div>
//       {children}
//     </div>
//   );
// }

// function Section({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={{ marginTop: 18 }}>
//       <h4 style={sectionTitle}>{title}</h4>
//       {children}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const card: React.CSSProperties = {
//   marginTop: 20,
//   padding: 20,
//   borderRadius: 18,
//   background: "#ffffff",
//   boxShadow: "0 8px 26px rgba(0,0,0,0.06)",
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   marginBottom: 16,
// };

// const title: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 800,
// };

// const badge: React.CSSProperties = {
//   marginLeft: 10,
//   padding: "4px 10px",
//   background: "#111827",
//   color: "#fff",
//   borderRadius: 999,
//   fontSize: 12,
// };

// const deleteBtn: React.CSSProperties = {
//   background: "#ef4444",
//   border: "none",
//   color: "#fff",
//   padding: "8px 12px",
//   borderRadius: 10,
//   cursor: "pointer",
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: 14,
// };

// const input: React.CSSProperties = {
//   padding: "12px",
//   borderRadius: 14,
//   border: "1px solid #e5e7eb",
// };

// const labelStyle: React.CSSProperties = {
//   fontSize: 13,
//   fontWeight: 600,
//   marginBottom: 6,
// };

// const sectionTitle: React.CSSProperties = {
//   fontSize: 14,
//   fontWeight: 700,
//   marginBottom: 10,
// };

// const checkboxRow: React.CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   gap: 8,
//   paddingTop: 22,
// };





/////////// ******* above code worked before the SKU

// import VariantImagesManager from "../images/VariantImagesManager";
// import AttributesEditor from "./AttributesEditor";
// import type { VariantUI } from "../schema";

// type Props = {
//   variant: VariantUI;
//   onUpdate: (v: VariantUI) => void;
//   onDelete: () => void;
// };

// export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
//   return (
//     <div style={card}>
//       <header style={header}>
//         <div>
//           <strong style={title}>{variant.variant_name}</strong>
//           {variant.is_default && <span style={badge}>Default</span>}
//         </div>

//         <button onClick={onDelete} style={deleteBtn}>
//           Delete
//         </button>
//       </header>

//       <div style={grid}>
//         <Field label="Variant Name">
//           <input
//             value={variant.variant_name}
//             onChange={(e) =>
//               onUpdate({ ...variant, variant_name: e.target.value })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Short Label">
//           <input
//             value={variant.short_label ?? ""}
//             onChange={(e) =>
//               onUpdate({ ...variant, short_label: e.target.value })
//             }
//             style={input}
//           />
//         </Field>

//         {/* ✅ SKU FIELD (ADDED – SAFE) */}
//         <Field label="SKU">
//           <input
//             value={variant.sku ?? ""}
//             placeholder="Optional SKU"
//             onChange={(e) =>
//               onUpdate({ ...variant, sku: e.target.value })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Price">
//           <input
//             type="number"
//             value={variant.price}
//             onChange={(e) =>
//               onUpdate({ ...variant, price: Number(e.target.value) })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="MRP">
//           <input
//             type="number"
//             value={variant.mrp ?? ""}
//             onChange={(e) =>
//               onUpdate({
//                 ...variant,
//                 mrp: e.target.value ? Number(e.target.value) : undefined,
//               })
//             }
//             style={input}
//           />
//         </Field>

//         <Field label="Stock">
//           <input
//             type="number"
//             value={variant.stock}
//             onChange={(e) =>
//               onUpdate({ ...variant, stock: Number(e.target.value) })
//             }
//             style={input}
//           />
//         </Field>

//         <label style={checkboxRow}>
//           <input
//             type="checkbox"
//             checked={variant.is_default}
//             onChange={(e) =>
//               onUpdate({ ...variant, is_default: e.target.checked })
//             }
//           />
//           Default Variant
//         </label>
//       </div>

//       <Section title="Variant Attributes">
//         <AttributesEditor
//           value={variant.attributes}
//           onChange={(attrs) =>
//             onUpdate({ ...variant, attributes: attrs })
//           }
//         />
//       </Section>

//       <Section title="Variant Images">
//         <VariantImagesManager
//           images={variant.images}
//           onChange={(imgs) =>
//             onUpdate({ ...variant, images: imgs })
//           }
//         />
//       </Section>
//     </div>
//   );
// }

// /* ================= UI HELPERS ================= */

// function Field({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div>
//       <div style={labelStyle}>{label}</div>
//       {children}
//     </div>
//   );
// }

// function Section({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={{ marginTop: 18 }}>
//       <h4 style={sectionTitle}>{title}</h4>
//       {children}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const card: React.CSSProperties = {
//   marginTop: 20,
//   padding: 20,
//   borderRadius: 18,
//   background: "#ffffff",
//   boxShadow: "0 8px 26px rgba(0,0,0,0.06)",
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   marginBottom: 16,
// };

// const title: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 800,
// };

// const badge: React.CSSProperties = {
//   marginLeft: 10,
//   padding: "4px 10px",
//   background: "#111827",
//   color: "#fff",
//   borderRadius: 999,
//   fontSize: 12,
// };

// const deleteBtn: React.CSSProperties = {
//   background: "#ef4444",
//   border: "none",
//   color: "#fff",
//   padding: "8px 12px",
//   borderRadius: 10,
//   cursor: "pointer",
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(2, 1fr)",
//   gap: 14,
// };

// const input: React.CSSProperties = {
//   padding: "12px",
//   borderRadius: 14,
//   border: "1px solid #e5e7eb",
// };

// const labelStyle: React.CSSProperties = {
//   fontSize: 13,
//   fontWeight: 600,
//   marginBottom: 6,
// };

// const sectionTitle: React.CSSProperties = {
//   fontSize: 14,
//   fontWeight: 700,
//   marginBottom: 10,
// };

// const checkboxRow: React.CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   gap: 8,
//   paddingTop: 22,
// };






//////////////////// *****

import VariantImagesManager from "../images/VariantImagesManager";
import AttributesEditor from "./AttributesEditor";
import type { VariantUI } from "../schema";

type Props = {
  variant: VariantUI;
  onUpdate: (v: VariantUI) => void;
  onDelete: () => void;
};

export default function VariantCard({
  variant,
  onUpdate,
  onDelete,
}: Props) {
  return (
    <div style={card}>
      {/* ================= HEADER ================= */}
      <header style={header}>
        <div style={{ minWidth: 0 }}>
          <div style={headerTopRow}>
            <h3 style={title}>{variant.variant_name}</h3>

            {variant.is_default && (
              <span style={defaultBadge}>Default</span>
            )}
          </div>

          <p style={subtitle}>
            Manage pricing, stock, attributes and images for this variation.
          </p>
        </div>

        <button onClick={onDelete} style={deleteBtn}>
          Delete
        </button>
      </header>

      {/* ================= BASIC GRID ================= */}
      <div style={grid}>
        <Field label="Variant Name">
          <input
            value={variant.variant_name}
            onChange={(e) =>
              onUpdate({ ...variant, variant_name: e.target.value })
            }
            style={input}
          />
        </Field>

        <Field label="Short Label">
          <input
            value={variant.short_label ?? ""}
            onChange={(e) =>
              onUpdate({ ...variant, short_label: e.target.value })
            }
            style={input}
          />
        </Field>

        <Field label="SKU">
          <input
            value={variant.sku ?? ""}
            placeholder="Optional SKU"
            onChange={(e) =>
              onUpdate({ ...variant, sku: e.target.value })
            }
            style={input}
          />
        </Field>


        <Field label="Stock">
          <input
            type="number"
            value={variant.stock}
            onChange={(e) =>
              onUpdate({ ...variant, stock: Number(e.target.value) })
            }
            style={input}
          />
        </Field>


        <Field label="MRP">
          <input
            type="number"
            value={variant.mrp ?? ""}
            onChange={(e) =>
              onUpdate({
                ...variant,
                mrp: e.target.value
                  ? Number(e.target.value)
                  : undefined,
              })
            }
            style={input}
          />
        </Field>
        

        <Field label="Price">
          <input
            type="number"
            value={variant.price}
            onChange={(e) =>
              onUpdate({ ...variant, price: Number(e.target.value) })
            }
            style={input}
          />
        </Field>




        {/* DEFAULT SWITCH */}
        <div style={defaultSwitchRow}>
          <div>
            <div style={switchTitle}>Default Variant</div>
            <div style={switchHint}>
              This variant is auto-selected for customers
            </div>
          </div>

          <Switch
            checked={variant.is_default}
            onChange={(e: any) =>
              onUpdate({
                ...variant,
                is_default: e.target.checked,
              })
            }
          />
        </div>
      </div>

      {/* ================= ATTRIBUTES ================= */}
      <Section title="Variant Attributes">
        <AttributesEditor
          value={variant.attributes}
          onChange={(attrs) =>
            onUpdate({ ...variant, attributes: attrs })
          }
        />
      </Section>

      {/* ================= IMAGES ================= */}
      <Section title="Variant Images">
        <VariantImagesManager
          images={variant.images}
          onChange={(imgs) =>
            onUpdate({ ...variant, images: imgs })
          }
        />
      </Section>
    </div>
  );
}

/* ================= UI HELPERS ================= */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={fieldWrapper}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={section}>
      <h4 style={sectionTitle}>{title}</h4>
      {children}
    </div>
  );
}

function Switch({ checked, ...props }: any) {
  return (
    <label style={switchWrap}>
      <input
        type="checkbox"
        checked={checked}
        {...props}
        style={switchInput}
      />
      <span
        style={{
          ...switchTrack,
          background: checked ? "#bf9602" : "#E5E7EB",
        }}
      />
      <span
        style={{
          ...switchThumb,
          transform: checked
            ? "translateX(20px)"
            : "translateX(0px)",
        }}
      />
    </label>
  );
}

/* ================= STYLES ================= */

const card: React.CSSProperties = {
  marginTop: 22,
  padding: 24,
  borderRadius: 20,
  background: "#ffffff",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  boxSizing: "border-box",
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 16,
  marginBottom: 20,
};

const headerTopRow: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 10,
};

const title: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 900,
  margin: 0,
};

const subtitle: React.CSSProperties = {
  fontSize: 12,
  color: "#6b7280",
  marginTop: 6,
};

const defaultBadge: React.CSSProperties = {
  padding: "4px 10px",
  background: "#bf9602",
  color: "#fff",
  borderRadius: 999,
  fontSize: 11,
  fontWeight: 800,
};

const deleteBtn: React.CSSProperties = {
  background: "#ef4444",
  border: "none",
  color: "#fff",
  padding: "8px 14px",
  borderRadius: 12,
  cursor: "pointer",
  fontWeight: 700,
  alignSelf: "flex-start",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  gap: 18,
  marginBottom: 16,
};

const fieldWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
};

const input: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 14,
  border: "1px solid #E5E7EB",
  background: "#FAFAFA",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  color: "#374151",
};

const section: React.CSSProperties = {
  marginTop: 22,
  paddingTop: 18,
  borderTop: "1px solid #f1f1f1",
};

const sectionTitle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 900,
  marginBottom: 12,
};

const defaultSwitchRow: React.CSSProperties = {
  gridColumn: "1 / -1",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 12,
  borderTop: "1px solid #f1f1f1",
};

const switchTitle: React.CSSProperties = {
  fontWeight: 800,
  fontSize: 13,
};

const switchHint: React.CSSProperties = {
  fontSize: 12,
  color: "#6b7280",
};

const switchWrap: React.CSSProperties = {
  position: "relative",
  width: 46,
  height: 26,
};

const switchInput: React.CSSProperties = {
  opacity: 0,
  width: 46,
  height: 26,
  position: "absolute",
  zIndex: 2,
  cursor: "pointer",
};

const switchTrack: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  borderRadius: 999,
  transition: "background 0.2s ease",
};

const switchThumb: React.CSSProperties = {
  position: "absolute",
  width: 20,
  height: 20,
  borderRadius: 999,
  background: "#ffffff",
  top: 3,
  left: 3,
  transition: "transform 0.18s ease",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};
