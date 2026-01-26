// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";
// import { Controller } from "react-hook-form";


// type Props = {
//   initialValues?: Partial<ProductFormValues>;
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// export default function ProductForm({
//   initialValues,
//   onSubmit,
//   submitLabel = "Save Product",
// }: Props) {
//   const form = useForm<ProductFormValues>({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       name: "",
//       slug: "",
//       short_description: "",
//       description: "",
//       brand: "",
//       main_category: "",
//       sub_category: "",
//       mrp: undefined,
//       price: 1,
//       stock: 0,
//       is_active: true,
//       attributes_schema: {},
//       ...initialValues,
//     },
//     mode: "onSubmit",
//   });

//   const { register, handleSubmit, formState } = form;
//   const { errors } = formState;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12 }}>
//       <Field label="Product Name" error={errors.name?.message}>
//         <input {...register("name")} style={inputStyle} />
//       </Field>

//       <Field label="Slug" error={errors.slug?.message}>
//         <input {...register("slug")} style={inputStyle} />
//       </Field>

//       <Field label="Short Description" error={errors.short_description?.message}>
//         <textarea {...register("short_description")} style={textareaStyle} />
//       </Field>

//       <Field label="Description" error={errors.description?.message}>
//         <textarea {...register("description")} style={textareaStyle} />
//       </Field>

//       <Field label="Brand" error={errors.brand?.message}>
//         <input {...register("brand")} style={inputStyle} />
//       </Field>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         <Field label="Main Category" error={errors.main_category?.message}>
//           <input {...register("main_category")} style={inputStyle} />
//         </Field>

//         <Field label="Sub Category" error={errors.sub_category?.message}>
//           <input {...register("sub_category")} style={inputStyle} />
//         </Field>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         <Field label="MRP" error={errors.mrp?.message}>
//           <input type="number" {...register("mrp", { valueAsNumber: true })} style={inputStyle} />
//         </Field>

//         <Field label="Selling Price" error={errors.price?.message}>
//           <input type="number" {...register("price", { valueAsNumber: true })} style={inputStyle} />
//         </Field>
//       </div>

//       <Field label="Stock" error={errors.stock?.message}>
//         <input type="number" {...register("stock", { valueAsNumber: true })} style={inputStyle} />
//       </Field>


//             <Field label="Attributes">
//             <Controller
//                 control={form.control}
//                 name="attributes_schema"
//                 render={({ field }) => (
//                 <AttributesEditor
//                     value={field.value}
//                     onChange={field.onChange}
//                 />
//                 )}
//             />
//             </Field>



//       <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
//         <input type="checkbox" {...register("is_active")} />
//         Active
//       </label>

//       <div style={{ marginTop: 8 }}>
//         <button type="submit" style={btnPrimary}>
//           {submitLabel}
//         </button>
//       </div>
//     </form>
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
//     <div>
//       <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
//       {children}
//       {error ? <div style={{ color: "#b91c1c", marginTop: 6 }}>{error}</div> : null}
//     </div>
//   );
// }

// const inputStyle: React.CSSProperties = {
//   width: "100%",
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
// };

// const textareaStyle: React.CSSProperties = {
//   ...inputStyle,
//   minHeight: 90,
// };
// const btnPrimary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };


/////////////




// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   initialValues?: Partial<ProductFormValues>;
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// export default function ProductForm({
//   initialValues,
//   onSubmit,
//   submitLabel = "Save Product",
// }: Props) {
//   // ✅ IMPORTANT: type the resolver + useForm with ProductFormValues
//   const form = useForm<ProductFormValues>({
//     resolver: zodResolver<ProductFormValues>(productSchema),
//     defaultValues: {
//       name: "",
//       slug: "",
//       short_description: "",
//       description: "",
//       brand: "",
//       main_category: "",
//       sub_category: "",
//       mrp: undefined,
//       price: 1,
//       stock: 0,
//       is_active: true,
//       attributes_schema: undefined,
//       ...initialValues,
//     },
//     mode: "onSubmit",
//   });

//   const { register, handleSubmit, control, formState } = form;
//   const { errors } = formState;

//   // ✅ IMPORTANT: wrap to satisfy SubmitHandler typing perfectly
//   const submit = (values: ProductFormValues) => onSubmit(values);

//   return (
//     <form onSubmit={handleSubmit(submit)} style={{ display: "grid", gap: 12 }}>
//       <Field label="Product Name" error={errors.name?.message}>
//         <input {...register("name")} style={inputStyle} />
//       </Field>

//       <Field label="Slug" error={errors.slug?.message}>
//         <input {...register("slug")} style={inputStyle} />
//       </Field>

//       <Field label="Short Description" error={errors.short_description?.message}>
//         <textarea {...register("short_description")} style={textareaStyle} />
//       </Field>

//       <Field label="Description" error={errors.description?.message}>
//         <textarea {...register("description")} style={textareaStyle} />
//       </Field>

//       <Field label="Brand" error={errors.brand?.message}>
//         <input {...register("brand")} style={inputStyle} />
//       </Field>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         <Field label="Main Category" error={errors.main_category?.message}>
//           <input {...register("main_category")} style={inputStyle} />
//         </Field>

//         <Field label="Sub Category" error={errors.sub_category?.message}>
//           <input {...register("sub_category")} style={inputStyle} />
//         </Field>
//       </div>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         <Field label="MRP" error={errors.mrp?.message}>
//           <input type="number" {...register("mrp", { valueAsNumber: true })} style={inputStyle} />
//         </Field>

//         <Field label="Selling Price" error={errors.price?.message}>
//           <input type="number" {...register("price", { valueAsNumber: true })} style={inputStyle} />
//         </Field>
//       </div>

//       <Field label="Stock" error={errors.stock?.message}>
//         <input type="number" {...register("stock", { valueAsNumber: true })} style={inputStyle} />
//       </Field>

//       <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
//         <input type="checkbox" {...register("is_active")} />
//         Active
//       </label>

//       <Field label="Attributes" error={(errors.attributes_schema as any)?.message}>
//         <Controller
//           control={control}
//           name="attributes_schema"
//           render={({ field }) => (
//             <AttributesEditor value={field.value} onChange={field.onChange} />
//           )}
//         />
//       </Field>

//       <div style={{ marginTop: 8 }}>
//         <button type="submit" style={btnPrimary}>
//           {submitLabel}
//         </button>
//       </div>
//     </form>
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
//     <div>
//       <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
//       {children}
//       {error ? <div style={{ color: "#b91c1c", marginTop: 6 }}>{error}</div> : null}
//     </div>
//   );
// }

// const inputStyle: React.CSSProperties = {
//   width: "100%",
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
// };

// const textareaStyle: React.CSSProperties = {
//   ...inputStyle,
//   minHeight: 90,
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };




//////////////////////// ******* above code worked before the UI ux Upgrade
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   initialValues?: Partial<ProductFormValues>;
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// export default function ProductForm({
//   initialValues,
//   onSubmit,
//   submitLabel = "Save Product",
// }: Props) {
//   const form = useForm<ProductFormValues>({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       name: "",
//       slug: "",
//       short_description: "",
//       description: "",
//       brand: "",
//       main_category: "",
//       sub_category: "",
//       mrp: undefined,
//       price: 1,
//       stock: 0,
//       is_active: true,
//       attributes_schema: undefined,
//       ...initialValues,
//     },
//   });

//   const { register, handleSubmit, control } = form;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={formCard}>
//       <h2 style={title}>Product Details</h2>

//       <FloatingInput label="Product Name">
//         <input {...register("name")} style={inputBase} />
//       </FloatingInput>

//       <FloatingInput label="Slug">
//         <input {...register("slug")} style={inputBase} />
//       </FloatingInput>

//       <FloatingInput label="Short Description">
//         <textarea {...register("short_description")} style={textareaBase} />
//       </FloatingInput>

//       <FloatingInput label="Description">
//         <textarea {...register("description")} style={textareaBase} />
//       </FloatingInput>

//       <FloatingInput label="Brand">
//         <input {...register("brand")} style={inputBase} />
//       </FloatingInput>

//       <div style={row}>
//         <FloatingInput label="Main Category">
//           <input {...register("main_category")} style={inputBase} />
//         </FloatingInput>

//         <FloatingInput label="Sub Category">
//           <input {...register("sub_category")} style={inputBase} />
//         </FloatingInput>
//       </div>

//       <div style={row}>
//         <FloatingInput label="MRP">
//           <input
//             type="number"
//             {...register("mrp", { valueAsNumber: true })}
//             style={inputBase}
//           />
//         </FloatingInput>

//         <FloatingInput label="Selling Price">
//           <input
//             type="number"
//             {...register("price", { valueAsNumber: true })}
//             style={inputBase}
//           />
//         </FloatingInput>
//       </div>

//       <FloatingInput label="Stock">
//         <input
//           type="number"
//           {...register("stock", { valueAsNumber: true })}
//           style={inputBase}
//         />
//       </FloatingInput>

//       <div style={switchRow}>
//         <span>Active Product</span>
//         <input type="checkbox" {...register("is_active")} />
//       </div>

//       <div style={{ marginTop: 20 }}>
//         <h3 style={sectionTitle}>Product Attributes</h3>
//         <Controller
//           control={control}
//           name="attributes_schema"
//           render={({ field }) => (
//             <AttributesEditor value={field.value} onChange={field.onChange} />
//           )}
//         />
//       </div>

//       <button type="submit" style={saveBtn}>
//         {submitLabel}
//       </button>
//     </form>
//   );
// }

// /* ---------------- FLOATING INPUT ---------------- */

// function FloatingInput({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={inputWrapper}>
//       <label style={floatingLabel}>{label}</label>
//       {children}
//     </div>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const formCard: React.CSSProperties = {
//   background: "#ffffff",
//   padding: 24,
//   borderRadius: 18,
//   boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// };

// const title: React.CSSProperties = {
//   fontSize: 20,
//   fontWeight: 800,
//   marginBottom: 20,
// };

// const sectionTitle: React.CSSProperties = {
//   fontSize: 15,
//   fontWeight: 700,
//   marginBottom: 10,
// };

// const row: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 14,
// };

// const inputWrapper: React.CSSProperties = {
//   position: "relative",
//   marginBottom: 18,
// };

// const floatingLabel: React.CSSProperties = {
//   position: "absolute",
//   top: -8,
//   left: 12,
//   background: "#ffffff",
//   padding: "0 6px",
//   fontSize: 12,
//   fontWeight: 600,
//   color: "#6C7A89",
//   zIndex: 2,
// };

// const inputBase: React.CSSProperties = {
//   width: "100%",
//   padding: "14px 12px",
//   borderRadius: 14,
//   border: "1px solid #E3E3E3",
//   background: "#FAFAFA",
//   fontSize: 14,
//   outline: "none",
// };

// const textareaBase: React.CSSProperties = {
//   ...inputBase,
//   minHeight: 90,
//   resize: "vertical",
// };

// const switchRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginTop: 20,
//   paddingTop: 14,
//   borderTop: "1px solid #eee",
// };

// const saveBtn: React.CSSProperties = {
//   marginTop: 28,
//   backgroundColor: "#bf9602",
//   padding: "14px",
//   borderRadius: 16,
//   border: "none",
//   color: "#fff",
//   fontWeight: 800,
//   fontSize: 16,
//   cursor: "pointer",
// };



///////////////// (((( ** above is ui ux basic product form working code *****///////))))



// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   initialValues?: Partial<ProductFormValues>;
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// export default function ProductForm({
//   initialValues,
//   onSubmit,
//   submitLabel = "Save Product",
// }: Props) {
//   const form = useForm<ProductFormValues>({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       name: "",
//       slug: "",
//       short_description: "",
//       description: "",
//       brand: "",
//       main_category: "",
//       sub_category: "",
//       mrp: undefined,
//       price: 1,
//       stock: 0,
//       is_active: true,
//       attributes_schema: undefined,
//       ...initialValues,
//     },
//   });

//   const { register, handleSubmit, control } = form;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={pageGrid}>
//       {/* ================= LEFT / PRIMARY ================= */}
//       <section style={primaryCol}>
//         <Card title="Product Information">
//           <FloatingInput label="Product Name">
//             <input {...register("name")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Slug">
//             <input {...register("slug")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Short Description">
//             <textarea {...register("short_description")} style={textareaBase} />
//           </FloatingInput>

//           <FloatingInput label="Description">
//             <textarea {...register("description")} style={textareaBase} />
//           </FloatingInput>
//         </Card>

//         <Card title="Pricing & Inventory">
//           <Row>
//             <FloatingInput label="MRP">
//               <input
//                 type="number"
//                 {...register("mrp", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//             </FloatingInput>

//             <FloatingInput label="Selling Price">
//               <input
//                 type="number"
//                 {...register("price", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//             </FloatingInput>
//           </Row>

//           <FloatingInput label="Stock">
//             <input
//               type="number"
//               {...register("stock", { valueAsNumber: true })}
//               style={inputBase}
//             />
//           </FloatingInput>
//         </Card>

//         <Card title="Product Attributes">
//           <Controller
//             control={control}
//             name="attributes_schema"
//             render={({ field }) => (
//               <AttributesEditor value={field.value} onChange={field.onChange} />
//             )}
//           />
//         </Card>
//       </section>

//       {/* ================= RIGHT / SIDEBAR ================= */}
//       <aside style={secondaryCol}>
//         <Card title="Product Meta">
//           <FloatingInput label="Brand">
//             <input {...register("brand")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Main Category">
//             <input {...register("main_category")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Sub Category">
//             <input {...register("sub_category")} style={inputBase} />
//           </FloatingInput>

//           <div style={switchRow}>
//             <span>Active Product</span>
//             <input type="checkbox" {...register("is_active")} />
//           </div>
//         </Card>

//         <button type="submit" style={saveBtn}>
//           {submitLabel}
//         </button>
//       </aside>
//     </form>
//   );
// }

// /* ================= REUSABLE UI ================= */

// function Card({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={card}>
//       <h3 style={cardTitle}>{title}</h3>
//       {children}
//     </div>
//   );
// }

// function Row({ children }: { children: React.ReactNode }) {
//   return <div style={row}>{children}</div>;
// }

// function FloatingInput({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={inputWrapper}>
//       <label style={floatingLabel}>{label}</label>
//       {children}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const pageGrid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "2.5fr 1fr",
//   gap: 24,
//   alignItems: "flex-start",
// };

// const primaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 24,
// };

// const secondaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 18,
//   position: "sticky",
//   top: 20,
// };

// const card: React.CSSProperties = {
//   background: "#ffffff",
//   borderRadius: 18,
//   padding: 20,
//   boxShadow: "0 8px 26px rgba(0,0,0,0.09)",
// };

// const cardTitle: React.CSSProperties = {
//   fontSize: 15,
//   fontWeight: 800,
//   marginBottom: 16,
// };

// const row: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 14,
// };

// const inputWrapper: React.CSSProperties = {
//   position: "relative",
//   marginBottom: 18,
//   marginRight : 25,
// };

// const floatingLabel: React.CSSProperties = {
//   position: "absolute",
//   top: -8,
//   left: 12,
//   background: "#ffffff",
//   padding: "0 6px",
//   fontSize: 12,
//   fontWeight: 600,
//   color: "#6C7A89",
// };

// const inputBase: React.CSSProperties = {
//   width: "100%",
//   padding: "14px 12px",
//   borderRadius: 14,
//   border: "1px solid #E3E3E3",
//   background: "#FAFAFA",
//   fontSize: 14,
  
// };

// const textareaBase: React.CSSProperties = {
//   ...inputBase,
//   minHeight: 90,
// };

// const switchRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   paddingTop: 14,
//   marginTop: 10,
//   borderTop: "1px solid #eee",
// };

// const saveBtn: React.CSSProperties = {
//   backgroundColor: "#bf9602",
//   padding: "14px",
//   borderRadius: 16,
//   border: "none",
//   color: "#fff",
//   fontWeight: 800,
//   fontSize: 16,
//   cursor: "pointer",
// };







//////////// above code worekd before teh delete button

// import { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   initialValues?: Partial<ProductFormValues>;
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// export default function ProductForm({
//   initialValues,
//   onSubmit,
//   submitLabel = "Save Product",
// }: Props) {
//   const form = useForm<ProductFormValues>({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       name: "",
//       slug: "",
//       short_description: "",
//       description: "",
//       brand: "",
//       main_category: "",
//       sub_category: "",
//       mrp: undefined,
//       price: 1,
//       stock: 0,
//       is_active: true,
//       attributes_schema: undefined,
//     },
//   });

//   /* 🔥 CRITICAL FIX FOR EDIT MODE */
//   useEffect(() => {
//     if (initialValues) {
//       form.reset(initialValues);
//     }
//   }, [initialValues, form]);

//   const { register, handleSubmit, control } = form;

//   console.log("🟢 ProductForm rendered, initialValues:", initialValues);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} style={pageGrid}>
//       {/* ================= LEFT / PRIMARY ================= */}
//       <section style={primaryCol}>
//         <Card title="Product Information">
//           <FloatingInput label="Product Name">
//             <input {...register("name")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Slug">
//             <input {...register("slug")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Short Description">
//             <textarea {...register("short_description")} style={textareaBase} />
//           </FloatingInput>

//           <FloatingInput label="Description">
//             <textarea {...register("description")} style={textareaBase} />
//           </FloatingInput>
//         </Card>

//         <Card title="Pricing & Inventory">
//           <Row>
//             <FloatingInput label="MRP">
//               <input
//                 type="number"
//                 {...register("mrp", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//             </FloatingInput>

//             <FloatingInput label="Selling Price">
//               <input
//                 type="number"
//                 {...register("price", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//             </FloatingInput>
//           </Row>

//           <FloatingInput label="Stock">
//             <input
//               type="number"
//               {...register("stock", { valueAsNumber: true })}
//               style={inputBase}
//             />
//           </FloatingInput>
//         </Card>

//         <Card title="Product Attributes">
//           <Controller
//             control={control}
//             name="attributes_schema"
//             render={({ field }) => (
//               <AttributesEditor value={field.value} onChange={field.onChange} />
//             )}
//           />
//         </Card>
//       </section>

//       {/* ================= RIGHT / SIDEBAR ================= */}
//       <aside style={secondaryCol}>
//         <Card title="Product Meta">
//           <FloatingInput label="Brand">
//             <input {...register("brand")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Main Category">
//             <input {...register("main_category")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Sub Category">
//             <input {...register("sub_category")} style={inputBase} />
//           </FloatingInput>

//           <div style={switchRow}>
//             <span>Active Product</span>
//             <input type="checkbox" {...register("is_active")} />
//           </div>
//         </Card>

//         <button type="submit" style={saveBtn}>
//           {submitLabel}
//         </button>
//       </aside>
//     </form>
//   );
// }

// /* ================= REUSABLE UI ================= */

// function Card({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={card}>
//       <h3 style={cardTitle}>{title}</h3>
//       {children}
//     </div>
//   );
// }

// function Row({ children }: { children: React.ReactNode }) {
//   return <div style={row}>{children}</div>;
// }

// function FloatingInput({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={inputWrapper}>
//       <label style={floatingLabel}>{label}</label>
//       {children}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const pageGrid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "2.5fr 1fr",
//   gap: 24,
//   alignItems: "flex-start",
// };

// const primaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 24,
// };

// const secondaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 18,
//   position: "sticky",
//   top: 20,
// };

// const card: React.CSSProperties = {
//   background: "#ffffff",
//   borderRadius: 18,
//   padding: 20,
//   boxShadow: "0 8px 26px rgba(0,0,0,0.09)",
// };

// const cardTitle: React.CSSProperties = {
//   fontSize: 15,
//   fontWeight: 800,
//   marginBottom: 16,
// };

// const row: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 14,
// };

// const inputWrapper: React.CSSProperties = {
//   position: "relative",
//   marginBottom: 18,
//   marginRight: 25,
// };

// const floatingLabel: React.CSSProperties = {
//   position: "absolute",
//   top: -8,
//   left: 12,
//   background: "#ffffff",
//   padding: "0 6px",
//   fontSize: 12,
//   fontWeight: 600,
//   color: "#6C7A89",
// };

// const inputBase: React.CSSProperties = {
//   width: "100%",
//   padding: "14px 12px",
//   borderRadius: 14,
//   border: "1px solid #E3E3E3",
//   background: "#FAFAFA",
//   fontSize: 14,
// };

// const textareaBase: React.CSSProperties = {
//   ...inputBase,
//   minHeight: 90,
// };

// const switchRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   paddingTop: 14,
//   marginTop: 10,
//   borderTop: "1px solid #eee",
// };

// const saveBtn: React.CSSProperties = {
//   backgroundColor: "#bf9602",
//   padding: "14px",
//   borderRadius: 16,
//   border: "none",
//   color: "#fff",
//   fontWeight: 800,
//   fontSize: 16,
//   cursor: "pointer",
// };



///////////// above code worked before the duplicate removes



// import { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   initialValues?: Partial<ProductFormValues>;
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// export default function ProductForm({
//   initialValues,
//   onSubmit,
//   submitLabel = "Save Product",
// }: Props) {
//   console.log("🟢 ProductForm FUNCTION START");

//   const form = useForm<ProductFormValues>({
//     resolver: zodResolver(productSchema),
//     defaultValues: {
//       name: "",
//       slug: "",
//       short_description: "",
//       description: "",
//       brand: "",
//       main_category: "",
//       sub_category: "",
//       mrp: undefined,
//       price: 1,
//       stock: 0,
//       is_active: true,
//       attributes_schema: undefined,
//     },
//     mode: "onSubmit",
//   });

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     formState,
//     reset,
//   } = form;

//   /* ===================== RENDER LOG ===================== */

//   console.log("🟢 ProductForm rendered");
//   console.log("🟢 initialValues:", initialValues);

//   /* ===================== RESET LOG ===================== */

//   useEffect(() => {
//     console.log("🟡 useEffect fired (initialValues)");
//     console.log("🟡 initialValues inside effect:", initialValues);

//     if (initialValues) {
//       console.log("🟡 Calling form.reset() with:", initialValues);
//       reset(initialValues);
//     }
//   }, [initialValues, reset]);

//   /* ===================== WATCH LOG ===================== */

//   const watchedValues = watch();
//   console.log("🔵 WATCH VALUES:", watchedValues);

//   /* ===================== FORM STATE LOG ===================== */

//   console.log("🟣 FORM STATE:");
//   console.log("   errors:", formState.errors);
//   console.log("   isValid:", formState.isValid);
//   console.log("   isSubmitting:", formState.isSubmitting);
//   console.log("   isDirty:", formState.isDirty);

//   /* ===================== SUBMIT WRAPPER ===================== */

//   const debugSubmit = handleSubmit(
//     (values) => {
//       console.log("✅ handleSubmit SUCCESS");
//       console.log("✅ VALUES PASSED TO onSubmit:", values);
//       onSubmit(values);
//     },
//     (errors) => {
//       console.error("❌ handleSubmit BLOCKED");
//       console.error("❌ VALIDATION ERRORS:", errors);
//     }
//   );

//   return (
//     <form
//       onSubmit={(e) => {
//         console.log("🟠 FORM SUBMIT EVENT FIRED");
//         debugSubmit(e);
//       }}
//       style={pageGrid}
//     >
//       {/* ================= LEFT / PRIMARY ================= */}
//       <section style={primaryCol}>
//         <Card title="Product Information">
//           <FloatingInput label="Product Name">
//             <input {...register("name")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Slug">
//             <input {...register("slug")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Short Description">
//             <textarea {...register("short_description")} style={textareaBase} />
//           </FloatingInput>

//           <FloatingInput label="Description">
//             <textarea {...register("description")} style={textareaBase} />
//           </FloatingInput>
//         </Card>

//         <Card title="Pricing & Inventory">
//           <Row>
//             <FloatingInput label="MRP">
//               <input
//                 type="number"
//                 {...register("mrp", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//             </FloatingInput>

//             <FloatingInput label="Selling Price">
//               <input
//                 type="number"
//                 {...register("price", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//             </FloatingInput>
//           </Row>

//           <FloatingInput label="Stock">
//             <input
//               type="number"
//               {...register("stock", { valueAsNumber: true })}
//               style={inputBase}
//             />
//           </FloatingInput>
//         </Card>

//         <Card title="Product Attributes">
//           <Controller
//             control={control}
//             name="attributes_schema"
//             render={({ field }) => {
//               console.log("🧩 attributes_schema value:", field.value);
//               return (
//                 <AttributesEditor
//                   value={field.value}
//                   onChange={(val) => {
//                     console.log("🧩 attributes_schema changed:", val);
//                     field.onChange(val);
//                   }}
//                 />
//               );
//             }}
//           />
//         </Card>
//       </section>

//       {/* ================= RIGHT / SIDEBAR ================= */}
//       <aside style={secondaryCol}>
//         <Card title="Product Meta">
//           <FloatingInput label="Brand">
//             <input {...register("brand")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Main Category">
//             <input {...register("main_category")} style={inputBase} />
//           </FloatingInput>

//           <FloatingInput label="Sub Category">
//             <input {...register("sub_category")} style={inputBase} />
//           </FloatingInput>

//           <div style={switchRow}>
//             <span>Active Product</span>
//             <input type="checkbox" {...register("is_active")} />
//           </div>
//         </Card>

//         <button type="submit" style={saveBtn}>
//           {submitLabel}
//         </button>
//       </aside>
//     </form>
//   );
// }

// /* ================= REUSABLE UI ================= */

// function Card({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div style={card}>
//       <h3 style={cardTitle}>{title}</h3>
//       {children}
//     </div>
//   );
// }

// function Row({ children }: { children: React.ReactNode }) {
//   return <div style={row}>{children}</div>;
// }

// function FloatingInput({
//   label,
//   children,
// }: {
//   label: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={inputWrapper}>
//       <label style={floatingLabel}>{label}</label>
//       {children}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const pageGrid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "2.5fr 1fr",
//   gap: 24,
//   alignItems: "flex-start",
// };

// const primaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 24,
// };

// const secondaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 18,
//   position: "sticky",
//   top: 20,
// };

// const card: React.CSSProperties = {
//   background: "#ffffff",
//   borderRadius: 18,
//   padding: 20,
//   boxShadow: "0 8px 26px rgba(0,0,0,0.09)",
// };

// const cardTitle: React.CSSProperties = {
//   fontSize: 15,
//   fontWeight: 800,
//   marginBottom: 16,
// };

// const row: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 14,
// };

// const inputWrapper: React.CSSProperties = {
//   position: "relative",
//   marginBottom: 18,
//   marginRight: 25,
// };

// const floatingLabel: React.CSSProperties = {
//   position: "absolute",
//   top: -8,
//   left: 12,
//   background: "#ffffff",
//   padding: "0 6px",
//   fontSize: 12,
//   fontWeight: 600,
//   color: "#6C7A89",
// };

// const inputBase: React.CSSProperties = {
//   width: "100%",
//   padding: "14px 12px",
//   borderRadius: 14,
//   border: "1px solid #E3E3E3",
//   background: "#FAFAFA",
//   fontSize: 14,
// };

// const textareaBase: React.CSSProperties = {
//   ...inputBase,
//   minHeight: 90,
// };

// const switchRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   paddingTop: 14,
//   marginTop: 10,
//   borderTop: "1px solid #eee",
// };

// const saveBtn: React.CSSProperties = {
//   backgroundColor: "#bf9602",
//   padding: "14px",
//   borderRadius: 16,
//   border: "none",
//   color: "#fff",
//   fontWeight: 800,
//   fontSize: 16,
//   cursor: "pointer",
// };




//////////// ********** above code worked after schema fix. working on multiple logs

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../schema";
import type { ProductFormValues } from "../schema";
import AttributesEditor from "./AttributesEditor";

type Props = {
  initialValues?: Partial<ProductFormValues> & { id?: string };
  onSubmit: (values: ProductFormValues) => void;
  submitLabel?: string;
};

export default function ProductForm({
  initialValues,
  onSubmit,
  submitLabel = "Save Product",
}: Props) {
  console.log("🟢 ProductForm FUNCTION START");

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      slug: "",
      short_description: "",
      description: "",
      brand: "",
      main_category: "",
      sub_category: "",
      mrp: undefined,
      price: 1,
      stock: 0,
      is_active: true,
      attributes_schema: undefined,
    },
    mode: "onSubmit",
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState,
    reset,
  } = form;

  /* ===================== RENDER LOG ===================== */

  console.log("🟢 ProductForm rendered");
  console.log("🟢 initialValues:", initialValues);

  /* ===================== RESET LOG (FIXED – SAFE) ===================== */

  useEffect(() => {
    console.log("🟡 useEffect fired (product id)");
    console.log("🟡 initialValues inside effect:", initialValues);

    if (!initialValues?.id) return;

    console.log(
      "🟡 Calling form.reset() for product id:",
      initialValues.id
    );

    reset({
      ...initialValues,
      attributes_schema:
        initialValues.attributes_schema ?? undefined,
    });
  }, [initialValues?.id, reset]);

  /* ===================== WATCH LOG ===================== */

  const watchedValues = watch();
  console.log("🔵 WATCH VALUES:", watchedValues);

  /* ===================== FORM STATE LOG ===================== */

  console.log("🟣 FORM STATE:");
  console.log("   errors:", formState.errors);
  console.log("   isValid:", formState.isValid);
  console.log("   isSubmitting:", formState.isSubmitting);
  console.log("   isDirty:", formState.isDirty);

  /* ===================== SUBMIT WRAPPER ===================== */

  const debugSubmit = handleSubmit(
    (values) => {
      console.log("✅ handleSubmit SUCCESS");
      console.log("✅ VALUES PASSED TO onSubmit:", values);
      onSubmit(values);
    },
    (errors) => {
      console.error("❌ handleSubmit BLOCKED");
      console.error("❌ VALIDATION ERRORS:", errors);
    }
  );

  return (
    <form
      onSubmit={(e) => {
        console.log("🟠 FORM SUBMIT EVENT FIRED");
        debugSubmit(e);
      }}
      style={pageGrid}
    >
      {/* ================= LEFT / PRIMARY ================= */}
      <section style={primaryCol}>
        <Card title="Product Information">
          <FloatingInput label="Product Name">
            <input {...register("name")} style={inputBase} />
          </FloatingInput>

          <FloatingInput label="Slug">
            <input {...register("slug")} style={inputBase} />
          </FloatingInput>

          <FloatingInput label="Short Description">
            <textarea {...register("short_description")} style={textareaBase} />
          </FloatingInput>

          <FloatingInput label="Description">
            <textarea {...register("description")} style={textareaBase} />
          </FloatingInput>
        </Card>

        <Card title="Pricing & Inventory">
          <Row>
            <FloatingInput label="MRP">
              <input
                type="number"
                {...register("mrp", { valueAsNumber: true })}
                style={inputBase}
              />
            </FloatingInput>

            <FloatingInput label="Selling Price">
              <input
                type="number"
                {...register("price", { valueAsNumber: true })}
                style={inputBase}
              />
            </FloatingInput>
          </Row>

          <FloatingInput label="Stock">
            <input
              type="number"
              {...register("stock", { valueAsNumber: true })}
              style={inputBase}
            />
          </FloatingInput>
        </Card>

        <Card title="Product Attributes">
          <Controller
            control={control}
            name="attributes_schema"
            render={({ field }) => {
              console.log("🧩 attributes_schema value:", field.value);
              return (
                <AttributesEditor
                  value={field.value}
                  onChange={(val) => {
                    console.log(
                      "🧩 attributes_schema changed:",
                      val
                    );
                    field.onChange(val);
                  }}
                />
              );
            }}
          />
        </Card>
      </section>

      {/* ================= RIGHT / SIDEBAR ================= */}
      <aside style={secondaryCol}>
        <Card title="Product Meta">
          <FloatingInput label="Brand">
            <input {...register("brand")} style={inputBase} />
          </FloatingInput>

          <FloatingInput label="Main Category">
            <input
              {...register("main_category")}
              style={inputBase}
            />
          </FloatingInput>

          <FloatingInput label="Sub Category">
            <input
              {...register("sub_category")}
              style={inputBase}
            />
          </FloatingInput>

          <div style={switchRow}>
            <span>Active Product</span>
            <input type="checkbox" {...register("is_active")} />
          </div>
        </Card>

        <button type="submit" style={saveBtn}>
          {submitLabel}
        </button>
      </aside>
    </form>
  );
}

/* ================= REUSABLE UI ================= */

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={card}>
      <h3 style={cardTitle}>{title}</h3>
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={row}>{children}</div>;
}

function FloatingInput({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div style={inputWrapper}>
      <label style={floatingLabel}>{label}</label>
      {children}
    </div>
  );
}

/* ================= STYLES ================= */

const pageGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "2.5fr 1fr",
  gap: 24,
  alignItems: "flex-start",
};

const primaryCol: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 24,
};

const secondaryCol: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 18,
  position: "sticky",
  top: 20,
};

const card: React.CSSProperties = {
  background: "#ffffff",
  borderRadius: 18,
  padding: 20,
  boxShadow: "0 8px 26px rgba(0,0,0,0.09)",
};

const cardTitle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 800,
  marginBottom: 16,
};

const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 14,
};

const inputWrapper: React.CSSProperties = {
  position: "relative",
  marginBottom: 18,
  marginRight: 25,
};

const floatingLabel: React.CSSProperties = {
  position: "absolute",
  top: -8,
  left: 12,
  background: "#ffffff",
  padding: "0 6px",
  fontSize: 12,
  fontWeight: 600,
  color: "#6C7A89",
};

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "14px 12px",
  borderRadius: 14,
  border: "1px solid #E3E3E3",
  background: "#FAFAFA",
  fontSize: 14,
};

const textareaBase: React.CSSProperties = {
  ...inputBase,
  minHeight: 90,
};

const switchRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 14,
  marginTop: 10,
  borderTop: "1px solid #eee",
};

const saveBtn: React.CSSProperties = {
  backgroundColor: "#bf9602",
  padding: "14px",
  borderRadius: 16,
  border: "none",
  color: "#fff",
  fontWeight: 800,
  fontSize: 16,
  cursor: "pointer",
};
