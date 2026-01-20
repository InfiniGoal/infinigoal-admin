// import { useRef } from "react";
// import type { ProductImageUI } from "@/features/images/types";

// type Props = {
//   images: ProductImageUI[];
//   onChange: (images: ProductImageUI[]) => void;
// };

// export default function ProductImagesManager({ images, onChange }: Props) {
//   const fileRef = useRef<HTMLInputElement | null>(null);

//   /* ---------------- add images ---------------- */

//   const addImages = (files: FileList | null) => {
//     if (!files) return;

//     const startPosition = images.length;

//     const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
//       image_url: URL.createObjectURL(file), // local preview
//       is_primary: images.length === 0 && idx === 0, // first image → primary
//       position: startPosition + idx + 1,
//     }));

//     onChange([...images, ...newImages]);
//   };

//   /* ---------------- remove ---------------- */

//   const removeImage = (index: number) => {
//     let updated = images.filter((_, i) => i !== index);

//     // Ensure one primary image always exists
//     if (!updated.some((img) => img.is_primary) && updated.length > 0) {
//       updated[0] = { ...updated[0], is_primary: true };
//     }

//     // Re-position
//     updated = updated.map((img, idx) => ({
//       ...img,
//       position: idx + 1,
//     }));

//     onChange(updated);
//   };

//   /* ---------------- set primary ---------------- */

//   const setPrimary = (index: number) => {
//     const updated = images.map((img, i) => ({
//       ...img,
//       is_primary: i === index,
//     }));

//     onChange(updated);
//   };

//   return (
//     <section style={section}>
//       <header style={header}>
//         <div>
//           <h3 style={{ margin: 0 }}>Product Images</h3>
//           <div style={sub}>
//             Upload thumbnail + gallery images (first / primary is thumbnail)
//           </div>
//         </div>

//         <button
//           type="button"
//           style={btnPrimary}
//           onClick={() => fileRef.current?.click()}
//         >
//           + Upload Images
//         </button>

//         <input
//           ref={fileRef}
//           type="file"
//           accept="image/*"
//           multiple
//           hidden
//           onChange={(e) => addImages(e.target.files)}
//         />
//       </header>

//       {images.length === 0 && (
//         <div style={empty}>No images uploaded yet.</div>
//       )}

//       <div style={grid}>
//         {images.map((img, idx) => (
//           <div key={idx} style={card}>
//             <img src={img.image_url} style={image} />

//             {img.is_primary && <div style={primaryBadge}>Thumbnail</div>}

//             <div style={actions}>
//               {!img.is_primary && (
//                 <button
//                   type="button"
//                   style={btnGhost}
//                   onClick={() => setPrimary(idx)}
//                 >
//                   Set as Thumbnail
//                 </button>
//               )}

//               <button
//                 type="button"
//                 style={btnDanger}
//                 onClick={() => removeImage(idx)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ---------------- styles ---------------- */

// const section: React.CSSProperties = {
//   marginTop: 32,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   gap: 12,
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

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
//   gap: 14,
// };

// const card: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 8,
//   background: "white",
//   position: "relative",
// };

// const image: React.CSSProperties = {
//   width: "100%",
//   height: 120,
//   objectFit: "cover",
//   borderRadius: 8,
// };

// const primaryBadge: React.CSSProperties = {
//   position: "absolute",
//   top: 8,
//   left: 8,
//   background: "#111827",
//   color: "white",
//   fontSize: 11,
//   padding: "2px 6px",
//   borderRadius: 6,
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   marginTop: 8,
//   gap: 6,
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };

// const btnGhost: React.CSSProperties = {
//   padding: "6px 8px",
//   borderRadius: 8,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
//   fontSize: 12,
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 8px",
//   borderRadius: 8,
//   border: "1px solid #ef4444",
//   background: "#ef4444",
//   color: "white",
//   cursor: "pointer",
//   fontSize: 12,
// };




///////////




// import { useRef } from "react";
// import type { ProductImageUI } from "@/features/images/types";

// type Props = {
//   images: ProductImageUI[];
//   onChange: (images: ProductImageUI[]) => void;
// };

// export default function ProductImagesManager({ images, onChange }: Props) {
//   const fileRef = useRef<HTMLInputElement | null>(null);

//   /* ================= ADD IMAGES ================= */

//   const addImages = (files: FileList | null) => {
//     if (!files || files.length === 0) return;

//     const startPosition = images.length;

//     const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
//       id: crypto.randomUUID(),                 // ✅ REQUIRED
//       image_url: URL.createObjectURL(file),    // local preview (later → Supabase URL)
//       is_primary: images.length === 0 && idx === 0,
//       position: startPosition + idx + 1,
//       variant_id: undefined,                   // ✅ product-level image
//     }));

//     onChange([...images, ...newImages]);
//   };

//   /* ================= REMOVE IMAGE ================= */

//   const removeImage = (index: number) => {
//     let updated = images.filter((_, i) => i !== index);

//     // Ensure one primary image always exists
//     if (updated.length > 0 && !updated.some(img => img.is_primary)) {
//       updated[0] = { ...updated[0], is_primary: true };
//     }

//     // Recalculate positions
//     updated = updated.map((img, idx) => ({
//       ...img,
//       position: idx + 1,
//     }));

//     onChange(updated);
//   };

//   /* ================= SET PRIMARY ================= */

//   const setPrimary = (index: number) => {
//     const updated = images.map((img, i) => ({
//       ...img,
//       is_primary: i === index,
//     }));

//     onChange(updated);
//   };

//   /* ================= UI ================= */

//   return (
//     <section style={section}>
//       <header style={header}>
//         <div>
//           <h3 style={{ margin: 0 }}>Product Images</h3>
//           <div style={sub}>
//             Upload thumbnail + gallery images (first / primary is thumbnail)
//           </div>
//         </div>

//         <button
//           type="button"
//           style={btnPrimary}
//           onClick={() => fileRef.current?.click()}
//         >
//           + Upload Images
//         </button>

//         <input
//           ref={fileRef}
//           type="file"
//           accept="image/*"
//           multiple
//           hidden
//           onChange={(e) => addImages(e.target.files)}
//         />
//       </header>

//       {images.length === 0 && (
//         <div style={empty}>No images uploaded yet.</div>
//       )}

//       <div style={grid}>
//         {images.map((img, idx) => (
//           <div key={img.id} style={card}>
//             <img src={img.image_url} style={image} />

//             {img.is_primary && <div style={primaryBadge}>Thumbnail</div>}

//             <div style={actions}>
//               {!img.is_primary && (
//                 <button
//                   type="button"
//                   style={btnGhost}
//                   onClick={() => setPrimary(idx)}
//                 >
//                   Set as Thumbnail
//                 </button>
//               )}

//               <button
//                 type="button"
//                 style={btnDanger}
//                 onClick={() => removeImage(idx)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const section: React.CSSProperties = {
//   marginTop: 32,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   gap: 12,
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

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
//   gap: 14,
// };

// const card: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 8,
//   background: "white",
//   position: "relative",
// };

// const image: React.CSSProperties = {
//   width: "100%",
//   height: 120,
//   objectFit: "cover",
//   borderRadius: 8,
// };

// const primaryBadge: React.CSSProperties = {
//   position: "absolute",
//   top: 8,
//   left: 8,
//   background: "#111827",
//   color: "white",
//   fontSize: 11,
//   padding: "2px 6px",
//   borderRadius: 6,
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   marginTop: 8,
//   gap: 6,
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };

// const btnGhost: React.CSSProperties = {
//   padding: "6px 8px",
//   borderRadius: 8,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
//   fontSize: 12,
// };

// const btnDanger: React.CSSProperties = {
//   padding: "6px 8px",
//   borderRadius: 8,
//   border: "1px solid #ef4444",
//   background: "#ef4444",
//   color: "white",
//   cursor: "pointer",
//   fontSize: 12,
// };





/////////////////////// ********** above worked before the UI UX upgrade



import { useRef } from "react";
import type { ProductImageUI } from "@/features/images/types";

type Props = {
  images: ProductImageUI[];
  onChange: (images: ProductImageUI[]) => void;
};

export default function ProductImagesManager({ images, onChange }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  const addImages = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const startPosition = images.length;

    const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
      id: crypto.randomUUID(),
      image_url: URL.createObjectURL(file),
      is_primary: images.length === 0 && idx === 0,
      position: startPosition + idx + 1,
      variant_id: undefined,
    }));

    onChange([...images, ...newImages]);
  };

  const removeImage = (index: number) => {
    let updated = images.filter((_, i) => i !== index);

    if (updated.length > 0 && !updated.some(img => img.is_primary)) {
      updated[0] = { ...updated[0], is_primary: true };
    }

    updated = updated.map((img, idx) => ({ ...img, position: idx + 1 }));
    onChange(updated);
  };

  const setPrimary = (index: number) => {
    onChange(images.map((img, i) => ({ ...img, is_primary: i === index })));
  };

  return (
    <section>
      <div style={header}>
        {/* <div>
          <h3 style={title}>Product Images</h3>
          <p style={subtitle}>
            Upload gallery images. The primary image is used as thumbnail.
          </p>
        </div> */}

        <button
          type="button"
          style={uploadBtn}
          onClick={() => fileRef.current?.click()}
        >
          + Upload Images
        </button>

        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={(e) => addImages(e.target.files)}
        />
      </div>

      {images.length === 0 && (
        <div style={emptyState}>
          No images uploaded yet. Add at least one product image.
        </div>
      )}

      <div style={grid}>
        {images.map((img, idx) => (
          <div
            key={img.id}
            style={{
              ...card,
              outline: img.is_primary ? "2px solid #bf9602" : "none",
            }}
          >
            <img src={img.image_url} style={image} />

            {img.is_primary && <div style={primaryBadge}>Primary</div>}

            <div style={actions}>
              {!img.is_primary && (
                <button
                  type="button"
                  style={ghostBtn}
                  onClick={() => setPrimary(idx)}
                >
                  Set Primary
                </button>
              )}

              <button
                type="button"
                style={dangerBtn}
                onClick={() => removeImage(idx)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- STYLES ---------------- */

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 16,
  marginBottom: 18,
};

const title: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 800,
};

const subtitle: React.CSSProperties = {
  fontSize: 13,
  color: "#6c7a89",
  marginTop: 4,
};

const uploadBtn: React.CSSProperties = {
  background: "#111827",
  color: "#fff",
  padding: "10px 14px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
};

const emptyState: React.CSSProperties = {
  padding: 18,
  borderRadius: 14,
  border: "1px dashed #e3e3e3",
  background: "#fafafa",
  color: "#6c7a89",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: 16,
  marginTop: 18,
};

const card: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 16,
  padding: 10,
  position: "relative",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
};

const image: React.CSSProperties = {
  width: "100%",
  height: 140,
  objectFit: "contain",
  borderRadius: 12,
  
};

const primaryBadge: React.CSSProperties = {
  position: "absolute",
  top: 10,
  left: 10,
  background: "#bf9602",
  color: "#fff",
  fontSize: 11,
  fontWeight: 700,
  padding: "4px 8px",
  borderRadius: 999,
};

const actions: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 10,
  gap: 8,
};

const ghostBtn: React.CSSProperties = {
  flex: 1,
  padding: "6px 8px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  background: "#fff",
  cursor: "pointer",
  fontSize: 12,
};

const dangerBtn: React.CSSProperties = {
  flex: 1,
  padding: "6px 8px",
  borderRadius: 10,
  border: "none",
  background: "#ef4444",
  color: "#fff",
  cursor: "pointer",
  fontSize: 12,
};
