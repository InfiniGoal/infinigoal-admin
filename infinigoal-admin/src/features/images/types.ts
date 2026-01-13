// export type ProductImageUI = {
//   image_url: string;     // storage URL later
//   is_primary: boolean;
//   position: number;
//   variant_id?: string;
// };


// export type ImageItem = {
//   id: string;
//   image_url: string;
//   is_primary: boolean;
//   position: number;
// };

////////////////////
// export type ProductImageUI = {
//   id: string;            // UI-only
//   image_url: string;     // blob now, storage URL later
//   is_primary: boolean;
//   position: number;
//   variant_id?: string;   // undefined = product image
// };



/////////////


export type ProductImageUI = {
  id: string;            // UI-only
  image_url: string;     // preview (blob) now, public URL later
  is_primary: boolean;
  position: number;
  variant_id?: string;   // undefined = product image

  // ✅ NEW: keep selected file so we can upload to Supabase
  file?: File;
};
