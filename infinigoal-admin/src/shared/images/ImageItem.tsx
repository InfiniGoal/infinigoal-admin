// import type { ImageItem } from "@/features/images/types";

// type Props = {
//   image: ImageItem;
//   onPrimary: () => void;
//   onDelete: () => void;
// };

// export default function ImageItemCard({
//   image,
//   onPrimary,
//   onDelete,
// }: Props) {
//   return (
//     <div style={card}>
//       <img src={image.image_url} style={img} />

//       <div style={actions}>
//         {image.is_primary ? (
//           <strong>Thumbnail</strong>
//         ) : (
//           <button onClick={onPrimary}>Set Thumbnail</button>
//         )}

//         <button onClick={onDelete} style={{ color: "red" }}>
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// }

// const card: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 10,
//   padding: 10,
//   display: "flex",
//   gap: 12,
// };

// const img: React.CSSProperties = {
//   width: 120,
//   height: 120,
//   objectFit: "cover",
//   borderRadius: 8,
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 6,
// };


//////////

import type { ProductImageUI } from "@/features/images/types";

type Props = {
  image: ProductImageUI;
  onPrimary: () => void;
  onDelete: () => void;
};

export default function ImageItem({ image, onPrimary, onDelete }: Props) {
  return (
    <div style={{ border: "1px solid #e5e7eb", padding: 10, borderRadius: 10 }}>
      <img
        src={image.image_url}
        style={{ width: 120, height: 120, objectFit: "cover" }}
      />

      <div>
        {image.is_primary ? (
          <strong>Thumbnail</strong>
        ) : (
          <button onClick={onPrimary}>Set Thumbnail</button>
        )}
        <button onClick={onDelete} style={{ marginLeft: 8, color: "red" }}>
          Delete
        </button>
      </div>
    </div>
  );
}



// const card: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 10,
//   padding: 10,
//   display: "flex",
//   gap: 12,
// };

// const img: React.CSSProperties = {
//   width: 120,
//   height: 120,
//   objectFit: "cover",
//   borderRadius: 8,
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 6,
// };
