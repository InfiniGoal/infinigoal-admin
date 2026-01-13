// import ImageItemCard from "./ImageItem";
// import type { ImageItem } from "@/features/images/types";

// type Props = {
//   images: ImageItem[];
//   onChange: (images: ImageItem[]) => void;
// };

// export default function ImageList({ images, onChange }: Props) {
//   const setPrimary = (id: string) => {
//     onChange(
//       images.map((img) => ({
//         ...img,
//         is_primary: img.id === id,
//       }))
//     );
//   };

//   const remove = (id: string) => {
//     onChange(images.filter((img) => img.id !== id));
//   };

//   return (
//     <div style={{ display: "grid", gap: 10 }}>
//       {images.map((img) => (
//         <ImageItemCard
//           key={img.id}
//           image={img}
//           onPrimary={() => setPrimary(img.id)}
//           onDelete={() => remove(img.id)}
//         />
//       ))}
//     </div>
//   );
// }



///////////////// worked before basic

import ImageItem from "./ImageItem";
import type { ProductImageUI } from "@/features/images/types";

type Props = {
  images: ProductImageUI[];
  onChange: (images: ProductImageUI[]) => void;
};

export default function ImageList({ images, onChange }: Props) {
  const setPrimary = (id: string) => {
    onChange(
      images.map(img => ({
        ...img,
        is_primary: img.id === id,
      }))
    );
  };

  const remove = (id: string) => {
    onChange(images.filter(img => img.id !== id));
  };

  return (
    <div style={{ display: "grid", gap: 10 }}>
      {images.map(img => (
        <ImageItem
          key={img.id}
          image={img}
          onPrimary={() => setPrimary(img.id)}
          onDelete={() => remove(img.id)}
        />
      ))}
    </div>
  );
}
