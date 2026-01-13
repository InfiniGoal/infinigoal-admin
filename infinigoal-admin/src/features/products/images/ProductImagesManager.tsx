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




import { useRef } from "react";
import type { ProductImageUI } from "@/features/images/types";

type Props = {
  images: ProductImageUI[];
  onChange: (images: ProductImageUI[]) => void;
};

export default function ProductImagesManager({ images, onChange }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  /* ================= ADD IMAGES ================= */

  const addImages = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const startPosition = images.length;

    const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
      id: crypto.randomUUID(),                 // ✅ REQUIRED
      image_url: URL.createObjectURL(file),    // local preview (later → Supabase URL)
      is_primary: images.length === 0 && idx === 0,
      position: startPosition + idx + 1,
      variant_id: undefined,                   // ✅ product-level image
    }));

    onChange([...images, ...newImages]);
  };

  /* ================= REMOVE IMAGE ================= */

  const removeImage = (index: number) => {
    let updated = images.filter((_, i) => i !== index);

    // Ensure one primary image always exists
    if (updated.length > 0 && !updated.some(img => img.is_primary)) {
      updated[0] = { ...updated[0], is_primary: true };
    }

    // Recalculate positions
    updated = updated.map((img, idx) => ({
      ...img,
      position: idx + 1,
    }));

    onChange(updated);
  };

  /* ================= SET PRIMARY ================= */

  const setPrimary = (index: number) => {
    const updated = images.map((img, i) => ({
      ...img,
      is_primary: i === index,
    }));

    onChange(updated);
  };

  /* ================= UI ================= */

  return (
    <section style={section}>
      <header style={header}>
        <div>
          <h3 style={{ margin: 0 }}>Product Images</h3>
          <div style={sub}>
            Upload thumbnail + gallery images (first / primary is thumbnail)
          </div>
        </div>

        <button
          type="button"
          style={btnPrimary}
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
      </header>

      {images.length === 0 && (
        <div style={empty}>No images uploaded yet.</div>
      )}

      <div style={grid}>
        {images.map((img, idx) => (
          <div key={img.id} style={card}>
            <img src={img.image_url} style={image} />

            {img.is_primary && <div style={primaryBadge}>Thumbnail</div>}

            <div style={actions}>
              {!img.is_primary && (
                <button
                  type="button"
                  style={btnGhost}
                  onClick={() => setPrimary(idx)}
                >
                  Set as Thumbnail
                </button>
              )}

              <button
                type="button"
                style={btnDanger}
                onClick={() => removeImage(idx)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================= STYLES ================= */

const section: React.CSSProperties = {
  marginTop: 32,
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 12,
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

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
  gap: 14,
};

const card: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: 8,
  background: "white",
  position: "relative",
};

const image: React.CSSProperties = {
  width: "100%",
  height: 120,
  objectFit: "cover",
  borderRadius: 8,
};

const primaryBadge: React.CSSProperties = {
  position: "absolute",
  top: 8,
  left: 8,
  background: "#111827",
  color: "white",
  fontSize: 11,
  padding: "2px 6px",
  borderRadius: 6,
};

const actions: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 8,
  gap: 6,
};

const btnPrimary: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid #111827",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  padding: "6px 8px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  background: "white",
  cursor: "pointer",
  fontSize: 12,
};

const btnDanger: React.CSSProperties = {
  padding: "6px 8px",
  borderRadius: 8,
  border: "1px solid #ef4444",
  background: "#ef4444",
  color: "white",
  cursor: "pointer",
  fontSize: 12,
};
