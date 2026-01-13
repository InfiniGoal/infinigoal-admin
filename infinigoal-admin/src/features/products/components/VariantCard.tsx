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


import VariantImagesManager from "../images/VariantImagesManager";
import AttributesEditor from "./AttributesEditor";
import type { VariantUI } from "../schema";

type Props = {
  variant: VariantUI;
  onUpdate: (v: VariantUI) => void;
  onDelete: () => void;
};

export default function VariantCard({ variant, onUpdate, onDelete }: Props) {
  return (
    <div style={card}>
      <header style={header}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <strong style={{ fontSize: 16 }}>{variant.variant_name}</strong>
          {variant.is_default && <span style={defaultBadge}>Default</span>}
        </div>

        <button type="button" onClick={onDelete} style={btnDanger}>
          Delete
        </button>
      </header>

      <div style={grid}>
        <Field label="Variant Name">
          <input
            value={variant.variant_name}
            onChange={(e) => onUpdate({ ...variant, variant_name: e.target.value })}
            style={input}
            placeholder="e.g. 500g Pack"
          />
        </Field>

        <Field label="Short Label">
          <input
            value={variant.short_label ?? ""}
            onChange={(e) => onUpdate({ ...variant, short_label: e.target.value })}
            style={input}
            placeholder="e.g. 500g"
          />
        </Field>

        <Field label="Price">
          <input
            type="number"
            value={variant.price}
            onChange={(e) => onUpdate({ ...variant, price: Number(e.target.value) })}
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
                mrp: e.target.value === "" ? undefined : Number(e.target.value),
              })
            }
            style={input}
          />
        </Field>

        <Field label="Stock">
          <input
            type="number"
            value={variant.stock}
            onChange={(e) => onUpdate({ ...variant, stock: Number(e.target.value) })}
            style={input}
          />
        </Field>

        <div style={{ display: "flex", alignItems: "center", gap: 10, paddingTop: 22 }}>
          <input
            type="checkbox"
            checked={variant.is_default}
            onChange={(e) => onUpdate({ ...variant, is_default: e.target.checked })}
          />
          <span>Default Variant</span>
        </div>
      </div>

      <div style={{ marginTop: 14 }}>
        <h4 style={title}>Variant Attributes</h4>
        <AttributesEditor
          value={variant.attributes}
          onChange={(attrs) => onUpdate({ ...variant, attributes: attrs })}
        />
      </div>

      {/* ✅ THIS IS THE VARIANT IMAGES SECTION */}
      <VariantImagesManager
        images={variant.images}
        onChange={(imgs) => onUpdate({ ...variant, images: imgs })}
      />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={labelStyle}>{label}</div>
      {children}
    </div>
  );
}

/* ================= STYLES ================= */

const card: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: 16,
  marginTop: 14,
  background: "white",
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
};

const defaultBadge: React.CSSProperties = {
  padding: "2px 8px",
  borderRadius: 999,
  background: "#111827",
  color: "white",
  fontSize: 12,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 12,
  marginTop: 14,
};

const title: React.CSSProperties = {
  margin: "0 0 8px 0",
  fontSize: 14,
};

const labelStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: "#374151",
  marginBottom: 6,
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
};

const btnDanger: React.CSSProperties = {
  padding: "6px 10px",
  borderRadius: 10,
  border: "1px solid #ef4444",
  background: "#ef4444",
  color: "white",
  cursor: "pointer",
};
