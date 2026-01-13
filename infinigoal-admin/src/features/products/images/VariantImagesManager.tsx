// import ImageUploader from "@/shared/images/ImageUploader";
// import ImageList from "@/shared/images/ImageList";
// import type { ProductImageUI } from "@/features/images/types";

// type Props = {
//   images: ProductImageUI[];
//   onChange: (images: ProductImageUI[]) => void;
// };

// export default function VariantImagesManager({ images, onChange }: Props) {
//   const addImages = (urls: string[]) => {
//     const start = images.length + 1;

//     const newImages: ProductImageUI[] = urls.map((url, i) => ({
//       id: crypto.randomUUID(),
//       image_url: url,
//       is_primary: false,
//       position: start + i,
//     }));

//     onChange([...images, ...newImages]);
//   };

//   return (
//     <div style={{ marginTop: 12 }}>
//       <strong>Variant Images</strong>

//       <ImageUploader onUpload={addImages} />

//       {images.length > 0 && (
//         <ImageList images={images} onChange={onChange} />
//       )}
//     </div>
//   );
// }



/////////////



// import type { ProductImageUI } from "@/features/images/types";
// import ImageUploader from "@/shared/images/ImageUploader";
// import ImageList from "@/shared/images/ImageList";

// type Props = {
//   images: ProductImageUI[];
//   onChange: (images: ProductImageUI[]) => void;
// };

// export default function VariantImagesManager({ images, onChange }: Props) {
//   /**
//    * ImageUploader always returns string[]
//    */
//   const handleUpload = (urls: string[]) => {
//     if (!urls || urls.length === 0) return;

//     const nextImages: ProductImageUI[] = urls.map((url, idx) => ({
//       id: crypto.randomUUID(),          // ✅ UI-only ID
//       image_url: url,                   // ✅ string
//       is_primary: images.length === 0 && idx === 0, // first ever image
//       position: images.length + idx + 1,
//     }));

//     onChange([...images, ...nextImages]);
//   };

//   /**
//    * Normalize order after reorder / delete
//    */
//   const handleChange = (updated: ProductImageUI[]) => {
//     const normalized = updated.map((img, index) => ({
//       ...img,
//       position: index + 1,
//     }));

//     onChange(normalized);
//   };

//   return (
//     <section style={{ marginTop: 16 }}>
//       <h4 style={{ marginBottom: 8 }}>Variant Images</h4>

//       <ImageUploader onUpload={handleUpload} />

//       <ImageList
//         images={images}
//         onChange={handleChange}
//       />
//     </section>
//   );
// }




///////////////////////////////




// import type { ProductImageUI } from "@/features/images/types";

// type Props = {
//   images: ProductImageUI[];
//   onChange: (images: ProductImageUI[]) => void;
// };

// export default function VariantImagesManager({ images, onChange }: Props) {
//   const addImages = (files: FileList | null) => {
//     if (!files || files.length === 0) return;

//     const startPosition = images.length;

//     const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
//       id: crypto.randomUUID(),
//       image_url: URL.createObjectURL(file),
//       is_primary: images.length === 0 && idx === 0,
//       position: startPosition + idx + 1,
//       variant_id: "ui-variant", // UI placeholder (real variant_id later from DB)
//     }));

//     onChange([...images, ...newImages]);
//   };

//   const removeImage = (id: string) => {
//     let updated = images.filter((img) => img.id !== id);

//     if (updated.length > 0 && !updated.some((img) => img.is_primary)) {
//       updated[0] = { ...updated[0], is_primary: true };
//     }

//     updated = updated.map((img, idx) => ({ ...img, position: idx + 1 }));
//     onChange(updated);
//   };

//   const setPrimary = (id: string) => {
//     const updated = images.map((img) => ({
//       ...img,
//       is_primary: img.id === id,
//     }));
//     onChange(updated);
//   };

//   return (
//     <section style={{ marginTop: 16 }}>
//       <h4 style={{ margin: "0 0 10px 0" }}>Variant Images</h4>

//       <input
//         type="file"
//         multiple
//         accept="image/*"
//         onChange={(e) => addImages(e.target.files)}
//       />

//       {images.length === 0 ? (
//         <div style={empty}>No variant images yet.</div>
//       ) : (
//         <div style={grid}>
//           {images.map((img) => (
//             <div key={img.id} style={imgCard}>
//               <img src={img.image_url} style={imgStyle} />

//               {img.is_primary && <div style={badge}>Primary</div>}

//               <div style={row}>
//                 {!img.is_primary && (
//                   <button type="button" style={btnGhost} onClick={() => setPrimary(img.id)}>
//                     Set Primary
//                   </button>
//                 )}
//                 <button type="button" style={btnDanger} onClick={() => removeImage(img.id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// const empty: React.CSSProperties = {
//   padding: 12,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
//   gap: 12,
//   marginTop: 12,
// };

// const imgCard: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 8,
//   position: "relative",
// };

// const imgStyle: React.CSSProperties = {
//   width: "100%",
//   height: 110,
//   objectFit: "cover",
//   borderRadius: 10,
// };

// const badge: React.CSSProperties = {
//   position: "absolute",
//   top: 8,
//   left: 8,
//   background: "#111827",
//   color: "white",
//   fontSize: 11,
//   padding: "2px 6px",
//   borderRadius: 6,
// };

// const row: React.CSSProperties = {
//   display: "flex",
//   gap: 8,
//   marginTop: 8,
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




//////////////////////



// import type { ProductImageUI } from "@/features/images/types";

// type Props = {
//   images: ProductImageUI[];
//   onChange: (images: ProductImageUI[]) => void;
// };

// export default function VariantImagesManager({ images, onChange }: Props) {
//   const addImages = (files: FileList | null) => {
//     if (!files || files.length === 0) return;

//     const startPosition = images.length;

//     const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
//       id: crypto.randomUUID(),
//       image_url: URL.createObjectURL(file),
//       is_primary: images.length === 0 && idx === 0,
//       position: startPosition + idx + 1,
//       variant_id: "ui-variant", // placeholder until DB id
//     }));

//     onChange([...images, ...newImages]);
//   };

//   const removeImage = (id: string) => {
//     let updated = images.filter((img) => img.id !== id);

//     if (updated.length > 0 && !updated.some((img) => img.is_primary)) {
//       updated[0] = { ...updated[0], is_primary: true };
//     }

//     updated = updated.map((img, idx) => ({ ...img, position: idx + 1 }));
//     onChange(updated);
//   };

//   const setPrimary = (id: string) => {
//     const updated = images.map((img) => ({
//       ...img,
//       is_primary: img.id === id,
//     }));
//     onChange(updated);
//   };

//   return (
//     <section style={{ marginTop: 16 }}>
//       <h4 style={{ margin: "0 0 10px 0" }}>Variant Images</h4>

//       <input
//         type="file"
//         multiple
//         accept="image/*"
//         onChange={(e) => addImages(e.target.files)}
//       />

//       {images.length === 0 ? (
//         <div style={empty}>No variant images yet.</div>
//       ) : (
//         <div style={grid}>
//           {images.map((img) => (
//             <div key={img.id} style={imgCard}>
//               <img src={img.image_url} style={imgStyle} />

//               {img.is_primary && <div style={badge}>Primary</div>}

//               <div style={row}>
//                 {!img.is_primary && (
//                   <button type="button" style={btnGhost} onClick={() => setPrimary(img.id)}>
//                     Set Primary
//                   </button>
//                 )}
//                 <button type="button" style={btnDanger} onClick={() => removeImage(img.id)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// const empty: React.CSSProperties = {
//   padding: 12,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
//   gap: 12,
//   marginTop: 12,
// };

// const imgCard: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 8,
//   position: "relative",
// };

// const imgStyle: React.CSSProperties = {
//   width: "100%",
//   height: 110,
//   objectFit: "cover",
//   borderRadius: 10,
// };

// const badge: React.CSSProperties = {
//   position: "absolute",
//   top: 8,
//   left: 8,
//   background: "#111827",
//   color: "white",
//   fontSize: 11,
//   padding: "2px 6px",
//   borderRadius: 6,
// };

// const row: React.CSSProperties = {
//   display: "flex",
//   gap: 8,
//   marginTop: 8,
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



///////////////////

// import { useRef } from "react";
// import type { ProductImageUI } from "@/features/images/types";

// type Props = {
//   images: ProductImageUI[];
//   onChange: (images: ProductImageUI[]) => void;
// };

// export default function VariantImagesManager({ images, onChange }: Props) {
//   const fileRef = useRef<HTMLInputElement | null>(null);

//   const addImages = (files: FileList | null) => {
//     if (!files || files.length === 0) return;

//     const startPosition = images.length;

//     const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
//       id: crypto.randomUUID(),
//       image_url: URL.createObjectURL(file), // local preview
//       is_primary: images.length === 0 && idx === 0, // first image becomes primary
//       position: startPosition + idx + 1,
//       variant_id: "ui", // placeholder until DB save
//     }));

//     onChange([...images, ...newImages]);
//   };

//   const removeImage = (id: string) => {
//     let updated = images.filter((img) => img.id !== id);

//     if (updated.length > 0 && !updated.some((img) => img.is_primary)) {
//       updated[0] = { ...updated[0], is_primary: true };
//     }

//     updated = updated.map((img, idx) => ({ ...img, position: idx + 1 }));
//     onChange(updated);
//   };

//   const setPrimary = (id: string) => {
//     const updated = images.map((img) => ({
//       ...img,
//       is_primary: img.id === id,
//     }));
//     onChange(updated);
//   };

//   return (
//     <section style={section}>
//       <header style={header}>
//         <div>
//           <h4 style={{ margin: 0 }}>Variant Images</h4>
//           <div style={sub}>Upload images specific to this variant.</div>
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

//       {images.length === 0 ? (
//         <div style={empty}>No variant images uploaded yet.</div>
//       ) : (
//         <div style={grid}>
//           {images.map((img) => (
//             <div key={img.id} style={card}>
//               <img src={img.image_url} style={image} />

//               {img.is_primary && <div style={primaryBadge}>Primary</div>}

//               <div style={actions}>
//                 {!img.is_primary && (
//                   <button
//                     type="button"
//                     style={btnGhost}
//                     onClick={() => setPrimary(img.id)}
//                   >
//                     Set Primary
//                   </button>
//                 )}

//                 <button
//                   type="button"
//                   style={btnDanger}
//                   onClick={() => removeImage(img.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }

// /* ================= STYLES ================= */

// const section: React.CSSProperties = {
//   marginTop: 16,
//   borderTop: "1px solid #f3f4f6",
//   paddingTop: 14,
// };

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   gap: 12,
// };

// const sub: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 6,
// };

// const empty: React.CSSProperties = {
//   padding: 14,
//   border: "1px dashed #e5e7eb",
//   borderRadius: 12,
//   color: "#6b7280",
//   marginTop: 12,
// };

// const grid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
//   gap: 14,
//   marginTop: 12,
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




///////////////////////



// src/features/products/images/VariantImagesManager.tsx
import { useRef } from "react";
import type { ProductImageUI } from "@/features/images/types";

type Props = {
  images: ProductImageUI[];
  onChange: (images: ProductImageUI[]) => void;
};

export default function VariantImagesManager({ images, onChange }: Props) {
  const fileRef = useRef<HTMLInputElement | null>(null);

  // ✅ debug: confirm this section renders
  // remove after you confirm
  console.log("🟣 VariantImagesManager rendered. images:", images?.length);

  const addImages = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const startPosition = images.length;

    const newImages: ProductImageUI[] = Array.from(files).map((file, idx) => ({
      id: crypto.randomUUID(),
      image_url: URL.createObjectURL(file), // local preview
      is_primary: images.length === 0 && idx === 0,
      position: startPosition + idx + 1,
      // ✅ don't set variant_id now (set it only when saving to DB)
      variant_id: undefined,
    }));

    onChange([...images, ...newImages]);
  };

  const removeImage = (id: string) => {
    let updated = images.filter((img) => img.id !== id);

    if (updated.length > 0 && !updated.some((img) => img.is_primary)) {
      updated[0] = { ...updated[0], is_primary: true };
    }

    updated = updated.map((img, idx) => ({ ...img, position: idx + 1 }));
    onChange(updated);
  };

  const setPrimary = (id: string) => {
    const updated = images.map((img) => ({
      ...img,
      is_primary: img.id === id,
    }));
    onChange(updated);
  };

  return (
    <section style={section}>
      <header style={header}>
        <div>
          <h4 style={{ margin: 0 }}>Variant Images</h4>
          <div style={sub}>Upload images specific to this variant.</div>
        </div>

        <button
          type="button"
          style={btnPrimary}
          onClick={() => fileRef.current?.click()}
        >
          + Upload Variant Images
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

      {images.length === 0 ? (
        <div style={empty}>No variant images uploaded yet.</div>
      ) : (
        <div style={grid}>
          {images.map((img) => (
            <div key={img.id} style={card}>
              <img src={img.image_url} style={image} />

              {img.is_primary && <div style={primaryBadge}>Primary</div>}

              <div style={actions}>
                {!img.is_primary && (
                  <button
                    type="button"
                    style={btnGhost}
                    onClick={() => setPrimary(img.id)}
                  >
                    Set Primary
                  </button>
                )}

                <button
                  type="button"
                  style={btnDanger}
                  onClick={() => removeImage(img.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

/* ================= STYLES ================= */

const section: React.CSSProperties = {
  marginTop: 16,
  borderTop: "1px solid #f3f4f6",
  paddingTop: 14,
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 12,
};

const sub: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7280",
  marginTop: 6,
};

const empty: React.CSSProperties = {
  padding: 14,
  border: "1px dashed #e5e7eb",
  borderRadius: 12,
  color: "#6b7280",
  marginTop: 12,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
  gap: 14,
  marginTop: 12,
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
