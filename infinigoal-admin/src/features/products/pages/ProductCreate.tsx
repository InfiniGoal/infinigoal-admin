// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";

// export default function ProductCreate() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<ProductFormValues>({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       name: "",
//       slug: "",
//       description: "",
//       main_category: "",
//       price: 1,
//       stock: 0,
//       is_active: true,
//     },
//     mode: "onSubmit",
//   });

//   const onSubmit = (values: ProductFormValues) => {
//     // For this layer: only log
//     console.log("✅ Product form values:", values);
//     alert("Form submit successful. Check console.");
//   };

//   return (
//     <div style={{ maxWidth: 560 }}>
//       <h1>Create Product</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <Field label="Name" error={errors.name?.message}>
//           <input {...register("name")} placeholder="Turmeric Powder" />
//         </Field>

//         <Field label="Slug" error={errors.slug?.message}>
//           <input {...register("slug")} placeholder="turmeric-powder" />
//         </Field>

//         <Field label="Description" error={errors.description?.message}>
//           <textarea {...register("description")} placeholder="Product description" />
//         </Field>

//         <Field label="Category" error={errors.main_category?.message}>
//           <input {...register("main_category")} placeholder="Spices" />
//         </Field>

//         <Field label="Price" error={errors.price?.message}>
//           <input type="number" {...register("price", { valueAsNumber: true })} />
//         </Field>

//         <Field label="Stock" error={errors.stock?.message}>
//           <input type="number" {...register("stock", { valueAsNumber: true })} />
//         </Field>

//         <label style={{ display: "flex", gap: 8, marginBottom: 16 }}>
//           <input type="checkbox" {...register("is_active")} />
//           Active
//         </label>

//         <button type="submit">Save Product</button>
//       </form>
//     </div>
//   );
// }

// function Field({
//   label,
//   error,
//   children,
// }: {
//   label: string;
//   error?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={{ marginBottom: 14 }}>
//       <div style={{ fontWeight: 600 }}>{label}</div>
//       {children}
//       {error && <div style={{ color: "red" }}>{error}</div>}
//     </div>
//   );
// }



//////////////

// import { useState } from "react";
// import ProductForm from "../components/ProductForm";
// import VariantsManager from "../components/VariantsManager";
// import type { ProductFormValues, VariantFormValues } from "../schema";

// export default function ProductCreate() {
//   const [variants, setVariants] = useState<VariantFormValues[]>([]);

//   const submitProduct = (product: ProductFormValues) => {
//     console.log("PRODUCT:", product);
//     console.log("VARIANTS:", variants);
//     alert("Product + Variants logged. Ready for DB later.");
//   };

//   return (
//     <div style={{ maxWidth: 820 }}>
//       <h1>Create Product</h1>

//       <ProductForm
//         onSubmit={submitProduct}
//         submitLabel="Save Product"
//       />

//       <VariantsManager
//         variants={variants}
//         onChange={setVariants}
//       />
//     </div>
//   );
// }


///////// above code worked for basic


// import { useState } from "react";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// export default function ProductCreate() {
//   /* ================= AUTHORITATIVE UI STATE ================= */

//   const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);

//   /* ================= SUBMIT ================= */

//   const submit = (product: ProductFormValues) => {
//     console.log("✅ PRODUCT:", product);
//     console.log("🖼 PRODUCT IMAGES:", productImages);
//     console.log("🧩 VARIANTS (UI MODEL):", variants);

//     alert("UI validated. Ready for Supabase save.");
//   };

//   return (
//     <div style={page}>
//       <h1>Create Product</h1>

//       <ProductForm onSubmit={submit} />

//       <ProductImagesManager
//         images={productImages}
//         onChange={setProductImages}
//       />

//       <VariantsManager
//         variants={variants}
//         onChange={setVariants}
//       />
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const page: React.CSSProperties = {
//   maxWidth: 1000,
//   margin: "0 auto",
//   paddingBottom: 80,
// };



/////////////



// import { useState } from "react";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// export default function ProductCreate() {
//   /* ================= AUTHORITATIVE UI STATE ================= */

//   const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);

//   /* ================= SUBMIT ================= */

//   const submit = (product: ProductFormValues) => {
//     console.log("✅ PRODUCT:", product);
//     console.log("🖼 PRODUCT IMAGES:", productImages);
//     console.log("🧩 VARIANTS (UI MODEL):", variants);

//     alert("UI validated. Ready for Supabase save.");
//   };

//   return (
//     <div style={page}>
//       <h1>Create Product</h1>

//       <ProductForm onSubmit={submit} />

//       <ProductImagesManager images={productImages} onChange={setProductImages} />

//       <VariantsManager variants={variants} onChange={setVariants} />
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const page: React.CSSProperties = {
//   maxWidth: 1000,
//   margin: "0 auto",
//   paddingBottom: 80,
// };





////////////// ******* above code worked before v3 app created and admin page integrations




// import { useState } from "react";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";
// import { uploadImage } from "@/lib/supabaseStorage";
// import { blobUrlToFile } from "@/lib/blobToFile";

// export default function ProductCreate() {
//   /* ================= AUTHORITATIVE UI STATE ================= */

//   const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [saving, setSaving] = useState(false);

//   /* ================= SUBMIT ================= */

//   const submit = async (product: ProductFormValues) => {
//     if (saving) return;
//     setSaving(true);

//     try {
//       /* ======================================================
//          1. CREATE PRODUCT
//       ====================================================== */

//       const { data: productRow, error: productError } = await supabase
//         .from("products")
//         .insert(product)
//         .select()
//         .single();

//       if (productError || !productRow) {
//         throw productError ?? new Error("Product creation failed");
//       }

//       const productId = productRow.id;

//       /* ======================================================
//          2. PRODUCT IMAGES
//       ====================================================== */

//       if (productImages.length > 0) {
//         const productImageRows = [];

//         for (const img of productImages) {
//           const file = await blobUrlToFile(
//             img.image_url,
//             `product-${productId}-${img.position}.jpg`
//           );

//           const publicUrl = await uploadImage({
//             bucket: "product-images-v3",
//             path: `${productId}/${file.name}`,
//             file,
//           });

//           productImageRows.push({
//             product_id: productId,
//             image_url: publicUrl,
//             is_primary: img.is_primary,
//             position: img.position,
//           });
//         }

//         const { error } = await supabase
//           .from("product_images")
//           .insert(productImageRows);

//         if (error) throw error;
//       }

//       /* ======================================================
//          3. VARIANTS + VARIANT IMAGES
//       ====================================================== */

//       for (const variant of variants) {
//         const { data: variantRow, error: variantError } = await supabase
//           .from("product_variants")
//           .insert({
//             product_id: productId,
//             variant_name: variant.variant_name,
//             short_label: variant.short_label,
//             price: variant.price,
//             mrp: variant.mrp,
//             stock: variant.stock,
//             is_default: variant.is_default,
//             attributes: variant.attributes,
//           })
//           .select()
//           .single();

//         if (variantError || !variantRow) {
//           throw variantError ?? new Error("Variant insert failed");
//         }

//         if (variant.images.length > 0) {
//           const variantImageRows = [];

//           for (const img of variant.images) {
//             const file = await blobUrlToFile(
//               img.image_url,
//               `variant-${variantRow.id}-${img.position}.jpg`
//             );

//             const publicUrl = await uploadImage({
//               bucket: "variant-images-v3",
//               path: `${variantRow.id}/${file.name}`,
//               file,
//             });

//             variantImageRows.push({
//               variant_id: variantRow.id,
//               image_url: publicUrl,
//               is_primary: img.is_primary,
//               position: img.position,
//             });
//           }

//           const { error } = await supabase
//             .from("product_variant_images")
//             .insert(variantImageRows);

//           if (error) throw error;
//         }
//       }

//       alert("✅ Product published successfully");
//       setProductImages([]);
//       setVariants([]);
//     } catch (err) {
//       console.error("❌ PRODUCT SAVE FAILED:", err);
//       alert("Product save failed. Check console.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   /* ================= UI ================= */

//   return (
//     <div style={page}>
//       <h1>Create Product</h1>

//       <ProductForm onSubmit={submit} />

//       <ProductImagesManager
//         images={productImages}
//         onChange={setProductImages}
//       />

//       <VariantsManager variants={variants} onChange={setVariants} />
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const page: React.CSSProperties = {
//   maxWidth: 1000,
//   margin: "0 auto",
//   paddingBottom: 80,
// };




///////////////////////////////////////// ************* code is worked before the v3 app created and admin page integrations


// import { useState } from "react";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";
// import { uploadImage } from "@/lib/supabaseStorage";
// import { blobUrlToFile } from "@/lib/blobToFile";

// export default function ProductCreate() {
//   /* ================= AUTHORITATIVE UI STATE ================= */

//   const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [saving, setSaving] = useState(false);

//   /* ================= SUBMIT ================= */

//   const submit = async (product: ProductFormValues) => {
//     if (saving) return;
//     setSaving(true);

//     try {
//       /* ======================================================
//          1. UPLOAD PRODUCT IMAGES FIRST (REQUIRED FOR THUMBNAIL)
//       ====================================================== */

//       if (productImages.length === 0) {
//         throw new Error("At least one product image is required");
//       }

//       const uploadedProductImages: {
//         image_url: string;
//         is_primary: boolean;
//         position: number;
//       }[] = [];

//       for (const img of productImages) {
//         const file = await blobUrlToFile(
//           img.image_url,
//           `product-temp-${Date.now()}-${img.position}.jpg`
//         );

//         const publicUrl = await uploadImage({
//           bucket: "product-images-v3",
//           path: `temp/${file.name}`,
//           file,
//         });

//         uploadedProductImages.push({
//           image_url: publicUrl,
//           is_primary: img.is_primary,
//           position: img.position,
//         });
//       }

//       const thumbnail =
//         uploadedProductImages.find(i => i.is_primary)?.image_url ||
//         uploadedProductImages[0].image_url;

//       /* ======================================================
//          2. CREATE PRODUCT (WITH THUMBNAIL)
//       ====================================================== */

//       const { data: productRow, error: productError } = await supabase
//         .from("products")
//         .insert({
//           ...product,
//           thumbnail,
//         })
//         .select()
//         .single();

//       if (productError || !productRow) {
//         throw productError ?? new Error("Product creation failed");
//       }

//       const productId = productRow.id;

//       /* ======================================================
//          3. SAVE PRODUCT IMAGES (WITH PRODUCT ID)
//       ====================================================== */

//       const productImageRows = uploadedProductImages.map(img => ({
//         product_id: productId,
//         image_url: img.image_url,
//         is_primary: img.is_primary,
//         position: img.position,
//       }));

//       const { error: productImagesError } = await supabase
//         .from("product_images")
//         .insert(productImageRows);

//       if (productImagesError) throw productImagesError;

//       /* ======================================================
//          4. VARIANTS + VARIANT IMAGES (UNCHANGED)
//       ====================================================== */

//       for (const variant of variants) {
//         const { data: variantRow, error: variantError } = await supabase
//           .from("product_variants")
//           .insert({
//             product_id: productId,
//             variant_name: variant.variant_name,
//             short_label: variant.short_label,
//             price: variant.price,
//             mrp: variant.mrp,
//             stock: variant.stock,
//             is_default: variant.is_default,
//             attributes: variant.attributes,
//           })
//           .select()
//           .single();

//         if (variantError || !variantRow) {
//           throw variantError ?? new Error("Variant insert failed");
//         }

//         if (variant.images.length > 0) {
//           const variantImageRows = [];

//           for (const img of variant.images) {
//             const file = await blobUrlToFile(
//               img.image_url,
//               `variant-${variantRow.id}-${img.position}.jpg`
//             );

//             const publicUrl = await uploadImage({
//               bucket: "variant-images-v3",
//               path: `${variantRow.id}/${file.name}`,
//               file,
//             });

//             variantImageRows.push({
//               variant_id: variantRow.id,
//               image_url: publicUrl,
//               is_primary: img.is_primary,
//               position: img.position,
//             });
//           }

//           const { error } = await supabase
//             .from("product_variant_images")
//             .insert(variantImageRows);

//           if (error) throw error;
//         }
//       }

//       alert("✅ Product published successfully");
//       setProductImages([]);
//       setVariants([]);
//     } catch (err) {
//       console.error("❌ PRODUCT SAVE FAILED:", err);
//       alert("Product save failed. Check console.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   /* ================= UI ================= */

//   return (
//     <div style={page}>
//       <h1>Create Product</h1>

//       <ProductForm onSubmit={submit} />

//       <ProductImagesManager
//         images={productImages}
//         onChange={setProductImages}
//       />

//       <VariantsManager variants={variants} onChange={setVariants} />
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const page: React.CSSProperties = {
//   maxWidth: 1000,
//   margin: "0 auto",
//   paddingBottom: 80,
// };





//////////////////////////////// ************** above code worked before the upgrade the UI designs




// import { useState } from "react";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";
// import { uploadImage } from "@/lib/supabaseStorage";
// import { blobUrlToFile } from "@/lib/blobToFile";

// export default function ProductCreate() {
//   const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [saving, setSaving] = useState(false);

//   const submit = async (product: ProductFormValues) => {
//     if (saving) return;
//     setSaving(true);

//     try {
//       if (productImages.length === 0) {
//         throw new Error("At least one product image is required");
//       }

//       const uploadedProductImages = [];

//       for (const img of productImages) {
//         const file = await blobUrlToFile(
//           img.image_url,
//           `product-temp-${Date.now()}-${img.position}.jpg`
//         );

//         const publicUrl = await uploadImage({
//           bucket: "product-images-v3",
//           path: `temp/${file.name}`,
//           file,
//         });

//         uploadedProductImages.push({
//           image_url: publicUrl,
//           is_primary: img.is_primary,
//           position: img.position,
//         });
//       }

//       const thumbnail =
//         uploadedProductImages.find(i => i.is_primary)?.image_url ||
//         uploadedProductImages[0].image_url;

//       const { data: productRow, error: productError } = await supabase
//         .from("products")
//         .insert({ ...product, thumbnail })
//         .select()
//         .single();

//       if (productError || !productRow) throw productError;

//       const productId = productRow.id;

//       await supabase.from("product_images").insert(
//         uploadedProductImages.map(img => ({
//           product_id: productId,
//           image_url: img.image_url,
//           is_primary: img.is_primary,
//           position: img.position,
//         }))
//       );

//       for (const variant of variants) {
//         const { data: variantRow } = await supabase
//           .from("product_variants")
//           .insert({
//             product_id: productId,
//             variant_name: variant.variant_name,
//             short_label: variant.short_label,
//             price: variant.price,
//             mrp: variant.mrp,
//             stock: variant.stock,
//             is_default: variant.is_default,
//             attributes: variant.attributes,
//           })
//           .select()
//           .single();

//         if (variant.images.length > 0) {
//           const rows = [];

//           for (const img of variant.images) {
//             const file = await blobUrlToFile(
//               img.image_url,
//               `variant-${variantRow.id}-${img.position}.jpg`
//             );

//             const publicUrl = await uploadImage({
//               bucket: "variant-images-v3",
//               path: `${variantRow.id}/${file.name}`,
//               file,
//             });

//             rows.push({
//               variant_id: variantRow.id,
//               image_url: publicUrl,
//               is_primary: img.is_primary,
//               position: img.position,
//             });
//           }

//           await supabase.from("product_variant_images").insert(rows);
//         }
//       }

//       alert("✅ Product published successfully");
//       setProductImages([]);
//       setVariants([]);
//     } catch (err) {
//       console.error(err);
//       alert("Product save failed. Check console.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   return (
//     <div style={page}>
//       <h1 style={heading}>Create New Product</h1>

//       <Card>
//         <SectionTitle title="Product Information" subtitle="Basic details shown to customers" />
//         <ProductForm onSubmit={submit} />
//       </Card>

//       <Card>
//         <SectionTitle title="Product Images" subtitle="Primary image is used as thumbnail" />
//         <ProductImagesManager images={productImages} onChange={setProductImages} />
//       </Card>

//       <Card>
//         <SectionTitle title="Variants & Pricing" subtitle="Create multiple weight / pack options" />
//         <VariantsManager variants={variants} onChange={setVariants} />
//       </Card>
//     </div>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const page: React.CSSProperties = {
//   background: "#F7F8FA",
//   padding: 20,
//   maxWidth: 1400,
//   margin: "0 auto",
//   paddingBottom: 120,
// };

// const heading: React.CSSProperties = {
//   fontSize: 26,
//   fontWeight: 800,
//   marginBottom: 24,
//   color: "#1A1A1A",
// };

// function Card({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       style={{
//         background: "#FFFFFF",
//         padding: 22,
//         borderRadius: 18,
//         marginBottom: 24,
//         boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
//   return (
//     <div style={{ marginBottom: 18 }}>
//       <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
//       <div style={{ fontSize: 13, color: "#6C7A89", marginTop: 4 }}>{subtitle}</div>
//     </div>
//   );
// }




///////////// above code worked before the UI polish v1

// import { useState } from "react";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";
// import { saveImages } from "../services/saveImages";

// export default function ProductCreate() {
//   const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [saving, setSaving] = useState(false);

//   /* ======================================================
//      SUBMIT
//   ====================================================== */
//   const submit = async (product: ProductFormValues) => {
//     if (saving) return;
//     setSaving(true);

//     try {
//       if (productImages.length === 0) {
//         throw new Error("At least one product image is required");
//       }

//       /* ---------- 1. CREATE PRODUCT ---------- */
//       const { data: productRow, error: productError } = await supabase
//         .from("products")
//         .insert({
//           ...product,
//           thumbnail: "", // will be updated later if needed
//         })
//         .select()
//         .single();

//       if (productError || !productRow) {
//         throw productError;
//       }

//       const productId = productRow.id;

//       /* ---------- 2. CREATE VARIANTS ---------- */
//       const createdVariants: VariantUI[] = [];

//       for (const variant of variants) {
//         const { data: variantRow, error } = await supabase
//           .from("product_variants")
//           .insert({
//             product_id: productId,
//             variant_name: variant.variant_name,
//             short_label: variant.short_label,
//             price: variant.price,
//             mrp: variant.mrp,
//             stock: variant.stock,
//             is_default: variant.is_default,
//             attributes: variant.attributes,
//           })
//           .select()
//           .single();

//         if (error || !variantRow) {
//           throw error;
//         }

//         createdVariants.push({
//           ...variant,
//           id: variantRow.id,
//         });
//       }

//       /* ---------- 3. SAVE ALL IMAGES (UNIFIED) ---------- */
//       await saveImages({
//         productId,
//         productImages,
//         variants: createdVariants,
//       });

//       /* ---------- DONE ---------- */
//       alert("✅ Product published successfully");

//       setProductImages([]);
//       setVariants([]);
//     } catch (err) {
//       console.error(err);
//       alert("Product save failed. Check console.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   /* ======================================================
//      UI
//   ====================================================== */
//   return (
//     <div style={page}>
//       <h1 style={heading}>Create New Product</h1>

//       <Card>
//         <SectionTitle
//           title="Product Information"
//           subtitle="Basic details shown to customers"
//         />
//         <ProductForm onSubmit={submit} />
//       </Card>

//       <Card>
//         <SectionTitle
//           title="Product Images"
//           subtitle="Primary image is used as thumbnail"
//         />
//         <ProductImagesManager
//           images={productImages}
//           onChange={setProductImages}
//         />
//       </Card>

//       <Card>
//         <SectionTitle
//           title="Variants & Pricing"
//           subtitle="Create multiple weight / pack options"
//         />
//         <VariantsManager
//           variants={variants}
//           onChange={setVariants}
//         />
//       </Card>
//     </div>
//   );
// }

// /* ======================================================
//    STYLES
// ====================================================== */

// const page: React.CSSProperties = {
//   background: "#F7F8FA",
//   padding: 20,
//   maxWidth: 1400,
//   margin: "0 auto",
//   paddingBottom: 120,
// };

// const heading: React.CSSProperties = {
//   fontSize: 26,
//   fontWeight: 800,
//   marginBottom: 24,
//   color: "#1A1A1A",
// };

// function Card({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       style={{
//         background: "#FFFFFF",
//         padding: 22,
//         borderRadius: 18,
//         marginBottom: 24,
//         boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// function SectionTitle({
//   title,
//   subtitle,
// }: {
//   title: string;
//   subtitle: string;
// }) {
//   return (
//     <div style={{ marginBottom: 18 }}>
//       <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
//       <div
//         style={{
//           fontSize: 13,
//           color: "#6C7A89",
//           marginTop: 4,
//         }}
//       >
//         {subtitle}
//       </div>
//     </div>
//   );
// }





///////////////////////// ************* above code worked after the image upload issue below working for the alert for image at least one



import { useState } from "react";

import ProductForm from "../components/ProductForm";
import ProductImagesManager from "../images/ProductImagesManager";
import VariantsManager from "../components/VariantsManager";

import type { ProductFormValues, VariantUI } from "../schema";
import type { ProductImageUI } from "@/features/images/types";

import { supabase } from "@/lib/supabaseClient";
import { saveImages } from "../services/saveImages";

export default function ProductCreate() {
  const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
  const [variants, setVariants] = useState<VariantUI[]>([]);
  const [saving, setSaving] = useState(false);

  /* ======================================================
     SUBMIT
  ====================================================== */
  const submit = async (product: ProductFormValues) => {
    if (saving) return;
    setSaving(true);

    try {
      if (productImages.length === 0) {
        // throw new Error("At least one product image is required");

        alert("Please add at least one product image");
        return;
      }

      /* ---------- 1. CREATE PRODUCT ---------- */
      const { data: productRow, error: productError } = await supabase
        .from("products")
        .insert({
          ...product,
          thumbnail: "", // will be updated later if needed
        })
        .select()
        .single();

      if (productError || !productRow) {
        throw productError;
      }

      const productId = productRow.id;

      /* ---------- 2. CREATE VARIANTS ---------- */
      const createdVariants: VariantUI[] = [];

      for (const variant of variants) {
        const { data: variantRow, error } = await supabase
          .from("product_variants")
          .insert({
            product_id: productId,
            variant_name: variant.variant_name,
            short_label: variant.short_label,
            price: variant.price,
            mrp: variant.mrp,
            stock: variant.stock,
            is_default: variant.is_default,
            attributes: variant.attributes,
          })
          .select()
          .single();

        if (error || !variantRow) {
          throw error;
        }

        createdVariants.push({
          ...variant,
          id: variantRow.id,
        });
      }

      /* ---------- 3. SAVE ALL IMAGES (UNIFIED) ---------- */
      await saveImages({
        productId,
        productImages,
        variants: createdVariants,
      });

      /* ---------- DONE ---------- */
      alert("✅ Product published successfully");

      setProductImages([]);
      setVariants([]);
    } catch (err) {
      console.error(err);
      alert("Product save failed. Check console.");
    } finally {
      setSaving(false);
    }
  };

  /* ======================================================
     UI
  ====================================================== */
  return (
    <div style={page}>
      <h1 style={heading}>Create New Product</h1>

      <Card>
        <SectionTitle
          title="Product Information"
          subtitle="Basic details shown to customers"
        />
        <ProductForm onSubmit={submit} />
      </Card>

      <Card>
        <SectionTitle
          title="Product Images"
          subtitle="Primary image is used as thumbnail"
        />
        <ProductImagesManager
          images={productImages}
          onChange={setProductImages}
        />
      </Card>

      <Card>
        <SectionTitle
          title="Variants & Pricing"
          subtitle="Create multiple weight / pack options"
        />
        <VariantsManager
          variants={variants}
          onChange={setVariants}
        />
      </Card>
    </div>
  );
}

/* ======================================================
   STYLES
====================================================== */

const page: React.CSSProperties = {
  background: "#F7F8FA",
  padding: 20,
  maxWidth: 1400,
  margin: "0 auto",
  paddingBottom: 120,
};

const heading: React.CSSProperties = {
  fontSize: 26,
  fontWeight: 800,
  marginBottom: 24,
  color: "#1A1A1A",
};

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#FFFFFF",
        padding: 22,
        borderRadius: 18,
        marginBottom: 24,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 18, fontWeight: 800 }}>{title}</div>
      <div
        style={{
          fontSize: 13,
          color: "#6C7A89",
          marginTop: 4,
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}
