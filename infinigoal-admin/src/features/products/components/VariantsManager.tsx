// import { useState } from "react";
// import VariantForm from "./VariantForm";
// import type { VariantFormValues } from "../schema";

// type Props = {
//   variants: VariantFormValues[];
//   onChange: (variants: VariantFormValues[]) => void;
// };

// export default function VariantsManager({ variants, onChange }: Props) {
//   const [showForm, setShowForm] = useState(false);

//   const addVariant = (variant: VariantFormValues) => {
//     const updated = variant.is_default
//       ? variants.map(v => ({ ...v, is_default: false })).concat(variant)
//       : [...variants, variant];

//     onChange(updated);
//     setShowForm(false);
//   };

//   const deleteVariant = (index: number) => {
//     onChange(variants.filter((_, i) => i !== index));
//   };

//   return (
//     <section style={section}>
//       <header style={header}>
//         <h3 style={{ margin: 0 }}>Variants</h3>

//         {!showForm && (
//           <button onClick={() => setShowForm(true)} style={btnPrimary}>
//             + Add Variant
//           </button>
//         )}
//       </header>

//       {variants.length === 0 && !showForm && (
//         <div style={emptyState}>
//           No variants added yet.
//         </div>
//       )}

//       {variants.map((v, i) => (
//         <div key={i} style={card}>
//           <div>
//             <strong>{v.variant_name}</strong>
//             {v.short_label && <span style={badge}>{v.short_label}</span>}
//             {v.is_default && <span style={defaultBadge}>Default</span>}
//             <div style={meta}>
//               ₹{v.price} • Stock: {v.stock}
//             </div>
//           </div>

//           <button onClick={() => deleteVariant(i)} style={btnDanger}>
//             Delete
//           </button>
//         </div>
//       ))}

//       {showForm && (
//         <VariantForm
//           onSave={addVariant}
//           onCancel={() => setShowForm(false)}
//         />
//       )}
//     </section>
//   );
// }

// /* ---------------- styles ---------------- */

// const section: React.CSSProperties = {
//   marginTop: 32,
//   borderTop: "1px solid #e5e7eb",
//   paddingTop: 24,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 16,
// };

// const card: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: 12,
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   marginBottom: 10,
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
// };

// const badge: React.CSSProperties = {
//   marginLeft: 8,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#f3f4f6",
//   fontSize: 12,
// };

// const defaultBadge: React.CSSProperties = {
//   marginLeft: 8,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#111827",
//   color: "white",
//   fontSize: 12,
// };

// const emptyState: React.CSSProperties = {
//   padding: 16,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 10px",
//   borderRadius: 8,
//   border: "1px solid #ef4444",
//   background: "#ef4444",
//   color: "white",
//   cursor: "pointer",
// };





//////////////////


// import { useState } from "react";
// import VariantForm from "./VariantForm";
// import type { VariantUI } from "../schema";

// type Props = {
//   variants: VariantUI[];
//   onChange: (variants: VariantUI[]) => void;
// };

// export default function VariantsManager({ variants, onChange }: Props) {
//   const [showForm, setShowForm] = useState(false);

//   const addVariant = (variant: VariantUI) => {
//     const updated = variant.is_default
//       ? variants.map(v => ({ ...v, is_default: false })).concat(variant)
//       : [...variants, variant];

//     onChange(updated);
//     setShowForm(false);
//   };

//   const deleteVariant = (id: string) => {
//     let updated = variants.filter(v => v.id !== id);

//     if (updated.length > 0 && !updated.some(v => v.is_default)) {
//       updated[0] = { ...updated[0], is_default: true };
//     }

//     onChange(updated);
//   };

//   return (
//     <section style={section}>
//       <header style={header}>
//         <h3>Variants</h3>

//         {!showForm && (
//           <button style={btnPrimary} onClick={() => setShowForm(true)}>
//             + Add Variant
//           </button>
//         )}
//       </header>

//       {variants.length === 0 && !showForm && (
//         <div style={empty}>No variants added yet.</div>
//       )}

//       {variants.map(v => (
//         <div key={v.id} style={card}>
//           <div>
//             <strong>{v.variant_name}</strong>
//             {v.is_default && <span style={defaultBadge}>Default</span>}
//             <div style={meta}>
//               ₹{v.price} • Stock: {v.stock}
//             </div>
//           </div>

//           <button style={btnDanger} onClick={() => deleteVariant(v.id)}>
//             Delete
//           </button>
//         </div>
//       ))}

//       {showForm && (
//         <VariantForm
//           onSave={addVariant}
//           onCancel={() => setShowForm(false)}
//         />
//       )}
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const section: React.CSSProperties = {
//   marginTop: 32,
//   borderTop: "1px solid #e5e7eb",
//   paddingTop: 24,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   marginBottom: 16,
// };

// const card: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   padding: 12,
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   marginBottom: 10,
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
// };

// const defaultBadge: React.CSSProperties = {
//   marginLeft: 8,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#111827",
//   color: "white",
//   fontSize: 12,
// };

// const empty: React.CSSProperties = {
//   padding: 16,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   background: "#111827",
//   color: "white",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 10px",
//   borderRadius: 8,
//   background: "#ef4444",
//   color: "white",
// };




////////////////////////////////



// import { useState } from "react";
// import VariantForm from "./VariantForm";
// import type { VariantUI } from "../schema";

// type Props = {
//   variants: VariantUI[];
//   onChange: (variants: VariantUI[]) => void;
// };

// export default function VariantsManager({ variants, onChange }: Props) {
//   const [showForm, setShowForm] = useState(false);

//   const addVariant = (variant: VariantUI) => {
//     const updated = variant.is_default
//       ? variants.map(v => ({ ...v, is_default: false })).concat(variant)
//       : [...variants, variant];

//     onChange(updated);
//     setShowForm(false);
//   };

//   const deleteVariant = (id: string) => {
//     let updated = variants.filter(v => v.id !== id);

//     // ensure one default if at least one variant exists
//     if (updated.length > 0 && !updated.some(v => v.is_default)) {
//       updated[0] = { ...updated[0], is_default: true };
//     }

//     onChange(updated);
//   };

//   return (
//     <section style={section}>
//       <header style={header}>
//         <h3 style={{ margin: 0 }}>Variants</h3>

//         {!showForm && (
//           <button style={btnPrimary} onClick={() => setShowForm(true)}>
//             + Add Variant
//           </button>
//         )}
//       </header>

//       {variants.length === 0 && !showForm && (
//         <div style={empty}>No variants added yet.</div>
//       )}

//       {variants.map(v => (
//         <div key={v.id} style={card}>
//           <div>
//             <strong>{v.variant_name}</strong>
//             {v.short_label && <span style={badge}>{v.short_label}</span>}
//             {v.is_default && <span style={defaultBadge}>Default</span>}
//             <div style={meta}>
//               ₹{v.price} • Stock: {v.stock}
//             </div>
//           </div>

//           <button style={btnDanger} onClick={() => deleteVariant(v.id)}>
//             Delete
//           </button>
//         </div>
//       ))}

//       {showForm && (
//         <VariantForm
//           onSave={addVariant}
//           onCancel={() => setShowForm(false)}
//         />
//       )}
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const section: React.CSSProperties = {
//   marginTop: 32,
//   borderTop: "1px solid #e5e7eb",
//   paddingTop: 24,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 16,
// };

// const card: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: 12,
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   marginBottom: 10,
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 4,
// };

// const badge: React.CSSProperties = {
//   marginLeft: 8,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#f3f4f6",
//   fontSize: 12,
// };

// const defaultBadge: React.CSSProperties = {
//   marginLeft: 8,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#111827",
//   color: "white",
//   fontSize: 12,
// };

// const empty: React.CSSProperties = {
//   padding: 16,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 10px",
//   borderRadius: 8,
//   border: "1px solid #ef4444",
//   background: "#ef4444",
//   color: "white",
//   cursor: "pointer",
// };




/////////////// ***


// import { useState } from "react";
// import VariantForm from "./VariantForm";
// import type { VariantUI } from "../schema";

// type Props = {
//   variants: VariantUI[];
//   onChange: (variants: VariantUI[]) => void;
// };

// export default function VariantsManager({ variants, onChange }: Props) {
//   const [showForm, setShowForm] = useState(false);

//   /* ================= ADD VARIANT ================= */

//   const addVariant = (variant: VariantUI) => {
//     let updated: VariantUI[];

//     if (variant.is_default) {
//       updated = variants.map(v => ({ ...v, is_default: false })).concat(variant);
//     } else {
//       updated = [...variants, variant];
//     }

//     // Always ensure one default
//     if (!updated.some(v => v.is_default)) {
//       updated[0] = { ...updated[0], is_default: true };
//     }

//     onChange(updated);

//     // ✅ IMPORTANT UX FIX
//     // Keep form OPEN for next variant
//     setShowForm(true);
//   };

//   /* ================= DELETE VARIANT ================= */

//   const deleteVariant = (id: string) => {
//     let updated = variants.filter(v => v.id !== id);

//     if (updated.length > 0 && !updated.some(v => v.is_default)) {
//       updated[0] = { ...updated[0], is_default: true };
//     }

//     onChange(updated);
//   };

//   /* ================= RENDER ================= */

//   return (
//     <section style={section}>
//       <header style={header}>
//         <h3 style={{ margin: 0 }}>
//           Variants <span style={countBadge}>{variants.length}</span>
//         </h3>

//         {/* ✅ BUTTON ALWAYS VISIBLE */}
//         <button
//           style={btnPrimary}
//           onClick={() => setShowForm(true)}
//         >
//           + Add Variant
//         </button>
//       </header>

//       {variants.length === 0 && !showForm && (
//         <div style={empty}>No variants added yet.</div>
//       )}

//       {/* ================= VARIANT LIST ================= */}
//       <div style={{ display: "grid", gap: 12 }}>
//         {variants.map(v => (
//           <div key={v.id} style={card}>
//             <div>
//               <strong>{v.variant_name}</strong>
//               {v.short_label && <span style={badge}>{v.short_label}</span>}
//               {v.is_default && <span style={defaultBadge}>Default</span>}

//               <div style={meta}>
//                 ₹{v.price} • Stock: {v.stock}
//               </div>

//               {v.attributes && (
//                 <div style={attr}>
//                   {Object.entries(v.attributes).map(([k, val]) => (
//                     <span key={k} style={attrBadge}>
//                       {k}: {String(val)}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <button
//               style={btnDanger}
//               onClick={() => deleteVariant(v.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ================= FORM ================= */}
//       {showForm && (
//         <VariantForm
//           key={variants.length} // 🔥 forces form reset
//           onSave={addVariant}
//           onCancel={() => setShowForm(false)}
//         />
//       )}
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const section: React.CSSProperties = {
//   marginTop: 32,
//   borderTop: "1px solid #e5e7eb",
//   paddingTop: 24,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 16,
// };

// const card: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   padding: 14,
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 4,
// };

// const badge: React.CSSProperties = {
//   marginLeft: 8,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#f3f4f6",
//   fontSize: 12,
// };

// const defaultBadge: React.CSSProperties = {
//   marginLeft: 8,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#111827",
//   color: "white",
//   fontSize: 12,
// };

// const countBadge: React.CSSProperties = {
//   marginLeft: 6,
//   padding: "2px 8px",
//   borderRadius: 999,
//   background: "#e5e7eb",
//   fontSize: 12,
// };

// const attr: React.CSSProperties = {
//   marginTop: 6,
//   display: "flex",
//   gap: 6,
//   flexWrap: "wrap",
// };

// const attrBadge: React.CSSProperties = {
//   fontSize: 11,
//   padding: "2px 6px",
//   borderRadius: 6,
//   background: "#f9fafb",
//   border: "1px solid #e5e7eb",
// };

// const empty: React.CSSProperties = {
//   padding: 16,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 10px",
//   borderRadius: 8,
//   border: "1px solid #ef4444",
//   background: "#ef4444",
//   color: "white",
//   cursor: "pointer",
// };



///////////////////////////////




// import { useMemo, useState } from "react";
// import VariantForm from "./VariantForm";
// import VariantCard from "./VariantCard";
// import type { VariantUI } from "../schema";

// type Props = {
//   variants: VariantUI[];
//   onChange: (variants: VariantUI[]) => void;
// };

// export default function VariantsManager({ variants, onChange }: Props) {
//   const [showForm, setShowForm] = useState(false);

//   const hasDefault = useMemo(
//     () => variants.some((v) => v.is_default),
//     [variants]
//   );

//   const addVariant = (variant: VariantUI) => {
//     let updated: VariantUI[];

//     // if the new one is default => reset others
//     if (variant.is_default) {
//       updated = variants.map((v) => ({ ...v, is_default: false })).concat(variant);
//     } else {
//       updated = [...variants, variant];

//       // If no default exists, force first to be default
//       if (!hasDefault && updated.length > 0) {
//         updated[0] = { ...updated[0], is_default: true };
//       }
//     }

//     onChange(updated);
//     setShowForm(false); // ✅ form closes, button should come back
//   };

//   const updateVariant = (next: VariantUI) => {
//     let updated = variants.map((v) => (v.id === next.id ? next : v));

//     // enforce only one default
//     if (next.is_default) {
//       updated = updated.map((v) =>
//         v.id === next.id ? v : { ...v, is_default: false }
//       );
//     } else {
//       // if user unticks default and no default remains -> force first
//       if (updated.length > 0 && !updated.some((v) => v.is_default)) {
//         updated[0] = { ...updated[0], is_default: true };
//       }
//     }

//     onChange(updated);
//   };

//   const deleteVariant = (id: string) => {
//     let updated = variants.filter((v) => v.id !== id);

//     // keep one default if any variants exist
//     if (updated.length > 0 && !updated.some((v) => v.is_default)) {
//       updated[0] = { ...updated[0], is_default: true };
//     }

//     onChange(updated);
//   };

//   return (
//     <section style={section}>
//       <header style={header}>
//         <div>
//           <h3 style={{ margin: 0 }}>Variants</h3>
//           <div style={sub}>Add unlimited variants. Each variant can have its own images.</div>
//         </div>

//         {!showForm ? (
//           <button style={btnPrimary} onClick={() => setShowForm(true)} type="button">
//             + Add Variant
//           </button>
//         ) : (
//           <button style={btnSecondary} onClick={() => setShowForm(false)} type="button">
//             Close
//           </button>
//         )}
//       </header>

//       {variants.length === 0 && !showForm && (
//         <div style={empty}>No variants added yet.</div>
//       )}

//       {/* ✅ FORM */}
//       {showForm && (
//         <VariantForm
//           onSave={addVariant}
//           onCancel={() => setShowForm(false)}
//         />
//       )}

//       {/* ✅ VARIANT CARDS */}
//       {variants.map((v) => (
//         <VariantCard
//           key={v.id}
//           variant={v}
//           onUpdate={updateVariant}
//           onDelete={() => deleteVariant(v.id)}
//         />
//       ))}
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const section: React.CSSProperties = {
//   marginTop: 32,
//   borderTop: "1px solid #e5e7eb",
//   paddingTop: 24,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   gap: 12,
//   alignItems: "flex-start",
//   marginBottom: 16,
// };

// const sub: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 6,
// };

// const empty: React.CSSProperties = {
//   padding: 16,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };

// const btnSecondary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };





//////////////////


import { useMemo, useState } from "react";
import VariantForm from "./VariantForm";
import VariantCard from "./VariantCard";
import type { VariantUI } from "../schema";

type Props = {
  variants: VariantUI[];
  onChange: (variants: VariantUI[]) => void;
};

export default function VariantsManager({ variants, onChange }: Props) {
  const [showForm, setShowForm] = useState(false);

  const hasDefault = useMemo(() => variants.some((v) => v.is_default), [variants]);

  const addVariant = (variant: VariantUI) => {
    let updated: VariantUI[];

    if (variant.is_default) {
      updated = variants.map((v) => ({ ...v, is_default: false })).concat(variant);
    } else {
      updated = [...variants, variant];

      if (!hasDefault && updated.length > 0) {
        updated[0] = { ...updated[0], is_default: true };
      }
    }

    onChange(updated);
    setShowForm(false);
  };

  const updateVariant = (next: VariantUI) => {
    let updated = variants.map((v) => (v.id === next.id ? next : v));

    if (next.is_default) {
      updated = updated.map((v) => (v.id === next.id ? v : { ...v, is_default: false }));
    } else {
      if (updated.length > 0 && !updated.some((v) => v.is_default)) {
        updated[0] = { ...updated[0], is_default: true };
      }
    }

    onChange(updated);
  };

  const deleteVariant = (id: string) => {
    let updated = variants.filter((v) => v.id !== id);

    if (updated.length > 0 && !updated.some((v) => v.is_default)) {
      updated[0] = { ...updated[0], is_default: true };
    }

    onChange(updated);
  };

  return (
    <section style={section}>
      <header style={header}>
        {/* <div>
          <h3 style={{ margin: 0 }}>Variants</h3>
          <div style={sub}>Add unlimited variants. Each variant can have its own images.</div>
        </div> */}

        {!showForm ? (
          <button style={btnPrimary} onClick={() => setShowForm(true)} type="button">
            + Add Variant
          </button>
        ) : (
          <button style={btnSecondary} onClick={() => setShowForm(false)} type="button">
            Close
          </button>
        )}
      </header>

      {variants.length === 0 && !showForm && <div style={empty}>No variants added yet.</div>}

      {showForm && <VariantForm onSave={addVariant} onCancel={() => setShowForm(false)} />}

      {variants.map((v) => (
        <VariantCard
          key={v.id}
          variant={v}
          onUpdate={updateVariant}
          onDelete={() => deleteVariant(v.id)}
        />
      ))}
    </section>
  );
}

/* ================= STYLES ================= */

const section: React.CSSProperties = {
  marginTop: 32,
  borderTop: "1px solid #e5e7eb",
  paddingTop: 24,
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  gap: 12,
  alignItems: "flex-start",
  marginBottom: 16,
};

const sub: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7280",
  marginTop: 6,
};

const empty: React.CSSProperties = {
  padding: 16,
  border: "1px dashed #e5e7eb",
  borderRadius: 12,
  color: "#6b7280",
};

const btnPrimary: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid #111827",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  background: "white",
  cursor: "pointer",
};
