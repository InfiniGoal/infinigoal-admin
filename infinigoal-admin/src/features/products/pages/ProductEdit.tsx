// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";

// export default function ProductEdit() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValues] = useState<ProductFormValues | null>(null);
//   const [productImages, setProductImages] = useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     loadProduct(id);
//   }, [id]);

//   async function loadProduct(productId: string) {
//     setLoading(true);

//     const { data: product, error } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", productId)
//       .single();

//     if (error || !product) {
//       alert("Product not found");
//       navigate("/products");
//       return;
//     }

//     const { data: images } = await supabase
//       .from("product_images")
//       .select("*")
//       .eq("product_id", productId)
//       .order("position");

//     const { data: variantRows } = await supabase
//       .from("product_variants")
//       .select("*")
//       .eq("product_id", productId);

//     setInitialValues(product);
//     setProductImages(images ?? []);
//     setVariants(
//       (variantRows ?? []).map((v) => ({
//         ...v,
//         images: [],
//       }))
//     );

//     setLoading(false);
//   }

//   async function submit(values: ProductFormValues) {
//     if (!id || saving) return;
//     setSaving(true);

//     try {
//       const { error } = await supabase
//         .from("products")
//         .update(values)
//         .eq("id", id);

//       if (error) throw error;

//       alert("✅ Product updated successfully");
//       navigate("/products");
//     } catch (err) {
//       console.error(err);
//       alert("Update failed");
//     } finally {
//       setSaving(false);
//     }
//   }

//   if (loading || !initialValues) {
//     return <div>Loading product...</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Product</h1>

//       <ProductForm
//         initialValues={initialValues}
//         onSubmit={submit}
//         submitLabel="Update Product"
//       />

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



//////////// above code worked before the edit with variant images fix





// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";

// export default function ProductEdit() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValues] =
//     useState<ProductFormValues | null>(null);
//   const [productImages, setProductImages] =
//     useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     loadProduct(id);
//   }, [id]);

//   /* ======================================================
//      LOAD PRODUCT (SAFE, STEP-BY-STEP)
//   ====================================================== */
//   async function loadProduct(productId: string) {
//     setLoading(true);

//     /* ---------- 1. PRODUCT ---------- */
//     const { data: product } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", productId)
//       .single();

//     if (!product) {
//       alert("Product not found");
//       navigate("/products");
//       return;
//     }

//     /* ---------- 2. PRODUCT IMAGES ---------- */
//     const { data: images } = await supabase
//       .from("product_images")
//       .select("*")
//       .eq("product_id", productId)
//       .order("position");

//     /* ---------- 3. VARIANTS ---------- */
//     const { data: variantRows } = await supabase
//       .from("product_variants")
//       .select("*")
//       .eq("product_id", productId);

//     /* ---------- 4. VARIANT IMAGES ---------- */
//     const variantIds = (variantRows ?? []).map(v => v.id);

//     let variantImages: any[] = [];
//     if (variantIds.length > 0) {
//       const { data } = await supabase
//         .from("product_variant_images")
//         .select("*")
//         .in("variant_id", variantIds);

//       variantImages = data ?? [];
//     }

//     /* ---------- 5. HYDRATE UI ---------- */
//     setInitialValues(product);
//     setProductImages(images ?? []);

//     const hydratedVariants: VariantUI[] = (variantRows ?? []).map(v => ({
//       ...v,
//       images: variantImages.filter(img => img.variant_id === v.id),
//     }));

//     setVariants(hydratedVariants);
//     setLoading(false);
//   }

//   /* ======================================================
//      UPDATE PRODUCT (DETAILS ONLY)
//   ====================================================== */
//   async function submit(values: ProductFormValues) {
//     if (!id || saving) return;
//     setSaving(true);

//     try {
//       const { error } = await supabase
//         .from("products")
//         .update(values)
//         .eq("id", id);

//       if (error) throw error;

//       alert("✅ Product updated successfully");
//       navigate("/products");
//     } catch {
//       alert("Update failed. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   if (loading || !initialValues) {
//     return <div>Loading product...</div>;
//   }

//   /* ======================================================
//      UI
//   ====================================================== */
//   return (
//     <div>
//       <h1>Edit Product</h1>

//       <ProductForm
//         initialValues={initialValues}
//         onSubmit={submit}
//         submitLabel="Update Product"
//       />

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




/////////////////// above code worked befoere the delete

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";

// export default function ProductEdit() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValues] =
//     useState<ProductFormValues | null>(null);
//   const [productImages, setProductImages] =
//     useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     loadProduct(id);
//   }, [id]);

//   /* ======================================================
//      LOAD PRODUCT (SAFE, STEP-BY-STEP)
//   ====================================================== */
//   async function loadProduct(productId: string) {
//     setLoading(true);

//     /* ---------- 1. PRODUCT ---------- */
//     const { data: product } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", productId)
//       .single();

//     if (!product) {
//       alert("Product not found");
//       navigate("/products");
//       return;
//     }

//     /* ---------- 2. PRODUCT IMAGES ---------- */
//     const { data: images } = await supabase
//       .from("product_images")
//       .select("*")
//       .eq("product_id", productId)
//       .order("position");

//     /* ---------- 3. VARIANTS ---------- */
//     const { data: variantRows } = await supabase
//       .from("product_variants")
//       .select("*")
//       .eq("product_id", productId);

//     /* ---------- 4. VARIANT IMAGES ---------- */
//     const variantIds = (variantRows ?? []).map(v => v.id);

//     let variantImages: any[] = [];
//     if (variantIds.length > 0) {
//       const { data } = await supabase
//         .from("product_variant_images")
//         .select("*")
//         .in("variant_id", variantIds);

//       variantImages = data ?? [];
//     }

//     /* ---------- 5. HYDRATE UI ---------- */
//     setInitialValues(product);
//     setProductImages(images ?? []);

//     const hydratedVariants: VariantUI[] = (variantRows ?? []).map(v => ({
//       ...v,
//       images: variantImages.filter(img => img.variant_id === v.id),
//     }));

//     setVariants(hydratedVariants);
//     setLoading(false);
//   }

//   /* ======================================================
//      UPDATE PRODUCT (DETAILS ONLY)
//   ====================================================== */
//   async function submit(values: ProductFormValues) {
//     if (!id || saving) return;
//     setSaving(true);

//     try {
//       const { error } = await supabase
//         .from("products")
//         .update(values)
//         .eq("id", id);

//       if (error) throw error;

//       alert("✅ Product updated successfully");
//       navigate("/products");
//     } catch {
//       alert("Update failed. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   /* ======================================================
//      DELETE PRODUCT (CASCADE SAFE)
//   ====================================================== */
//   async function deleteProduct() {
//     if (!id) return;

//     const ok = confirm(
//       "Are you sure?\n\nThis will permanently delete:\n• Product\n• All variants\n• All images\n\nThis action cannot be undone."
//     );

//     if (!ok) return;

//     await supabase
//       .from("products")
//       .delete()
//       .eq("id", id);

//     alert("🗑 Product deleted");
//     navigate("/products");
//   }

//   if (loading || !initialValues) {
//     return <div>Loading product...</div>;
//   }

//   /* ======================================================
//      UI
//   ====================================================== */
//   return (
//     <div>
//       <header style={header}>
//         <h1>Edit Product</h1>

//         <button style={btnDelete} onClick={deleteProduct}>
//           Delete Product
//         </button>
//       </header>

//       <ProductForm
//         initialValues={initialValues}
//         onSubmit={submit}
//         submitLabel="Update Product"
//       />

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

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 20,
// };

// const btnDelete: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#7f1d1d",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };




////////////////// above code worked before the unified images integration
//// above code wokrd i think ealeire





// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";

// export default function ProductEdit() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValues] =
//     useState<ProductFormValues | null>(null);
//   const [productImages, setProductImages] =
//     useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     loadProduct(id);
//   }, [id]);

//   /* ======================================================
//      LOAD PRODUCT (SAFE, STEP-BY-STEP)
//   ====================================================== */
//   async function loadProduct(productId: string) {
//     setLoading(true);

//     /* ---------- 1. PRODUCT ---------- */
//     const { data: product } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", productId)
//       .single();

//     if (!product) {
//       alert("Product not found");
//       navigate("/products");
//       return;
//     }

//     /* ---------- 2. PRODUCT IMAGES ---------- */
//     const { data: images } = await supabase
//       .from("product_images")
//       .select("*")
//       .eq("product_id", productId)
//       .order("position");

//     /* ---------- 3. VARIANTS ---------- */
//     const { data: variantRows } = await supabase
//       .from("product_variants")
//       .select("*")
//       .eq("product_id", productId);

//     /* ---------- 4. VARIANT IMAGES ---------- */
//     const variantIds = (variantRows ?? []).map(v => v.id);

//     let variantImages: any[] = [];
//     if (variantIds.length > 0) {
//       const { data } = await supabase
//         .from("product_variant_images")
//         .select("*")
//         .in("variant_id", variantIds);

//       variantImages = data ?? [];
//     }

//     /* ---------- 5. HYDRATE UI ---------- */
//     setInitialValues(product);
//     setProductImages(images ?? []);

//     const hydratedVariants: VariantUI[] = (variantRows ?? []).map(v => ({
//       ...v,
//       images: variantImages.filter(img => img.variant_id === v.id),
//     }));

//     setVariants(hydratedVariants);
//     setLoading(false);
//   }

//   /* ======================================================
//      UPDATE PRODUCT (DETAILS ONLY)
//   ====================================================== */
//   async function submit(values: ProductFormValues) {
//     if (!id || saving) return;
//     setSaving(true);

//     try {
//       const { error } = await supabase
//         .from("products")
//         .update(values)
//         .eq("id", id);

//       if (error) throw error;

//       alert("✅ Product updated successfully");
//       navigate("/products");
//     } catch {
//       alert("Update failed. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   /* ======================================================
//      DELETE PRODUCT (CASCADE SAFE)
//   ====================================================== */
//   async function deleteProduct() {
//     if (!id) return;

//     const ok = confirm(
//       "Are you sure?\n\nThis will permanently delete:\n• Product\n• All variants\n• All images\n\nThis action cannot be undone."
//     );

//     if (!ok) return;

//     await supabase
//       .from("products")
//       .delete()
//       .eq("id", id);

//     alert("🗑 Product deleted");
//     navigate("/products");
//   }

//   if (loading || !initialValues) {
//     return <div>Loading product...</div>;
//   }

//   /* ======================================================
//      UI
//   ====================================================== */
//   return (
//     <div>
//       <header style={header}>
//         <h1>Edit Product</h1>

//         <button style={btnDelete} onClick={deleteProduct}>
//           Delete Product
//         </button>
//       </header>

//       <ProductForm
//         initialValues={initialValues}
//         onSubmit={submit}
//         submitLabel="Update Product"
//       />

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

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 20,
// };

// const btnDelete: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#7f1d1d",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };



////////// above is doubt


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";

// export default function ProductEdit() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValues] =
//     useState<ProductFormValues | null>(null);
//   const [productImages, setProductImages] =
//     useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     loadProduct(id);
//   }, [id]);

//   /* ======================================================
//      LOAD PRODUCT
//   ====================================================== */
//   async function loadProduct(productId: string) {
//     setLoading(true);

//     const { data: product, error } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", productId)
//       .single();

//     if (error || !product) {
//       alert("Product not found");
//       navigate("/products");
//       return;
//     }

//     const { data: images } = await supabase
//       .from("product_images")
//       .select("*")
//       .eq("product_id", productId)
//       .order("position");

//     const { data: variantRows } = await supabase
//       .from("product_variants")
//       .select("*")
//       .eq("product_id", productId);

//     const variantIds = (variantRows ?? []).map(v => v.id);

//     let variantImages: any[] = [];
//     if (variantIds.length > 0) {
//       const { data } = await supabase
//         .from("product_variant_images")
//         .select("*")
//         .in("variant_id", variantIds);

//       variantImages = data ?? [];
//     }

//     setInitialValues(product);
//     setProductImages(images ?? []);

//     setVariants(
//       (variantRows ?? []).map(v => ({
//         ...v,
//         images: variantImages.filter(img => img.variant_id === v.id),
//       }))
//     );

//     setLoading(false);
//   }

//   /* ======================================================
//      UPDATE PRODUCT (FIXED)
//   ====================================================== */
//   async function submit(values: ProductFormValues) {
//     if (!id || saving) return;
//     setSaving(true);

//     try {
//       /** ✅ SANITIZED PAYLOAD (CRITICAL FIX) */
//       const payload = {
//         name: values.name,
//         slug: values.slug?.trim() || null,
//         short_description: values.short_description || null,
//         description: values.description || null,
//         brand: values.brand || null,
//         main_category: values.main_category || null,
//         sub_category: values.sub_category || null,
//         mrp: values.mrp ?? null,
//         price: values.price,
//         stock: values.stock,
//         is_active: Boolean(values.is_active),
//         attributes_schema: values.attributes_schema ?? null,
//       };

//       const { error } = await supabase
//         .from("products")
//         .update(payload)
//         .eq("id", id);

//       if (error) {
//         console.error("UPDATE ERROR:", error);
//         throw error;
//       }

//       alert("✅ Product updated successfully");
//       navigate("/products");
//     } catch (err) {
//       console.error("UPDATE FAILED:", err);
//       alert("Update failed. Check console.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   /* ======================================================
//      DELETE PRODUCT
//   ====================================================== */
//   async function deleteProduct() {
//     if (!id) return;

//     const ok = confirm(
//       "Are you sure?\n\nThis will permanently delete:\n• Product\n• All variants\n• All images\n\nThis action cannot be undone."
//     );

//     if (!ok) return;

//     await supabase
//       .from("products")
//       .delete()
//       .eq("id", id);

//     alert("🗑 Product deleted");
//     navigate("/products");
//   }

//   if (loading || !initialValues) {
//     return <div>Loading product...</div>;
//   }

//   /* ======================================================
//      UI
//   ====================================================== */
//   return (
//     <div>
//       <header style={header}>
//         <h1>Edit Product</h1>

//         <button style={btnDelete} onClick={deleteProduct}>
//           Delete Product
//         </button>
//       </header>

//       <ProductForm
//         initialValues={initialValues}
//         onSubmit={submit}
//         submitLabel="Update Product"
//       />

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

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 20,
// };

// const btnDelete: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#7f1d1d",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };




///////////// Bring back before the duplicate 


// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";

// export default function ProductEdit() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValues] =
//     useState<ProductFormValues | null>(null);
//   const [productImages, setProductImages] =
//     useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   useEffect(() => {
//     if (!id) return;
//     loadProduct(id);
//   }, [id]);

//   /* ======================================================
//      LOAD PRODUCT (SAFE, STEP-BY-STEP)
//   ====================================================== */
//   async function loadProduct(productId: string) {
//     setLoading(true);

//     /* ---------- 1. PRODUCT ---------- */
//     const { data: product } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", productId)
//       .single();

//     if (!product) {
//       alert("Product not found");
//       navigate("/products");
//       return;
//     }

//     /* ---------- 2. PRODUCT IMAGES ---------- */
//     const { data: images } = await supabase
//       .from("product_images")
//       .select("*")
//       .eq("product_id", productId)
//       .order("position");

//     /* ---------- 3. VARIANTS ---------- */
//     const { data: variantRows } = await supabase
//       .from("product_variants")
//       .select("*")
//       .eq("product_id", productId);

//     /* ---------- 4. VARIANT IMAGES ---------- */
//     const variantIds = (variantRows ?? []).map(v => v.id);

//     let variantImages: any[] = [];
//     if (variantIds.length > 0) {
//       const { data } = await supabase
//         .from("product_variant_images")
//         .select("*")
//         .in("variant_id", variantIds);

//       variantImages = data ?? [];
//     }

//     /* ---------- 5. HYDRATE UI ---------- */
//     setInitialValues(product);
//     setProductImages(images ?? []);

//     const hydratedVariants: VariantUI[] = (variantRows ?? []).map(v => ({
//       ...v,
//       images: variantImages.filter(img => img.variant_id === v.id),
//     }));

//     setVariants(hydratedVariants);
//     setLoading(false);
//   }

//   /* ======================================================
//      UPDATE PRODUCT (DETAILS ONLY)
//   ====================================================== */






// //   async function submit(values: ProductFormValues) {
// //     if (!id || saving) return;
// //     setSaving(true);

// //     try {
// //       const { error } = await supabase
// //         .from("products")
// //         .update(values)
// //         .eq("id", id);

// //       if (error) throw error;

// //       alert("✅ Product updated successfully");
// //       navigate("/products");
// //     } catch {
// //       alert("Update failed. Please try again.");
// //     } finally {
// //       setSaving(false);
// //     }
// //   }





// ///////*** above set code before the duplicate set remove update correction */


// async function submit(values: ProductFormValues) {
//   if (!id || saving) return;
//   setSaving(true);

//   console.log("🟡 EDIT SUBMIT VALUES:", values);

//   try {
//     const { error } = await supabase
//       .from("products")
//       .update(values)
//       .eq("id", id);

//     if (error) {
//       console.error("🔴 UPDATE ERROR:", error);
//       throw error;
//     }

//     alert("✅ Product updated successfully");
//     navigate("/products");
//   } catch (err) {
//     alert("Update failed. Check console.");
//   } finally {
//     setSaving(false);
//   }
// }





//   /* ======================================================
//      DELETE PRODUCT (CASCADE SAFE)
//   ====================================================== */
//   async function deleteProduct() {
//     if (!id) return;

//     const ok = confirm(
//       "Are you sure?\n\nThis will permanently delete:\n• Product\n• All variants\n• All images\n\nThis action cannot be undone."
//     );

//     if (!ok) return;

//     await supabase
//       .from("products")
//       .delete()
//       .eq("id", id);

//     alert("🗑 Product deleted");
//     navigate("/products");
//   }

//   if (loading || !initialValues) {
//     return <div>Loading product...</div>;
//   }

//   /* ======================================================
//      UI
//   ====================================================== */
//   return (
//     <div>
//       <header style={header}>
//         <h1>Edit Product</h1>

//         <button style={btnDelete} onClick={deleteProduct}>
//           Delete Product
//         </button>
//       </header>

//       <ProductForm
//         initialValues={initialValues}
//         onSubmit={submit}
//         submitLabel="Update Product"
//       />

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

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 20,
// };

// const btnDelete: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#7f1d1d",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };






////////////////// ******** this is code before the above form product forms is working other informations



// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// import ProductForm from "../components/ProductForm";
// import ProductImagesManager from "../images/ProductImagesManager";
// import VariantsManager from "../components/VariantsManager";

// import type { ProductFormValues, VariantUI } from "../schema";
// import type { ProductImageUI } from "@/features/images/types";

// import { supabase } from "@/lib/supabaseClient";
// import { saveImages } from "../services/saveImages";

// export default function ProductEdit() {
//   const { id: productId } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   const [initialValues, setInitialValues] =
//     useState<ProductFormValues | null>(null);
//   const [productImages, setProductImages] =
//     useState<ProductImageUI[]>([]);
//   const [variants, setVariants] = useState<VariantUI[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [saving, setSaving] = useState(false);

//   /* ======================================================
//      LOAD PRODUCT
//   ====================================================== */
//   useEffect(() => {
//     if (!productId) return;
//     loadProduct(productId);
//   }, [productId]);

//   async function loadProduct(id: string) {
//     setLoading(true);

//     /* ---------- PRODUCT ---------- */
//     const { data: product } = await supabase
//       .from("products")
//       .select("*")
//       .eq("id", id)
//       .single();

//     if (!product) {
//       alert("Product not found");
//       navigate("/products");
//       return;
//     }

//     /* ---------- PRODUCT IMAGES ---------- */
//     const { data: images } = await supabase
//       .from("product_images")
//       .select("*")
//       .eq("product_id", id)
//       .order("position");

//     /* ---------- VARIANTS ---------- */
//     const { data: variantRows } = await supabase
//       .from("product_variants")
//       .select("*")
//       .eq("product_id", id);

//     /* ---------- VARIANT IMAGES ---------- */
//     const variantIds = (variantRows ?? []).map(v => v.id);
//     let variantImages: any[] = [];

//     if (variantIds.length > 0) {
//       const { data } = await supabase
//         .from("product_variant_images")
//         .select("*")
//         .in("variant_id", variantIds);

//       variantImages = data ?? [];
//     }

//     /* ---------- HYDRATE UI ---------- */
//     setInitialValues(product);
//     setProductImages(images ?? []);

//     const hydratedVariants: VariantUI[] = (variantRows ?? []).map(v => ({
//       ...v,
//       images: variantImages.filter(img => img.variant_id === v.id),
//     }));

//     setVariants(hydratedVariants);
//     setLoading(false);
//   }

//   /* ======================================================
//      UPDATE PRODUCT (FULL PIPELINE)
//   ====================================================== */
//   async function submit(values: ProductFormValues) {
//     if (!productId || saving) return;
//     setSaving(true);

//     console.log("🟡 EDIT SUBMIT VALUES:", values);
//     console.log("🟡 PRODUCT IMAGES:", productImages);
//     console.log("🟡 VARIANTS:", variants);

//     try {
//       /* ---------- 1. UPDATE PRODUCT ---------- */
//       const { error: productError } = await supabase
//         .from("products")
//         .update(values)
//         .eq("id", productId);

//       if (productError) throw productError;

//       /* ---------- 2. LOAD EXISTING VARIANTS ---------- */
//       const { data: existingVariants } = await supabase
//         .from("product_variants")
//         .select("id")
//         .eq("product_id", productId);

//       const existingIds = new Set(
//         (existingVariants ?? []).map(v => v.id)
//       );

//       /* ---------- 3. UPSERT VARIANTS ---------- */
//       const savedVariants: VariantUI[] = [];

//       for (const variant of variants) {
//         if (variant.id && existingIds.has(variant.id)) {
//           // UPDATE
//           const { error } = await supabase
//             .from("product_variants")
//             .update({
//               variant_name: variant.variant_name,
//               short_label: variant.short_label,
//               price: variant.price,
//               mrp: variant.mrp,
//               stock: variant.stock,
//               is_default: variant.is_default,
//               attributes: variant.attributes,
//             })
//             .eq("id", variant.id);

//           if (error) throw error;

//           savedVariants.push(variant);
//           existingIds.delete(variant.id);
//         } else {
//           // INSERT
//           const { data, error } = await supabase
//             .from("product_variants")
//             .insert({
//               product_id: productId,
//               variant_name: variant.variant_name,
//               short_label: variant.short_label,
//               price: variant.price,
//               mrp: variant.mrp,
//               stock: variant.stock,
//               is_default: variant.is_default,
//               attributes: variant.attributes,
//             })
//             .select()
//             .single();

//           if (error || !data) throw error;

//           savedVariants.push({ ...variant, id: data.id });
//         }
//       }

//       /* ---------- 4. DELETE REMOVED VARIANTS ---------- */
//       if (existingIds.size > 0) {
//         await supabase
//           .from("product_variants")
//           .delete()
//           .in("id", Array.from(existingIds));
//       }

//       /* ---------- 5. SAVE IMAGES (UNIFIED) ---------- */
//       await saveImages({
//         productId,
//         productImages,
//         variants: savedVariants,
//       });

//       alert("✅ Product updated successfully");
//       navigate("/products");
//     } catch (err) {
//       console.error("❌ UPDATE FAILED:", err);
//       alert("Update failed. Check console.");
//     } finally {
//       setSaving(false);
//     }
//   }

//   /* ======================================================
//      DELETE PRODUCT
//   ====================================================== */
//   async function deleteProduct() {
//     if (!productId) return;

//     const ok = confirm(
//       "Are you sure?\n\nThis will permanently delete:\n• Product\n• Variants\n• Images"
//     );

//     if (!ok) return;

//     await supabase
//       .from("products")
//       .delete()
//       .eq("id", productId);

//     alert("🗑 Product deleted");
//     navigate("/products");
//   }

//   if (loading || !initialValues) {
//     return <div>Loading product...</div>;
//   }

//   /* ======================================================
//      UI
//   ====================================================== */
//   return (
//     <div>
//       <header style={header}>
//         <h1>Edit Product</h1>
//         <button style={btnDelete} onClick={deleteProduct}>
//           Delete Product
//         </button>
//       </header>

//       <ProductForm
//         initialValues={initialValues}
//         onSubmit={submit}
//         submitLabel="Update Product"
//       />

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

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 20,
// };

// const btnDelete: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#7f1d1d",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };




/////////////// ********** above code workedbefore the sku add

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ProductForm from "../components/ProductForm";
import ProductImagesManager from "../images/ProductImagesManager";
import VariantsManager from "../components/VariantsManager";

import type { ProductFormValues, VariantUI } from "../schema";
import type { ProductImageUI } from "@/features/images/types";

import { supabase } from "@/lib/supabaseClient";
import { saveImages } from "../services/saveImages";

export default function ProductEdit() {
  const { id: productId } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [initialValues, setInitialValues] =
    useState<ProductFormValues | null>(null);
  const [productImages, setProductImages] =
    useState<ProductImageUI[]>([]);
  const [variants, setVariants] = useState<VariantUI[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  /* ======================================================
     LOAD PRODUCT
  ====================================================== */
  useEffect(() => {
    if (!productId) return;
    loadProduct(productId);
  }, [productId]);

  async function loadProduct(id: string) {
    setLoading(true);

    const { data: product } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (!product) {
      alert("Product not found");
      navigate("/products");
      return;
    }

    const { data: images } = await supabase
      .from("product_images")
      .select("*")
      .eq("product_id", id)
      .order("position");

    const { data: variantRows } = await supabase
      .from("product_variants")
      .select("*")
      .eq("product_id", id);

    const variantIds = (variantRows ?? []).map(v => v.id);
    let variantImages: any[] = [];

    if (variantIds.length > 0) {
      const { data } = await supabase
        .from("product_variant_images")
        .select("*")
        .in("variant_id", variantIds);

      variantImages = data ?? [];
    }

    setInitialValues(product);
    setProductImages(images ?? []);

    const hydratedVariants: VariantUI[] = (variantRows ?? []).map(v => ({
      ...v,
      images: variantImages.filter(img => img.variant_id === v.id),
    }));

    setVariants(hydratedVariants);
    setLoading(false);
  }

  /* ======================================================
     UPDATE PRODUCT
  ====================================================== */
  async function submit(values: ProductFormValues) {
    if (!productId || saving) return;
    setSaving(true);

    try {
      const { error: productError } = await supabase
        .from("products")
        .update(values)
        .eq("id", productId);

      if (productError) throw productError;

      const { data: existingVariants } = await supabase
        .from("product_variants")
        .select("id")
        .eq("product_id", productId);

      const existingIds = new Set(
        (existingVariants ?? []).map(v => v.id)
      );

      const savedVariants: VariantUI[] = [];

      for (const variant of variants) {
        if (variant.id && existingIds.has(variant.id)) {
          const { error } = await supabase
            .from("product_variants")
            .update({
              variant_name: variant.variant_name,
              short_label: variant.short_label,
              sku: variant.sku, // ✅ SKU UPDATED
              price: variant.price,
              mrp: variant.mrp,
              stock: variant.stock,
              is_default: variant.is_default,
              attributes: variant.attributes,
            })
            .eq("id", variant.id);

          if (error) throw error;

          savedVariants.push(variant);
          existingIds.delete(variant.id);
        } else {
          const { data, error } = await supabase
            .from("product_variants")
            .insert({
              product_id: productId,
              variant_name: variant.variant_name,
              short_label: variant.short_label,
              sku: variant.sku, // ✅ SKU INSERTED
              price: variant.price,
              mrp: variant.mrp,
              stock: variant.stock,
              is_default: variant.is_default,
              attributes: variant.attributes,
            })
            .select()
            .single();

          if (error || !data) throw error;

          savedVariants.push({ ...variant, id: data.id });
        }
      }

      if (existingIds.size > 0) {
        await supabase
          .from("product_variants")
          .delete()
          .in("id", Array.from(existingIds));
      }

      await saveImages({
        productId,
        productImages,
        variants: savedVariants,
      });

      alert("✅ Product updated successfully");
      navigate("/products");
    } catch (err) {
      console.error("❌ UPDATE FAILED:", err);
      alert("Update failed. Check console.");
    } finally {
      setSaving(false);
    }
  }

  async function deleteProduct() {
    if (!productId) return;

    const ok = confirm(
      "Are you sure?\n\nThis will permanently delete:\n• Product\n• Variants\n• Images"
    );

    if (!ok) return;

    await supabase
      .from("products")
      .delete()
      .eq("id", productId);

    alert("🗑 Product deleted");
    navigate("/products");
  }

  if (loading || !initialValues) {
    return <div>Loading product...</div>;
  }

  return (
    <div>
      <header style={header}>
        <h1>Edit Product</h1>
        <button style={btnDelete} onClick={deleteProduct}>
          Delete Product
        </button>
      </header>

      <ProductForm
        initialValues={initialValues}
        onSubmit={submit}
        submitLabel="Update Product"
      />

      <ProductImagesManager
        images={productImages}
        onChange={setProductImages}
      />

      <VariantsManager
        variants={variants}
        onChange={setVariants}
      />
    </div>
  );
}

/* ================= STYLES ================= */

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
};

const btnDelete: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  background: "#7f1d1d",
  color: "#fff",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};
