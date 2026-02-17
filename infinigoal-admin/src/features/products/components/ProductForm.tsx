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

// import { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   initialValues?: Partial<ProductFormValues> & { id?: string };
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

//   /* ===================== RESET LOG (FIXED – SAFE) ===================== */

//   useEffect(() => {
//     console.log("🟡 useEffect fired (product id)");
//     console.log("🟡 initialValues inside effect:", initialValues);

//     if (!initialValues?.id) return;

//     console.log(
//       "🟡 Calling form.reset() for product id:",
//       initialValues.id
//     );

//     reset({
//       ...initialValues,
//       attributes_schema:
//         initialValues.attributes_schema ?? undefined,
//     });
//   }, [initialValues?.id, reset]);

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
//                     console.log(
//                       "🧩 attributes_schema changed:",
//                       val
//                     );
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
//             <input
//               {...register("main_category")}
//               style={inputBase}
//             />
//           </FloatingInput>

//           <FloatingInput label="Sub Category">
//             <input
//               {...register("sub_category")}
//               style={inputBase}
//             />
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




///////////// above code worked before the tag add


// import { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   initialValues?: Partial<ProductFormValues> & { id?: string };
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// const BADGE_OPTIONS = [
//   "BEST_SELLER",
//   "TRENDING",
//   "NEW",
//   "ORGANIC",
//   "LOW_PRICE",
//   "LIMITED_STOCK",
//   "OFFER",
// ];

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

//       /* 🆕 ADVANCED (SAFE DEFAULTS) */
//       tags: [],
//       search_keywords: [],
//       synonyms: [],
//       badges: [],
//       is_featured: false,
//     },
//     mode: "onSubmit",
//   });

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     reset,
//     setValue,
//   } = form;

//   /* ===================== RESET (SAFE) ===================== */
//   useEffect(() => {
//     if (!initialValues?.id) return;

//     reset({
//       ...initialValues,
//       attributes_schema:
//         initialValues.attributes_schema ?? undefined,
//       tags: initialValues.tags ?? [],
//       search_keywords: initialValues.search_keywords ?? [],
//       synonyms: initialValues.synonyms ?? [],
//       badges: initialValues.badges ?? [],
//       is_featured: initialValues.is_featured ?? false,
//     });
//   }, [initialValues?.id, reset]);

//   const debugSubmit = handleSubmit(
//     (values) => onSubmit(values),
//     (errors) => console.error("Validation errors:", errors)
//   );

//   /* ===================== HELPERS ===================== */

//   const toArray = (v?: string) =>
//     v
//       ?.split(",")
//       .map((s) => s.trim())
//       .filter(Boolean) ?? [];

//   const badges = watch("badges") || [];

//   return (
//     <form onSubmit={debugSubmit} style={pageGrid}>
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
//               <AttributesEditor
//                 value={field.value}
//                 onChange={field.onChange}
//               />
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

//         {/* ================= 🆕 DISCOVERY & MARKETING ================= */}
//         <Card title="Discovery & Marketing">
//           <FloatingInput label="Tags (comma separated)">
//             <input
//               style={inputBase}
//               onBlur={(e) =>
//                 setValue("tags", toArray(e.target.value))
//               }
//               defaultValue={initialValues?.tags?.join(", ") ?? ""}
//             />
//           </FloatingInput>

//           <FloatingInput label="Search Keywords">
//             <input
//               style={inputBase}
//               onBlur={(e) =>
//                 setValue("search_keywords", toArray(e.target.value))
//               }
//               defaultValue={
//                 initialValues?.search_keywords?.join(", ") ?? ""
//               }
//             />
//           </FloatingInput>

//           <FloatingInput label="Synonyms">
//             <input
//               style={inputBase}
//               onBlur={(e) =>
//                 setValue("synonyms", toArray(e.target.value))
//               }
//               defaultValue={initialValues?.synonyms?.join(", ") ?? ""}
//             />
//           </FloatingInput>

//           <div style={{ marginTop: 14 }}>
//             <div style={{ fontWeight: 700, marginBottom: 8 }}>
//               Badges (max 2)
//             </div>

//             {BADGE_OPTIONS.map((badge) => (
//               <label key={badge} style={badgeRow}>
//                 <input
//                   type="checkbox"
//                   checked={badges.includes(badge)}
//                   onChange={(e) => {
//                     if (e.target.checked && badges.length >= 2)
//                       return;

//                     setValue(
//                       "badges",
//                       e.target.checked
//                         ? [...badges, badge]
//                         : badges.filter((b) => b !== badge)
//                     );
//                   }}
//                 />
//                 <span>{badge}</span>
//               </label>
//             ))}
//           </div>

//           <div style={switchRow}>
//             <span>Featured Product</span>
//             <input type="checkbox" {...register("is_featured")} />
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

// const badgeRow: React.CSSProperties = {
//   display: "flex",
//   gap: 8,
//   alignItems: "center",
//   marginBottom: 6,
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




////////////// ******** above code worked before the motherboard reset


// import { useEffect } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";
// import AdminCategorySelector from "@/shared/selectors/AdminCategorySelector";
// import BrandSelector from "@/shared/selectors/BrandSelector";
// import TagSelector from "@/shared/selectors/TagSelector";

// type Props = {
//   initialValues?: Partial<ProductFormValues> & { id?: string };
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// const BADGE_OPTIONS = [
//   "BEST_SELLER",
//   "TRENDING",
//   "NEW",
//   "ORGANIC",
//   "LOW_PRICE",
//   "LIMITED_STOCK",
//   "OFFER",
// ];

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

//       /* ADVANCED */
//       tags: [],
//       search_keywords: [],
//       synonyms: [],
//       badges: [],
//       is_featured: false,
//     },
//     mode: "onSubmit",
//   });

//   const { register, handleSubmit, control, watch, reset, setValue } = form;

//   /* ===================== RESET (EDIT SAFE) ===================== */
//   useEffect(() => {
//     if (!initialValues?.id) return;

//     reset({
//       ...initialValues,
//       attributes_schema: initialValues.attributes_schema ?? undefined,
//       tags: initialValues.tags ?? [],
//       search_keywords: initialValues.search_keywords ?? [],
//       synonyms: initialValues.synonyms ?? [],
//       badges: initialValues.badges ?? [],
//       is_featured: initialValues.is_featured ?? false,
//     });
//   }, [initialValues?.id, reset]);

//   const submitHandler = handleSubmit(
//     (values) => onSubmit(values),
//     (errors) => console.error("Validation errors:", errors)
//   );

//   const badges = watch("badges") || [];

//   return (
//     <form onSubmit={submitHandler} style={pageGrid}>
//       {/* ================= LEFT ================= */}
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

//       {/* ================= RIGHT ================= */}
//       <aside style={secondaryCol}>
//         <Card title="Product Meta">
//           {/* ✅ BRAND SELECTOR */}
//           <Controller
//             control={control}
//             name="brand"
//             render={({ field }) => (
//               <BrandSelector value={field.value} onChange={field.onChange} />
//             )}
//           />

//           {/* ✅ CATEGORY SELECTOR */}
//           <Controller
//             control={control}
//             name="main_category"
//             render={({ field: mainField }) => (
//               <Controller
//                 control={control}
//                 name="sub_category"
//                 render={({ field: subField }) => (
//                   <AdminCategorySelector
//                     mainValue={mainField.value}
//                     subValue={subField.value}
//                     onMainChange={mainField.onChange}
//                     onSubChange={subField.onChange}
//                   />
//                 )}
//               />
//             )}
//           />

//           <div style={switchRow}>
//             <span>Active Product</span>
//             <input type="checkbox" {...register("is_active")} />
//           </div>
//         </Card>

//         {/* ================= DISCOVERY & MARKETING ================= */}
//         <Card title="Discovery & Marketing">
//           {/* ✅ TAG SELECTOR (AUTOCOMPLETE) */}
//           <Controller
//             control={control}
//             name="tags"
//             render={({ field }) => (
//               <TagSelector value={field.value ?? []} onChange={field.onChange} />
//             )}
//           />

//           <FloatingInput label="Search Keywords (comma separated)">
//             <input
//               style={inputBase}
//               onBlur={(e) =>
//                 setValue("search_keywords", toArray(e.target.value))
//               }
//               defaultValue={initialValues?.search_keywords?.join(", ") ?? ""}
//             />
//           </FloatingInput>

//           <FloatingInput label="Synonyms (comma separated)">
//             <input
//               style={inputBase}
//               onBlur={(e) => setValue("synonyms", toArray(e.target.value))}
//               defaultValue={initialValues?.synonyms?.join(", ") ?? ""}
//             />
//           </FloatingInput>

//           <div style={{ marginTop: 14 }}>
//             <div style={{ fontWeight: 700, marginBottom: 8 }}>
//               Badges (max 2)
//             </div>

//             {BADGE_OPTIONS.map((badge) => (
//               <label key={badge} style={badgeRow}>
//                 <input
//                   type="checkbox"
//                   checked={badges.includes(badge)}
//                   onChange={(e) => {
//                     if (e.target.checked && badges.length >= 2) return;

//                     setValue(
//                       "badges",
//                       e.target.checked
//                         ? [...badges, badge]
//                         : badges.filter((b) => b !== badge)
//                     );
//                   }}
//                 />
//                 <span>{badge}</span>
//               </label>
//             ))}
//           </div>

//           <div style={switchRow}>
//             <span>Featured Product</span>
//             <input type="checkbox" {...register("is_featured")} />
//           </div>
//         </Card>

//         <button type="submit" style={saveBtn}>
//           {submitLabel}
//         </button>
//       </aside>
//     </form>
//   );
// }

// /* ================= HELPERS ================= */

// const toArray = (v?: string) =>
//   v
//     ?.split(",")
//     .map((s) => s.trim())
//     .filter(Boolean) ?? [];

// /* ================= UI HELPERS ================= */

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

// const badgeRow: React.CSSProperties = {
//   display: "flex",
//   gap: 8,
//   alignItems: "center",
//   marginBottom: 6,
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




////// ***** above code worked after motherboard fix .v1

// import React, { useEffect, useMemo } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";
// import AdminCategorySelector from "@/shared/selectors/AdminCategorySelector";
// import BrandSelector from "@/shared/selectors/BrandSelector";
// import TagSelector from "@/shared/selectors/TagSelector";

// type Props = {
//   initialValues?: Partial<ProductFormValues> & { id?: string };
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// const BADGE_OPTIONS = [
//   "BEST_SELLER",
//   "TRENDING",
//   "NEW",
//   "ORGANIC",
//   "LOW_PRICE",
//   "LIMITED_STOCK",
//   "OFFER",
// ];

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

//       /* ADVANCED */
//       tags: [],
//       search_keywords: [],
//       synonyms: [],
//       badges: [],
//       is_featured: false,
//     },
//     mode: "onSubmit",
//   });

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     reset,
//     setValue,
//     formState: { errors, isSubmitting, isDirty },
//   } = form;

//   /* ===================== RESET (EDIT SAFE) ===================== */
//   useEffect(() => {
//     if (!initialValues?.id) return;

//     reset({
//       ...initialValues,
//       attributes_schema: initialValues.attributes_schema ?? undefined,
//       tags: initialValues.tags ?? [],
//       search_keywords: initialValues.search_keywords ?? [],
//       synonyms: initialValues.synonyms ?? [],
//       badges: initialValues.badges ?? [],
//       is_featured: initialValues.is_featured ?? false,
//     });
//   }, [initialValues?.id, reset]);

//   const submitHandler = handleSubmit(
//     (values) => onSubmit(values),
//     (e) => console.error("Validation errors:", e)
//   );

//   const badges = watch("badges") || [];

//   const pageTitle = useMemo(() => {
//     const name = watch("name")?.trim();
//     return name ? `Editing: ${name}` : "Create / Edit Product";
//   }, [watch]);

//   return (
//     <form onSubmit={submitHandler} style={pageGrid}>
//       {/* ================= LEFT ================= */}
//       <section style={primaryCol}>
//         <div style={pageHeader}>
//           <div style={{ minWidth: 0 }}>
//             <h2 style={pageH1}>{pageTitle}</h2>
//             <p style={pageHint}>
//               Keep fields clean & consistent. This impacts search, filtering, and customer experience.
//             </p>
//           </div>
//         </div>

//         <Card
//           title="Product Information"
//           subtitle="Core details shown to customers"
//         >
//           <FloatingInput label="Product Name" required>
//             <input {...register("name")} style={inputBase} />
//             <FieldError msg={errors.name?.message as string | undefined} />
//           </FloatingInput>

//           <FloatingInput label="Slug" hint="URL-friendly name (avoid spaces)">
//             <input {...register("slug")} style={inputBase} />
//             <FieldError msg={errors.slug?.message as string | undefined} />
//           </FloatingInput>

//           <FloatingInput label="Short Description" hint="Shown in list cards / previews">
//             <textarea {...register("short_description")} style={textareaBase} />
//             <FieldError
//               msg={errors.short_description?.message as string | undefined}
//             />
//           </FloatingInput>

//           <FloatingInput label="Description" hint="Full product story for detail page">
//             <textarea {...register("description")} style={textareaBaseLg} />
//             <FieldError msg={errors.description?.message as string | undefined} />
//           </FloatingInput>
//         </Card>

//         <Card title="Pricing & Inventory" subtitle="Price, stock & selling controls">
//           <Row>
//             <FloatingInput label="MRP" hint="Optional but recommended">
//               <input
//                 type="number"
//                 {...register("mrp", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//               <FieldError msg={errors.mrp?.message as string | undefined} />
//             </FloatingInput>

//             <FloatingInput label="Selling Price" required>
//               <input
//                 type="number"
//                 {...register("price", { valueAsNumber: true })}
//                 style={inputBase}
//               />
//               <FieldError msg={errors.price?.message as string | undefined} />
//             </FloatingInput>
//           </Row>

//           <FloatingInput label="Stock" hint="0 means out of stock" required>
//             <input
//               type="number"
//               {...register("stock", { valueAsNumber: true })}
//               style={inputBase}
//             />
//             <FieldError msg={errors.stock?.message as string | undefined} />
//           </FloatingInput>
//         </Card>

//         <Card title="Product Attributes" subtitle="Structured attributes for variants & filters">
//           <Controller
//             control={control}
//             name="attributes_schema"
//             render={({ field }) => (
//               <div style={{ minWidth: 0 }}>
//                 <AttributesEditor value={field.value} onChange={field.onChange} />
//               </div>
//             )}
//           />
//           <FieldError
//             msg={errors.attributes_schema?.message as string | undefined}
//           />
//         </Card>
//       </section>

//       {/* ================= RIGHT ================= */}
//       <aside style={secondaryCol}>
//         <Card title="Product Meta" subtitle="Classification & visibility">
//           {/* ✅ BRAND SELECTOR */}
//           <div style={block}>
//             <Label>Brand</Label>
//             <Controller
//               control={control}
//               name="brand"
//               render={({ field }) => (
//                 <div style={{ minWidth: 0 }}>
//                   <BrandSelector value={field.value} onChange={field.onChange} />
//                 </div>
//               )}
//             />
//             <FieldError msg={errors.brand?.message as string | undefined} />
//           </div>

//           {/* ✅ CATEGORY SELECTOR */}
//           <div style={block}>
//             <Label>Main / Sub Category</Label>
//             <Controller
//               control={control}
//               name="main_category"
//               render={({ field: mainField }) => (
//                 <Controller
//                   control={control}
//                   name="sub_category"
//                   render={({ field: subField }) => (
//                     <div style={{ minWidth: 0 }}>
//                       <AdminCategorySelector
//                         mainValue={mainField.value}
//                         subValue={subField.value}
//                         onMainChange={(v) => mainField.onChange(v)}
//                         onSubChange={(v) => subField.onChange(v)}
//                       />
//                     </div>
//                   )}
//                 />
//               )}
//             />
//             <FieldError
//               msg={errors.main_category?.message as string | undefined}
//             />
//             <FieldError
//               msg={errors.sub_category?.message as string | undefined}
//             />
//           </div>

//           <div style={switchRow}>
//             <div>
//               <div style={switchTitle}>Active Product</div>
//               <div style={switchHint}>Inactive products won’t show to customers</div>
//             </div>
//             <Switch {...register("is_active")} />
//           </div>
//         </Card>

//         <Card title="Discovery & Marketing" subtitle="Search & merchandising controls">
//           {/* ✅ TAG SELECTOR */}
//           <div style={block}>
//             <Label>Tags</Label>
//             <div style={{ minWidth: 0 }}>
//               <Controller
//                 control={control}
//                 name="tags"
//                 render={({ field }) => (
//                   <TagSelector
//                     value={field.value ?? []}
//                     onChange={field.onChange}
//                   />
//                 )}
//               />
//             </div>
//             <FieldError msg={errors.tags?.message as string | undefined} />
//             <HintText>Tip: Use tags like “Organic”, “Cold Pressed”, “Best Seller”</HintText>
//           </div>

//           <FloatingInput label="Search Keywords" hint="Comma separated. Helps internal search.">
//             <input
//               style={inputBase}
//               onBlur={(e) =>
//                 setValue("search_keywords", toArray(e.target.value))
//               }
//               defaultValue={initialValues?.search_keywords?.join(", ") ?? ""}
//             />
//             <FieldError
//               msg={errors.search_keywords?.message as string | undefined}
//             />
//           </FloatingInput>

//           <FloatingInput label="Synonyms" hint="Comma separated. Alternate spellings/names.">
//             <input
//               style={inputBase}
//               onBlur={(e) => setValue("synonyms", toArray(e.target.value))}
//               defaultValue={initialValues?.synonyms?.join(", ") ?? ""}
//             />
//             <FieldError msg={errors.synonyms?.message as string | undefined} />
//           </FloatingInput>

//           {/* BADGES AS CHIPS */}
//           <div style={{ marginTop: 10 }}>
//             <div style={badgeTitleRow}>
//               <div style={badgeTitle}>Badges</div>
//               <div style={badgeHint}>Max 2</div>
//             </div>

//             <div style={badgeWrap}>
//               {BADGE_OPTIONS.map((b) => {
//                 const active = badges.includes(b);
//                 return (
//                   <button
//                     type="button"
//                     key={b}
//                     style={{
//                       ...badgeChip,
//                       ...(active ? badgeChipActive : null),
//                     }}
//                     onClick={() => {
//                       if (!active && badges.length >= 2) return;
//                       setValue(
//                         "badges",
//                         active ? badges.filter((x) => x !== b) : [...badges, b],
//                         { shouldDirty: true }
//                       );
//                     }}
//                   >
//                     {b}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <div style={switchRow}>
//             <div>
//               <div style={switchTitle}>Featured Product</div>
//               <div style={switchHint}>Show on home / highlight sections</div>
//             </div>
//             <Switch {...register("is_featured")} />
//           </div>
//         </Card>

//         {/* Sticky save bar */}
//         <div style={saveBar}>
//           <button
//             type="submit"
//             style={{
//               ...saveBtn,
//               opacity: isSubmitting ? 0.75 : 1,
//               cursor: isSubmitting ? "not-allowed" : "pointer",
//             }}
//             disabled={isSubmitting}
//           >
//             {isSubmitting ? "Saving..." : submitLabel}
//           </button>

//           <div style={saveMeta}>
//             <span style={dot} />
//             <span style={saveMetaText}>
//               {isDirty ? "Unsaved changes" : "All changes saved"}
//             </span>
//           </div>
//         </div>
//       </aside>
//     </form>
//   );
// }

// /* ================= HELPERS ================= */

// const toArray = (v?: string) =>
//   v
//     ?.split(",")
//     .map((s) => s.trim())
//     .filter(Boolean) ?? [];

// /* ================= UI HELPERS ================= */

// function Card({
//   title,
//   subtitle,
//   children,
// }: {
//   title: string;
//   subtitle?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={card}>
//       <div style={cardHeader}>
//         <div style={{ minWidth: 0 }}>
//           <h3 style={cardTitle}>{title}</h3>
//           {subtitle && <p style={cardSubtitle}>{subtitle}</p>}
//         </div>
//       </div>
//       <div style={{ minWidth: 0 }}>{children}</div>
//     </div>
//   );
// }

// function Row({ children }: { children: React.ReactNode }) {
//   return <div style={row}>{children}</div>;
// }

// function FloatingInput({
//   label,
//   hint,
//   required,
//   children,
// }: {
//   label: string;
//   hint?: string;
//   required?: boolean;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={inputWrapper}>
//       <div style={labelRow}>
//         <label style={floatingLabel}>
//           {label} {required ? <span style={req}>*</span> : null}
//         </label>
//         {hint ? <span style={miniHint}>{hint}</span> : null}
//       </div>
//       {children}
//     </div>
//   );
// }

// function FieldError({ msg }: { msg?: string }) {
//   if (!msg) return null;
//   return <div style={errorText}>{msg}</div>;
// }

// function Label({ children }: { children: React.ReactNode }) {
//   return <div style={plainLabel}>{children}</div>;
// }

// function HintText({ children }: { children: React.ReactNode }) {
//   return <div style={hintText}>{children}</div>;
// }

// function Switch(props: React.InputHTMLAttributes<HTMLInputElement>) {
//   return (
//     <label style={switchWrap}>
//       <input type="checkbox" style={switchInput} {...props} />
//       <span style={switchTrack} />
//       <span style={switchThumb} />
//     </label>
//   );
// }

// /* ================= STYLES ================= */

// const pageGrid: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "minmax(0, 1fr) 360px",
//   gap: 24,
//   alignItems: "start",
//   paddingBottom: 12,
// };

// const primaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 18,
//   minWidth: 0,
// };

// const secondaryCol: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 14,
//   position: "sticky",
//   top: 18,
//   minWidth: 360,
//   maxWidth: 360,
//   width: 360,
//   minHeight: "calc(100vh - 28px)",
//   alignSelf: "start",
// };

// const pageHeader: React.CSSProperties = {
//   background: "#ffffff",
//   borderRadius: 18,
//   padding: "18px 20px",
//   boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
//   minWidth: 0,
//   overflow: "hidden",
// };

// const pageH1: React.CSSProperties = {
//   margin: 0,
//   fontSize: 18,
//   fontWeight: 900,
//   color: "#111827",
//   whiteSpace: "nowrap",
//   overflow: "hidden",
//   textOverflow: "ellipsis",
// };

// const pageHint: React.CSSProperties = {
//   margin: "6px 0 0",
//   fontSize: 13,
//   color: "#6B7280",
//   lineHeight: 1.4,
// };

// const card: React.CSSProperties = {
//   background: "#ffffff",
//   borderRadius: 18,
//   padding: 18,
//   boxShadow: "0 8px 26px rgba(0,0,0,0.08)",
//   minWidth: 0,
//   overflow: "hidden",
//   boxSizing: "border-box",
// };

// const cardHeader: React.CSSProperties = {
//   marginBottom: 14,
//   paddingBottom: 12,
//   borderBottom: "1px solid #f1f1f1",
// };

// const cardTitle: React.CSSProperties = {
//   fontSize: 15,
//   fontWeight: 900,
//   margin: 0,
// };

// const cardSubtitle: React.CSSProperties = {
//   margin: "6px 0 0",
//   fontSize: 12,
//   color: "#6B7280",
// };

// const row: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
//   gap: 12,
//   minWidth: 0,
// };

// const inputWrapper: React.CSSProperties = {
//   position: "relative",
//   marginBottom: 14,
//   minWidth: 0,
// };

// const labelRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   gap: 10,
//   marginBottom: 6,
// };

// const floatingLabel: React.CSSProperties = {
//   fontSize: 12,
//   fontWeight: 800,
//   color: "#374151",
// };

// const req: React.CSSProperties = {
//   color: "#b42318",
//   fontWeight: 900,
// };

// const miniHint: React.CSSProperties = {
//   fontSize: 11,
//   color: "#9CA3AF",
//   whiteSpace: "nowrap",
//   overflow: "hidden",
//   textOverflow: "ellipsis",
// };

// const inputBase: React.CSSProperties = {
//   width: "100%",
//   padding: "12px 12px",
//   borderRadius: 14,
//   border: "1px solid #E5E7EB",
//   background: "#FAFAFA",
//   fontSize: 14,
//   outline: "none",
//   boxSizing: "border-box",
// };

// const textareaBase: React.CSSProperties = {
//   ...inputBase,
//   minHeight: 88,
//   resize: "vertical",
// };

// const textareaBaseLg: React.CSSProperties = {
//   ...inputBase,
//   minHeight: 140,
//   resize: "vertical",
// };

// const errorText: React.CSSProperties = {
//   marginTop: 6,
//   fontSize: 12,
//   color: "#B42318",
//   fontWeight: 700,
// };

// const switchRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   paddingTop: 14,
//   marginTop: 10,
//   borderTop: "1px solid #eee",
//   gap: 12,
// };

// const switchTitle: React.CSSProperties = {
//   fontWeight: 900,
//   fontSize: 13,
//   color: "#111827",
// };

// const switchHint: React.CSSProperties = {
//   fontSize: 12,
//   color: "#6B7280",
//   marginTop: 2,
// };

// const switchWrap: React.CSSProperties = {
//   position: "relative",
//   width: 46,
//   height: 26,
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

// const switchInput: React.CSSProperties = {
//   position: "absolute",
//   opacity: 0,
//   width: 46,
//   height: 26,
//   margin: 0,
//   cursor: "pointer",
//   zIndex: 2,
// };

// const switchTrack: React.CSSProperties = {
//   position: "absolute",
//   inset: 0,
//   borderRadius: 999,
//   background: "#E5E7EB",
// };

// const switchThumb: React.CSSProperties = {
//   position: "absolute",
//   width: 20,
//   height: 20,
//   borderRadius: 999,
//   background: "#ffffff",
//   boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
//   left: 3,
//   transition: "transform 0.18s ease",
//   transform: "translateX(0px)",
// };

// const block: React.CSSProperties = {
//   minWidth: 0,
//   overflow: "hidden",
// };

// const plainLabel: React.CSSProperties = {
//   fontSize: 12,
//   fontWeight: 900,
//   color: "#374151",
//   marginBottom: 6,
// };

// const hintText: React.CSSProperties = {
//   marginTop: 8,
//   fontSize: 12,
//   color: "#6B7280",
// };

// const badgeTitleRow: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 10,
// };

// const badgeTitle: React.CSSProperties = {
//   fontWeight: 900,
//   color: "#111827",
// };

// const badgeHint: React.CSSProperties = {
//   fontSize: 12,
//   color: "#6B7280",
//   fontWeight: 700,
// };

// const badgeWrap: React.CSSProperties = {
//   display: "flex",
//   flexWrap: "wrap",
//   gap: 10,
// };

// const badgeChip: React.CSSProperties = {
//   border: "1px solid #E5E7EB",
//   background: "#F9FAFB",
//   color: "#111827",
//   borderRadius: 999,
//   padding: "8px 12px",
//   fontSize: 12,
//   fontWeight: 900,
//   cursor: "pointer",
//   transition: "all 0.12s ease",
// };

// const badgeChipActive: React.CSSProperties = {
//   background: "#bf9602",
//   borderColor: "#bf9602",
//   color: "#fff",
// };

// const saveBar: React.CSSProperties = {
//   position: "sticky",
//   bottom: 12,
//   background: "transparent",
//   display: "flex",
//   flexDirection: "column",
//   gap: 10,
// };

// const saveBtn: React.CSSProperties = {
//   backgroundColor: "#bf9602",
//   padding: "14px 14px",
//   borderRadius: 16,
//   border: "none",
//   color: "#fff",
//   fontWeight: 900,
//   fontSize: 15,
//   width: "100%",
//   boxSizing: "border-box",
// };

// const saveMeta: React.CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   gap: 8,
//   background: "#ffffff",
//   border: "1px solid #f1f1f1",
//   borderRadius: 14,
//   padding: "10px 12px",
//   boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
// };

// const dot: React.CSSProperties = {
//   width: 8,
//   height: 8,
//   borderRadius: 999,
//   background: "#bf9602",
// };

// const saveMetaText: React.CSSProperties = {
//   fontSize: 12,
//   color: "#6B7280",
//   fontWeight: 800,
// };



// ///////////////


// import React, { useEffect, useMemo } from "react";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { productSchema } from "../schema";
// import type { ProductFormValues } from "../schema";
// import AttributesEditor from "./AttributesEditor";
// import AdminCategorySelector from "@/shared/selectors/AdminCategorySelector";
// import BrandSelector from "@/shared/selectors/BrandSelector";
// import TagSelector from "@/shared/selectors/TagSelector";

// type Props = {
//   initialValues?: Partial<ProductFormValues> & { id?: string };
//   onSubmit: (values: ProductFormValues) => void;
//   submitLabel?: string;
// };

// const BADGE_OPTIONS = [
//   "BEST_SELLER",
//   "TRENDING",
//   "NEW",
//   "ORGANIC",
//   "LOW_PRICE",
//   "LIMITED_STOCK",
//   "OFFER",
// ];

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
//       tags: [],
//       search_keywords: [],
//       synonyms: [],
//       badges: [],
//       is_featured: false,
//     },
//     mode: "onSubmit",
//   });

//   const {
//     register,
//     handleSubmit,
//     control,
//     watch,
//     reset,
//     setValue,
//     formState: { errors, isSubmitting, isDirty },
//   } = form;

//   /* ================= RESET SAFE ================= */
//   useEffect(() => {
//     if (!initialValues?.id) return;

//     reset({
//       ...initialValues,
//       attributes_schema: initialValues.attributes_schema ?? undefined,
//       tags: initialValues.tags ?? [],
//       search_keywords: initialValues.search_keywords ?? [],
//       synonyms: initialValues.synonyms ?? [],
//       badges: initialValues.badges ?? [],
//       is_featured: initialValues.is_featured ?? false,
//     });
//   }, [initialValues?.id, reset]);

//   const submitHandler = handleSubmit(onSubmit);

//   const badges = watch("badges") || [];

//   const pageTitle = useMemo(() => {
//     const name = watch("name")?.trim();
//     return name ? `Editing: ${name}` : "Create / Edit Product";
//   }, [watch("name")]);

//   return (
//     <form onSubmit={submitHandler} style={pageGrid}>
//       {/* ================= LEFT ================= */}
//       <section style={primaryCol}>
//         <div style={pageHeader}>
//           <h2 style={pageH1}>{pageTitle}</h2>
//           <p style={pageHint}>
//             Keep fields clean & consistent. This impacts search, filtering,
//             and customer experience.
//           </p>
//         </div>

//         <Card title="Product Information" subtitle="Core details shown to customers">
//           <FloatingInput label="Product Name" required>
//             <input {...register("name")} style={inputBase} />
//             <FieldError msg={errors.name?.message} />
//           </FloatingInput>

//           <FloatingInput label="Slug">
//             <input {...register("slug")} style={inputBase} />
//             <FieldError msg={errors.slug?.message} />
//           </FloatingInput>

//           <FloatingInput label="Short Description">
//             <textarea {...register("short_description")} style={textareaBase} />
//           </FloatingInput>

//           <FloatingInput label="Description">
//             <textarea {...register("description")} style={textareaBaseLg} />
//           </FloatingInput>
//         </Card>

//         <Card title="Pricing & Inventory">
//           <Row>
//             <FloatingInput label="MRP">
//               <input type="number" {...register("mrp", { valueAsNumber: true })} style={inputBase} />
//             </FloatingInput>

//             <FloatingInput label="Selling Price" required>
//               <input type="number" {...register("price", { valueAsNumber: true })} style={inputBase} />
//               <FieldError msg={errors.price?.message} />
//             </FloatingInput>
//           </Row>

//           <FloatingInput label="Stock" required>
//             <input type="number" {...register("stock", { valueAsNumber: true })} style={inputBase} />
//           </FloatingInput>
//         </Card>

//         <Card title="Product Attributes">
//           <Controller
//             control={control}
//             name="attributes_schema"
//             render={({ field }) => (
//               <div style={{ minWidth: 0, width: "100%" }}>
//                 <AttributesEditor value={field.value} onChange={field.onChange} />
//               </div>
//             )}
//           />
//         </Card>
//       </section>

//       {/* ================= RIGHT ================= */}
//       <aside style={secondaryCol}>
//         <Card title="Product Meta">
//           <Block>
//             <Label>Brand</Label>
//             <Controller
//               control={control}
//               name="brand"
//               render={({ field }) => (
//                 <div style={{ width: "100%" }}>
//                   <BrandSelector value={field.value} onChange={field.onChange} />
//                 </div>
//               )}
//             />
//           </Block>

//           <Block>
//             <Label>Main / Sub Category</Label>
//             <Controller
//               control={control}
//               name="main_category"
//               render={({ field: mainField }) => (
//                 <Controller
//                   control={control}
//                   name="sub_category"
//                   render={({ field: subField }) => (
//                     <AdminCategorySelector
//                       mainValue={mainField.value}
//                       subValue={subField.value}
//                       onMainChange={mainField.onChange}
//                       onSubChange={subField.onChange}
//                     />
//                   )}
//                 />
//               )}
//             />
//           </Block>

//           <SwitchRow>
//             <div>
//               <SwitchTitle>Active Product</SwitchTitle>
//               <SwitchHint>Visible to customers</SwitchHint>
//             </div>
//             <Switch {...register("is_active")} checked={watch("is_active")} />
//           </SwitchRow>
//         </Card>

//         <Card title="Discovery & Marketing">
//           <Block>
//             <Label>Tags</Label>
//             <Controller
//               control={control}
//               name="tags"
//               render={({ field }) => (
//                 <TagSelector value={field.value ?? []} onChange={field.onChange} />
//               )}
//             />
//           </Block>

//           <FloatingInput label="Search Keywords">
//             <input
//               style={inputBase}
//               onBlur={(e) =>
//                 setValue(
//                   "search_keywords",
//                   e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
//                 )
//               }
//             />
//           </FloatingInput>

//           <FloatingInput label="Synonyms">
//             <input
//               style={inputBase}
//               onBlur={(e) =>
//                 setValue(
//                   "synonyms",
//                   e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
//                 )
//               }
//             />
//           </FloatingInput>

//           {/* BADGES */}
//           <div style={{ marginTop: 10 }}>
//             <div style={badgeWrap}>
//               {BADGE_OPTIONS.map((b) => {
//                 const active = badges.includes(b);
//                 return (
//                   <button
//                     type="button"
//                     key={b}
//                     style={{
//                       ...badgeChip,
//                       ...(active ? badgeChipActive : {}),
//                     }}
//                     onClick={() => {
//                       if (!active && badges.length >= 2) return;
//                       setValue(
//                         "badges",
//                         active
//                           ? badges.filter((x) => x !== b)
//                           : [...badges, b]
//                       );
//                     }}
//                   >
//                     {b}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           <SwitchRow>
//             <div>
//               <SwitchTitle>Featured Product</SwitchTitle>
//             </div>
//             <Switch {...register("is_featured")} checked={watch("is_featured")} />
//           </SwitchRow>
//         </Card>

//         <div style={saveBar}>
//           <button type="submit" style={saveBtn} disabled={isSubmitting}>
//             {isSubmitting ? "Saving..." : submitLabel}
//           </button>

//           <div style={saveMeta}>
//             <span style={dot} />
//             <span style={saveMetaText}>
//               {isDirty ? "Unsaved changes" : "All changes saved"}
//             </span>
//           </div>
//         </div>
//       </aside>
//     </form>
//   );
// }

// /* ================= UI COMPONENTS ================= */

// function Card({ title, subtitle, children }: any) {
//   return (
//     <div style={card}>
//       <div style={cardHeader}>
//         <h3 style={cardTitle}>{title}</h3>
//         {subtitle && <p style={cardSubtitle}>{subtitle}</p>}
//       </div>
//       {children}
//     </div>
//   );
// }

// const Block = ({ children }: any) => (
//   <div style={{ marginBottom: 16 }}>{children}</div>
// );

// const Row = ({ children }: any) => (
//   <div style={row}>{children}</div>
// );

// const FloatingInput = ({ label, required, children }: any) => (
//   <div style={{ marginBottom: 16 }}>
//     <label style={floatingLabel}>
//       {label} {required && "*"}
//     </label>
//     {children}
//   </div>
// );

// const FieldError = ({ msg }: any) =>
//   msg ? <div style={{ color: "#b42318", fontSize: 12 }}>{msg}</div> : null;

// const Label = ({ children }: any) => (
//   <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>
//     {children}
//   </div>
// );

// const SwitchRow = ({ children }: any) => (
//   <div style={switchRow}>{children}</div>
// );

// const SwitchTitle = ({ children }: any) => (
//   <div style={{ fontWeight: 800 }}>{children}</div>
// );

// const SwitchHint = ({ children }: any) => (
//   <div style={{ fontSize: 12, color: "#6b7280" }}>{children}</div>
// );

// function Switch({ checked, ...props }: any) {
//   return (
//     <label style={switchWrap}>
//       <input type="checkbox" checked={checked} {...props} style={switchInput} />
//       <span
//         style={{
//           ...switchTrack,
//           background: checked ? "#bf9602" : "#E5E7EB",
//         }}
//       />
//       <span
//         style={{
//           ...switchThumb,
//           transform: checked ? "translateX(20px)" : "translateX(0px)",
//         }}
//       />
//     </label>
//   );
// }

// /* ================= STYLES ================= */

// const pageGrid = {
//   display: "grid",
//   gridTemplateColumns: "minmax(0, 1fr) 360px",
//   gap: 14,
// };

// const primaryCol = { display: "flex", flexDirection: "column", gap: 18 };
// const secondaryCol = {
//   display: "flex",
//   flexDirection: "column",
//   gap: 14,
//   position: "sticky",
//   top: 18,
//   width: 360,
// };

// const pageHeader = {
//   background: "#fff",
//   padding: 18,
//   borderRadius: 18,
//   boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
// };

// const pageH1 = { margin: 0, fontSize: 18, fontWeight: 900 };
// const pageHint = { fontSize: 13, color: "#6b7280" };

// const card = {
//   background: "#fff",
//   padding: 18,
//   borderRadius: 18,
//   boxShadow: "0 8px 26px rgba(0,0,0,0.08)",
// };

// const cardHeader = { marginBottom: 14 };
// const cardTitle = { margin: 0, fontWeight: 900 };
// const cardSubtitle = { fontSize: 12, color: "#6b7280" };

// const row = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 12,
// };

// const floatingLabel = {
//   fontSize: 12,
//   fontWeight: 800,
//   display: "block",
//   marginBottom: 6,
// };

// const inputBase = {
//   width: "95%",
//   padding: "12px",
//   borderRadius: 14,
//   border: "1px solid #E5E7EB",
//   background: "#FAFAFA",
//   fontSize: 14,
  
  
// };

// const textareaBase = { ...inputBase, minHeight: 90 };
// const textareaBaseLg = { ...inputBase, minHeight: 140 };

// const switchRow = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginTop: 16,
// };

// const switchWrap = { position: "relative", width: 46, height: 26 };
// const switchInput = { opacity: 0, width: 46, height: 26 };
// const switchTrack = {
//   position: "absolute",
//   inset: 0,
//   borderRadius: 999,
//   background: "#E5E7EB",
// };
// const switchThumb = {
//   position: "absolute",
//   width: 20,
//   height: 20,
//   borderRadius: 999,
//   background: "#fff",
//   top: 3,
//   left: 3,
//   transition: "transform 0.18s ease",
// };

// const badgeWrap = { display: "flex", flexWrap: "wrap", gap: 8 };
// const badgeChip = {
//   border: "1px solid #E5E7EB",
//   background: "#F9FAFB",
//   borderRadius: 999,
//   padding: "6px 10px",
//   fontWeight: 800,
//   cursor: "pointer",
// };
// const badgeChipActive = {
//   background: "#bf9602",
//   color: "#fff",
//   borderColor: "#bf9602",
// };

// const saveBar = { marginTop: 12 };
// const saveBtn = {
//   backgroundColor: "#bf9602",
//   padding: 14,
//   borderRadius: 16,
//   border: "none",
//   color: "#fff",
//   fontWeight: 900,
//   width: "100%",
// };

// const saveMeta = {
//   marginTop: 10,
//   display: "flex",
//   alignItems: "center",
//   gap: 8,
//   fontSize: 12,
//   color: "#6b7280",
// };

// const dot = {
//   width: 8,
//   height: 8,
//   borderRadius: 999,
//   background: "#bf9602",
// };

// const saveMetaText = { fontWeight: 800 };






/////////////////






import React, { useEffect, useMemo } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../schema";
import type { ProductFormValues } from "../schema";
import AttributesEditor from "./AttributesEditor";
import AdminCategorySelector from "@/shared/selectors/AdminCategorySelector";
import BrandSelector from "@/shared/selectors/BrandSelector";
import TagSelector from "@/shared/selectors/TagSelector";

type Props = {
  initialValues?: Partial<ProductFormValues> & { id?: string };
  onSubmit: (values: ProductFormValues) => void;
  submitLabel?: string;
};

const BADGE_OPTIONS = [
  "BEST_SELLER",
  "TRENDING",
  "NEW",
  "ORGANIC",
  "LOW_PRICE",
  "LIMITED_STOCK",
  "OFFER",
];

export default function ProductForm({
  initialValues,
  onSubmit,
  submitLabel = "Save Product",
}: Props) {
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
      tags: [],
      search_keywords: [],
      synonyms: [],
      badges: [],
      is_featured: false,
    },
    mode: "onSubmit",
  });

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting, isDirty },
  } = form;

  /* ================= RESET SAFE ================= */
  useEffect(() => {
    if (!initialValues?.id) return;

    reset({
      ...initialValues,
      attributes_schema: initialValues.attributes_schema ?? undefined,
      tags: initialValues.tags ?? [],
      search_keywords: initialValues.search_keywords ?? [],
      synonyms: initialValues.synonyms ?? [],
      badges: initialValues.badges ?? [],
      is_featured: initialValues.is_featured ?? false,
    });
  }, [initialValues?.id, reset]);

  const submitHandler = handleSubmit(onSubmit);

  const badges = watch("badges") || [];

  const pageTitle = useMemo(() => {
    const name = watch("name")?.trim();
    return name ? `Editing: ${name}` : "Create / Edit Product";
  }, [watch("name")]);

  return (
    <form onSubmit={submitHandler} style={pageGrid}>
      {/* ================= LEFT ================= */}
      <section style={primaryCol}>
        <div style={pageHeader}>
          <h2 style={pageH1}>{pageTitle}</h2>
          <p style={pageHint}>
            Keep fields clean & consistent. This impacts search, filtering,
            and customer experience.
          </p>
        </div>

        <Card title="Product Information" subtitle="Core details shown to customers">
          <FloatingInput label="Product Name" required>
            <input {...register("name")} style={inputBase} />
            <FieldError msg={errors.name?.message} />
          </FloatingInput>

          <FloatingInput label="Slug">
            <input {...register("slug")} style={inputBase} />
            <FieldError msg={errors.slug?.message} />
          </FloatingInput>

          <FloatingInput label="Short Description">
            <textarea {...register("short_description")} style={textareaBase} />
          </FloatingInput>

          <FloatingInput label="Description">
            <textarea {...register("description")} style={textareaBaseLg} />
          </FloatingInput>
        </Card>

        <Card title="Pricing & Inventory">
          <Row>
            <FloatingInput label="MRP">
              <input type="number" {...register("mrp", { valueAsNumber: true })} style={inputBase} />
            </FloatingInput>

            <FloatingInput label="Selling Price" required>
              <input type="number" {...register("price", { valueAsNumber: true })} style={inputBase} />
              <FieldError msg={errors.price?.message} />
            </FloatingInput>
          </Row>

          <FloatingInput label="Stock" required>
            <input type="number" {...register("stock", { valueAsNumber: true })} style={inputBase} />
          </FloatingInput>
        </Card>

        <Card title="Product Attributes">
          <Controller
            control={control}
            name="attributes_schema"
            render={({ field }) => (
              <div style={{ minWidth: 0, width: "100%" }}>
                <AttributesEditor value={field.value} onChange={field.onChange} />
              </div>
            )}
          />
        </Card>
      </section>

      {/* ================= RIGHT ================= */}
      <aside style={secondaryCol}>
        <Card title="Product Meta">
          <Block>
            <Label>Brand</Label>
            <Controller
              control={control}
              name="brand"
              render={({ field }) => (
                <div style={{ width: "100%" }}>
                  <BrandSelector value={field.value} onChange={field.onChange} />
                </div>
              )}
            />
          </Block>

          <Block>
            <Label>Main / Sub Category</Label>
            <Controller
              control={control}
              name="main_category"
              render={({ field: mainField }) => (
                <Controller
                  control={control}
                  name="sub_category"
                  render={({ field: subField }) => (
                    <AdminCategorySelector
                      mainValue={mainField.value}
                      subValue={subField.value}
                      onMainChange={mainField.onChange}
                      onSubChange={subField.onChange}
                    />
                  )}
                />
              )}
            />
          </Block>

          <SwitchRow>
            <div>
              <SwitchTitle>Active Product</SwitchTitle>
              <SwitchHint>Visible to customers</SwitchHint>
            </div>
            <Switch {...register("is_active")} checked={watch("is_active")} />
          </SwitchRow>
        </Card>

        <Card title="Discovery & Marketing">
          <Block>
            <Label>Tags</Label>
            <Controller
              control={control}
              name="tags"
              render={({ field }) => (
                <TagSelector value={field.value ?? []} onChange={field.onChange} />
              )}
            />
          </Block>



{/* SEARCH KEYWORDS */}
<Block>
  <Label>Search Keywords (comma separated)</Label>
  <input
    style={inputBase}
    defaultValue={(watch("search_keywords") || []).join(", ")}
    onBlur={(e) => {
      const parts = e.target.value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      setValue("search_keywords", parts, { shouldDirty: true });
    }}
    placeholder="groundnut oil, chekku oil, cold pressed"
  />
</Block>

{/* SYNONYMS */}
<Block>
  <Label>Synonyms (comma separated)</Label>
  <input
    style={inputBase}
    defaultValue={(watch("synonyms") || []).join(", ")}
    onBlur={(e) => {
      const parts = e.target.value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

      setValue("synonyms", parts, { shouldDirty: true });
    }}
    placeholder="kadalai ennai, marachekku oil"
  />
</Block>






          {/* BADGES */}
          <div style={{ marginTop: 10 }}>
            <div style={badgeWrap}>
              {BADGE_OPTIONS.map((b) => {
                const active = badges.includes(b);
                return (
                  <button
                    type="button"
                    key={b}
                    style={{
                      ...badgeChip,
                      ...(active ? badgeChipActive : {}),
                    }}
                    onClick={() => {
                      if (!active && badges.length >= 2) return;
                      setValue(
                        "badges",
                        active
                          ? badges.filter((x) => x !== b)
                          : [...badges, b]
                      );
                    }}
                  >
                    {b}
                  </button>
                );
              })}
            </div>
          </div>

          <SwitchRow>
            <div>
              <SwitchTitle>Featured Product</SwitchTitle>
            </div>
            <Switch {...register("is_featured")} checked={watch("is_featured")} />
          </SwitchRow>
        </Card>

        <div style={saveBar}>
          <button type="submit" style={saveBtn} disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : submitLabel}
          </button>

          <div style={saveMeta}>
            <span style={dot} />
            <span style={saveMetaText}>
              {isDirty ? "Unsaved changes" : "All changes saved"}
            </span>
          </div>
        </div>
      </aside>
    </form>
  );
}

/* ================= UI COMPONENTS ================= */

function Card({ title, subtitle, children }: any) {
  return (
    <div style={card}>
      <div style={cardHeader}>
        <h3 style={cardTitle}>{title}</h3>
        {subtitle && <p style={cardSubtitle}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

const Block = ({ children }: any) => (
  <div style={{ marginBottom: 16 }}>{children}</div>
);

const Row = ({ children }: any) => (
  <div style={row}>{children}</div>
);

const FloatingInput = ({ label, required, children }: any) => (
  <div style={{ marginBottom: 16 }}>
    <label style={floatingLabel}>
      {label} {required && "*"}
    </label>
    {children}
  </div>
);

const FieldError = ({ msg }: any) =>
  msg ? <div style={{ color: "#b42318", fontSize: 12 }}>{msg}</div> : null;

const Label = ({ children }: any) => (
  <div style={{ fontSize: 12, fontWeight: 800, marginBottom: 6 }}>
    {children}
  </div>
);

const SwitchRow = ({ children }: any) => (
  <div style={switchRow}>{children}</div>
);

const SwitchTitle = ({ children }: any) => (
  <div style={{ fontWeight: 800 }}>{children}</div>
);

const SwitchHint = ({ children }: any) => (
  <div style={{ fontSize: 12, color: "#6b7280" }}>{children}</div>
);

function Switch({ checked, ...props }: any) {
  return (
    <label style={switchWrap}>
      <input type="checkbox" checked={checked} {...props} style={switchInput} />
      <span
        style={{
          ...switchTrack,
          background: checked ? "#bf9602" : "#E5E7EB",
        }}
      />
      <span
        style={{
          ...switchThumb,
          transform: checked ? "translateX(20px)" : "translateX(0px)",
        }}
      />
    </label>
  );
}

/* ================= STYLES ================= */

const pageGrid = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) 360px",
  gap: 14,
};

const primaryCol = { display: "flex", flexDirection: "column", gap: 18 };
const secondaryCol = {
  display: "flex",
  flexDirection: "column",
  gap: 14,
  position: "sticky",
  top: 18,
  width: 360,
};

const pageHeader = {
  background: "#fff",
  padding: 18,
  borderRadius: 18,
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
};

const pageH1 = { margin: 0, fontSize: 18, fontWeight: 900 };
const pageHint = { fontSize: 13, color: "#6b7280" };

const card = {
  background: "#fff",
  padding: 18,
  borderRadius: 18,
  boxShadow: "0 8px 26px rgba(0,0,0,0.08)",
};

const cardHeader = { marginBottom: 14 };
const cardTitle = { margin: 0, fontWeight: 900 };
const cardSubtitle = { fontSize: 12, color: "#6b7280" };

const row = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
};

const floatingLabel = {
  fontSize: 12,
  fontWeight: 800,
  display: "block",
  marginBottom: 6,
};

const inputBase = {
  width: "95%",
  padding: "12px",
  borderRadius: 14,
  border: "1px solid #E5E7EB",
  background: "#FAFAFA",
  fontSize: 14,
  
  
};

const textareaBase = { ...inputBase, minHeight: 90 };
const textareaBaseLg = { ...inputBase, minHeight: 140 };

const switchRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: 16,
};

const switchWrap = { position: "relative", width: 46, height: 26 };
const switchInput = { opacity: 0, width: 46, height: 26 };
const switchTrack = {
  position: "absolute",
  inset: 0,
  borderRadius: 999,
  background: "#E5E7EB",
};
const switchThumb = {
  position: "absolute",
  width: 20,
  height: 20,
  borderRadius: 999,
  background: "#fff",
  top: 3,
  left: 3,
  transition: "transform 0.18s ease",
};

const badgeWrap = { display: "flex", flexWrap: "wrap", gap: 8 };
const badgeChip = {
  border: "1px solid #E5E7EB",
  background: "#F9FAFB",
  borderRadius: 999,
  padding: "6px 10px",
  fontWeight: 800,
  cursor: "pointer",
};
const badgeChipActive = {
  background: "#bf9602",
  color: "#fff",
  borderColor: "#bf9602",
};

const saveBar = { marginTop: 12 };
const saveBtn = {
  backgroundColor: "#bf9602",
  padding: 14,
  borderRadius: 16,
  border: "none",
  color: "#fff",
  fontWeight: 900,
  width: "100%",
};

const saveMeta = {
  marginTop: 10,
  display: "flex",
  alignItems: "center",
  gap: 8,
  fontSize: 12,
  color: "#6b7280",
};

const dot = {
  width: 8,
  height: 8,
  borderRadius: 999,
  background: "#bf9602",
};

const saveMetaText = { fontWeight: 800 };




