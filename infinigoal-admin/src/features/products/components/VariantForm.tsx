// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { variantSchema } from "../schema";
// import type { VariantFormValues } from "../schema";

// type Props = {
//   onSave: (variant: VariantFormValues) => void;
//   onCancel: () => void;
// };

// export default function VariantForm({ onSave, onCancel }: Props) {
//   const form = useForm<VariantFormValues>({
//     resolver: zodResolver(variantSchema),
//     defaultValues: {
//       variant_name: "",
//       short_label: "",
//       price: 1,
//       mrp: undefined,
//       stock: 0,
//       attributes: {},
//       is_default: false,
//     },
//     mode: "onSubmit",
//   });

//   const { register, handleSubmit, formState } = form;
//   const { errors } = formState;

//   const submit = (values: VariantFormValues) => {
//     console.log("✅ VARIANT SUBMIT:", values);
//     onSave(values);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit(submit)}
//       style={{
//         border: "1px solid #e5e7eb",
//         borderRadius: 10,
//         padding: 16,
//         marginTop: 12,
//       }}
//     >
//       <h4 style={{ marginTop: 0 }}>Add Variant</h4>

//       <Field label="Variant Name" error={errors.variant_name?.message}>
//         <input
//           placeholder="e.g., 500g Pack"
//           {...register("variant_name")}
//           style={inputStyle}
//         />
//       </Field>

//       <Field label="Short Label" error={errors.short_label?.message}>
//         <input
//           placeholder="e.g., 500g"
//           {...register("short_label")}
//           style={inputStyle}
//         />
//       </Field>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         <Field label="Price" error={errors.price?.message}>
//           <input
//             type="number"
//             placeholder="Price"
//             {...register("price", { valueAsNumber: true })}
//             style={inputStyle}
//           />
//         </Field>

//         <Field label="MRP" error={errors.mrp?.message}>
//           <input
//             type="number"
//             placeholder="MRP"
//             {...register("mrp", { valueAsNumber: true })}
//             style={inputStyle}
//           />
//         </Field>
//       </div>

//       <Field label="Stock" error={errors.stock?.message}>
//         <input
//           type="number"
//           placeholder="Stock"
//           {...register("stock", { valueAsNumber: true })}
//           style={inputStyle}
//         />
//       </Field>

//       <Field label="Attributes (JSON)" error={errors.attributes?.message as string | undefined}>
//         <textarea
//           placeholder='{"weight":"500g","type":"organic"}'
//           {...register("attributes")}
//           style={textareaStyle}
//         />
//       </Field>

//       <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
//         <input type="checkbox" {...register("is_default")} />
//         Default Variant
//       </label>

//       <div style={{ display: "flex", gap: 10 }}>
//         <button type="submit" style={btnPrimary}>
//           Save Variant
//         </button>
//         <button type="button" onClick={onCancel} style={btnSecondary}>
//           Cancel
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
//     <div style={{ marginBottom: 12 }}>
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

// const btnSecondary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };



/////////////////

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { variantSchema } from "../schema";
// import type { VariantFormValues, VariantUI } from "../schema";

// type Props = {
//   onSave: (variant: VariantUI) => void;
//   onCancel: () => void;
// };

// export default function VariantForm({ onSave, onCancel }: Props) {
//   const form = useForm<VariantFormValues>({
//     resolver: zodResolver(variantSchema),
//     defaultValues: {
//       variant_name: "",
//       short_label: "",
//       price: 1,
//       mrp: undefined,
//       stock: 0,
//       attributes: undefined,
//       is_default: false,
//     },
//   });

//   const { register, handleSubmit, formState } = form;
//   const { errors } = formState;

//   const submit = (values: VariantFormValues) => {
//     const uiVariant: VariantUI = {
//       id: crypto.randomUUID(),
//       images: [],
//       ...values,
//     };

//     console.log("✅ VARIANT UI:", uiVariant);
//     onSave(uiVariant);
//   };

//   return (
//     <form onSubmit={handleSubmit(submit)} style={panel}>
//       <h4>Add Variant</h4>

//       <Field label="Variant Name" error={errors.variant_name?.message}>
//         <input {...register("variant_name")} style={input} />
//       </Field>

//       <Field label="Short Label">
//         <input {...register("short_label")} style={input} />
//       </Field>

//       <Field label="Price" error={errors.price?.message}>
//         <input type="number" {...register("price", { valueAsNumber: true })} style={input} />
//       </Field>

//       <Field label="MRP">
//         <input type="number" {...register("mrp", { valueAsNumber: true })} style={input} />
//       </Field>

//       <Field label="Stock" error={errors.stock?.message}>
//         <input type="number" {...register("stock", { valueAsNumber: true })} style={input} />
//       </Field>

//       <Field label="Attributes (JSON)">
//         <textarea {...register("attributes")} style={textarea} />
//       </Field>

//       <label style={{ display: "flex", gap: 8, marginBottom: 12 }}>
//         <input type="checkbox" {...register("is_default")} />
//         Default Variant
//       </label>

//       <div style={{ display: "flex", gap: 10 }}>
//         <button type="submit" style={btnPrimary}>Save</button>
//         <button type="button" onClick={onCancel} style={btnSecondary}>Cancel</button>
//       </div>
//     </form>
//   );
// }

// function Field({ label, error, children }: any) {
//   return (
//     <div style={{ marginBottom: 12 }}>
//       <div style={{ fontWeight: 600 }}>{label}</div>
//       {children}
//       {error && <div style={{ color: "#b91c1c" }}>{error}</div>}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const panel: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 16,
//   marginTop: 12,
// };

// const input: React.CSSProperties = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #e5e7eb",
// };

// const textarea: React.CSSProperties = {
//   ...input,
//   minHeight: 80,
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   background: "#111827",
//   color: "white",
//   border: "1px solid #111827",
// };

// const btnSecondary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
// };



///////////////////////////


// import { z } from "zod";
// import type { ProductImageUI } from "@/features/images/types";

// /* =========================================================
//    JSONB SAFE TYPE
// ========================================================= */
// export type JsonObject = Record<string, unknown>;

// /** Strict JSON object schema for jsonb */
// const jsonObjectSchema = z.record(z.string(), z.unknown());

// /**
//  * Accept:
//  * - object (from AttributesEditor)
//  * - stringified JSON (from textarea)
//  * - empty/undefined -> undefined
//  */
// const jsonObjectFromInput = z.preprocess((val): JsonObject | undefined => {
//   if (val === undefined || val === null || val === "") return undefined;

//   // already an object
//   if (typeof val === "object") return val as JsonObject;

//   // string fallback
//   if (typeof val === "string") {
//     try {
//       return JSON.parse(val) as JsonObject;
//     } catch {
//       // IMPORTANT: let Zod show validation message instead of throwing here
//       return undefined;
//     }
//   }

//   return undefined;
// }, jsonObjectSchema);

// /* =========================================================
//    PRODUCT SCHEMA (maps to public.products)
// ========================================================= */
// export const productSchema = z.object({
//   name: z.string().min(3, "Product name must be at least 3 characters"),
//   slug: z.string().min(3, "Slug must be at least 3 characters"),

//   short_description: z.string().optional(),
//   description: z.string().min(10, "Description must be at least 10 characters"),

//   brand: z.string().optional(),

//   main_category: z.string().min(2, "Main category is required"),
//   sub_category: z.string().optional(),

//   mrp: z.number().optional(),
//   price: z.number().positive("Price must be greater than 0"),

//   stock: z.number().int().nonnegative("Stock cannot be negative"),
//   is_active: z.boolean(),

//   attributes_schema: jsonObjectFromInput.optional(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;

// /* =========================================================
//    VARIANT SCHEMA (maps to public.product_variants)
//    ✅ FIXED: attributes now resolves to JsonObject | undefined
// ========================================================= */
// export const variantSchema = z.object({
//   variant_name: z.string().min(2, "Variant name is required"),
//   short_label: z.string().optional(),

//   price: z.number().positive("Variant price must be greater than 0"),
//   mrp: z.number().optional(),

//   stock: z.number().int().nonnegative("Stock cannot be negative"),
//   is_default: z.boolean(),

//   // ✅ IMPORTANT: preprocess ensures correct inferred type (JsonObject | undefined)
//   attributes: jsonObjectFromInput.optional(),
// });

// export type VariantFormValues = z.infer<typeof variantSchema>;

// /* =========================================================
//    UI-ONLY VARIANT MODEL
// ========================================================= */
// export type VariantUI = VariantFormValues & {
//   id: string; // UI only
//   images: ProductImageUI[];
// };



// /////////////////////////////

// import { useForm, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { variantSchema } from "../schema";
// import type { VariantFormValues, VariantUI } from "../schema";

// type Props = {
//   onSave: (variant: VariantUI) => void;
//   onCancel: () => void;
// };

// export default function VariantForm({ onSave, onCancel }: Props) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<VariantFormValues>({
//     resolver: zodResolver(variantSchema),
//     defaultValues: {
//       variant_name: "",
//       short_label: "",
//       price: 1,
//       mrp: undefined,
//       stock: 0,
//       attributes: undefined,
//       is_default: false,
//     },
//     mode: "onSubmit",
//   });

//   const submit: SubmitHandler<VariantFormValues> = (values) => {
//     const uiVariant: VariantUI = {
//       id: crypto.randomUUID(),
//       images: [],
//       ...values,
//     };

//     console.log("✅ VARIANT UI:", uiVariant);
//     onSave(uiVariant);
//   };

//   return (
//     <form onSubmit={handleSubmit(submit)} style={panel}>
//       <h4 style={{ marginTop: 0 }}>Add Variant</h4>

//       <Field label="Variant Name" error={errors.variant_name?.message}>
//         <input {...register("variant_name")} style={input} />
//       </Field>

//       <Field label="Short Label" error={errors.short_label?.message}>
//         <input {...register("short_label")} style={input} />
//       </Field>

//       <Field label="Price" error={errors.price?.message}>
//         <input
//           type="number"
//           {...register("price", { valueAsNumber: true })}
//           style={input}
//         />
//       </Field>

//       <Field label="MRP" error={errors.mrp?.message}>
//         <input
//           type="number"
//           {...register("mrp", { valueAsNumber: true })}
//           style={input}
//         />
//       </Field>

//       <Field label="Stock" error={errors.stock?.message}>
//         <input
//           type="number"
//           {...register("stock", { valueAsNumber: true })}
//           style={input}
//         />
//       </Field>

//       <Field label="Attributes (JSON)" error={errors.attributes?.message as string | undefined}>
//         <textarea
//           {...register("attributes")}
//           placeholder='{"weight":"500g","type":"organic"}'
//           style={textarea}
//         />
//       </Field>

//       <label style={{ display: "flex", gap: 8, marginBottom: 12 }}>
//         <input type="checkbox" {...register("is_default")} />
//         Default Variant
//       </label>

//       <div style={{ display: "flex", gap: 10 }}>
//         <button type="submit" style={btnPrimary}>Save</button>
//         <button type="button" onClick={onCancel} style={btnSecondary}>Cancel</button>
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
//     <div style={{ marginBottom: 12 }}>
//       <div style={{ fontWeight: 600 }}>{label}</div>
//       {children}
//       {error && <div style={{ color: "#b91c1c", marginTop: 6 }}>{error}</div>}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const panel: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 16,
//   marginTop: 12,
// };

// const input: React.CSSProperties = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #e5e7eb",
// };

// const textarea: React.CSSProperties = {
//   ...input,
//   minHeight: 80,
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   background: "#111827",
//   color: "white",
//   border: "1px solid #111827",
//   cursor: "pointer",
// };

// const btnSecondary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };




//////////////////////


// import { useForm, Controller, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { variantSchema } from "../schema";
// import type { VariantFormValues, VariantUI } from "../schema";

// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   onSave: (variant: VariantUI) => void;
//   onCancel: () => void;
// };

// export default function VariantForm({ onSave, onCancel }: Props) {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<VariantFormValues>({
//     resolver: zodResolver(variantSchema),
//     defaultValues: {
//       variant_name: "",
//       short_label: "",
//       price: 1,
//       mrp: undefined,
//       stock: 0,
//       attributes: undefined,
//       is_default: false,
//     },
//     mode: "onSubmit",
//   });

//   const submit: SubmitHandler<VariantFormValues> = (values) => {
//     const uiVariant: VariantUI = {
//       id: crypto.randomUUID(), // UI-only ID
//       images: [],
//       ...values,
//     };

//     console.log("✅ VARIANT UI:", uiVariant);
//     onSave(uiVariant);
//   };

//   return (
//     <form onSubmit={handleSubmit(submit)} style={panel}>
//       <h4 style={{ marginTop: 0 }}>Add Variant</h4>

//       <Field label="Variant Name" error={errors.variant_name?.message}>
//         <input {...register("variant_name")} style={input} />
//       </Field>

//       <Field label="Short Label" error={errors.short_label?.message}>
//         <input {...register("short_label")} style={input} />
//       </Field>

//       <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
//         <Field label="Price" error={errors.price?.message}>
//           <input
//             type="number"
//             {...register("price", { valueAsNumber: true })}
//             style={input}
//           />
//         </Field>

//         <Field label="MRP" error={errors.mrp?.message}>
//           <input
//             type="number"
//             {...register("mrp", { valueAsNumber: true })}
//             style={input}
//           />
//         </Field>
//       </div>

//       <Field label="Stock" error={errors.stock?.message}>
//         <input
//           type="number"
//           {...register("stock", { valueAsNumber: true })}
//           style={input}
//         />
//       </Field>

//       {/* ✅ ATTRIBUTES EDITOR (SCALABLE, JSONB SAFE) */}
//       <Field label="Attributes" error={(errors.attributes as any)?.message}>
//         <Controller
//           name="attributes"
//           control={control}
//           render={({ field }) => (
//             <AttributesEditor
//               value={field.value}
//               onChange={field.onChange}
//             />
//           )}
//         />
//       </Field>

//       <label style={{ display: "flex", gap: 8, marginBottom: 12 }}>
//         <input type="checkbox" {...register("is_default")} />
//         Default Variant
//       </label>

//       <div style={{ display: "flex", gap: 10 }}>
//         <button type="submit" style={btnPrimary}>
//           Save Variant
//         </button>
//         <button type="button" onClick={onCancel} style={btnSecondary}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

// /* ================= FIELD ================= */

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
//     <div style={{ marginBottom: 12 }}>
//       <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
//       {children}
//       {error && <div style={{ color: "#b91c1c", marginTop: 6 }}>{error}</div>}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const panel: React.CSSProperties = {
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   padding: 16,
//   marginTop: 12,
// };

// const input: React.CSSProperties = {
//   width: "100%",
//   padding: "10px",
//   borderRadius: 8,
//   border: "1px solid #e5e7eb",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   background: "#111827",
//   color: "white",
//   border: "1px solid #111827",
//   cursor: "pointer",
// };

// const btnSecondary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };





///////////// ***** above code work before the UI polish


// import { useForm, Controller, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { variantSchema } from "../schema";
// import type { VariantFormValues, VariantUI } from "../schema";

// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   onSave: (variant: VariantUI) => void;
//   onCancel: () => void;
// };

// export default function VariantForm({ onSave, onCancel }: Props) {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<VariantFormValues>({
//     resolver: zodResolver(variantSchema),
//     defaultValues: {
//       variant_name: "",
//       short_label: "",
//       price: 1,
//       mrp: undefined,
//       stock: 0,
//       attributes: undefined,
//       is_default: false,
//     },
//     mode: "onSubmit",
//   });

//   const submit: SubmitHandler<VariantFormValues> = (values) => {
//     const uiVariant: VariantUI = {
//       id: crypto.randomUUID(), // UI-only
//       images: [],
//       ...values,
//     };

//     console.log("✅ VARIANT UI:", uiVariant);
//     onSave(uiVariant);
//   };

//   return (
//     <form onSubmit={handleSubmit(submit)} style={card}>
//       <h3 style={title}>Add Variant</h3>

//       {/* ================= BASIC INFO ================= */}
//       <Section title="Variant Information">
//         <FloatingInput label="Variant Name" error={errors.variant_name?.message}>
//           <input {...register("variant_name")} style={inputBase} />
//         </FloatingInput>

//         <FloatingInput label="Short Label" error={errors.short_label?.message}>
//           <input {...register("short_label")} style={inputBase} />
//         </FloatingInput>
//       </Section>

//       {/* ================= PRICING ================= */}
//       <Section title="Pricing & Inventory">
//         <Row>
//           <FloatingInput label="Selling Price" error={errors.price?.message}>
//             <input
//               type="number"
//               {...register("price", { valueAsNumber: true })}
//               style={inputBase}
//             />
//           </FloatingInput>

//           <FloatingInput label="MRP" error={errors.mrp?.message}>
//             <input
//               type="number"
//               {...register("mrp", { valueAsNumber: true })}
//               style={inputBase}
//             />
//           </FloatingInput>
//         </Row>

//         <FloatingInput label="Stock" error={errors.stock?.message}>
//           <input
//             type="number"
//             {...register("stock", { valueAsNumber: true })}
//             style={inputBase}
//           />
//         </FloatingInput>
//       </Section>

//       {/* ================= ATTRIBUTES ================= */}
//       <Section title="Variant Attributes">
//         <Controller
//           name="attributes"
//           control={control}
//           render={({ field }) => (
//             <AttributesEditor value={field.value} onChange={field.onChange} />
//           )}
//         />
//         {errors.attributes && (
//           <div style={errorText}>{errors.attributes.message as string}</div>
//         )}
//       </Section>

//       {/* ================= DEFAULT ================= */}
//       <div style={defaultRow}>
//         <input type="checkbox" {...register("is_default")} />
//         <span>Make this the default variant</span>
//       </div>

//       {/* ================= ACTIONS ================= */}
//       <div style={actions}>
//         <button type="submit" style={btnPrimary}>
//           Save Variant
//         </button>
//         <button type="button" onClick={onCancel} style={btnSecondary}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

// /* ================= UI HELPERS ================= */

// function Section({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={section}>
//       <h4 style={sectionTitle}>{title}</h4>
//       {children}
//     </div>
//   );
// }

// function Row({ children }: { children: React.ReactNode }) {
//   return <div style={row}>{children}</div>;
// }

// function FloatingInput({
//   label,
//   error,
//   children,
// }: {
//   label: string;
//   error?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={inputWrapper}>
//       <label style={floatingLabel}>{label}</label>
//       {children}
//       {error && <div style={errorText}>{error}</div>}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const card: React.CSSProperties = {
//   marginTop: 16,
//   padding: 20,
//   borderRadius: 18,
//   background: "#ffffff",
//   boxShadow: "0 8px 26px rgba(0,0,0,0.09)",
// };

// const title: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 800,
//   marginBottom: 18,
// };

// const section: React.CSSProperties = {
//   marginBottom: 22,
// };

// const sectionTitle: React.CSSProperties = {
//   fontSize: 14,
//   fontWeight: 700,
//   marginBottom: 12,
// };

// const row: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 14,
// };

// const inputWrapper: React.CSSProperties = {
//   position: "relative",
//   marginBottom: 16,
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

// const errorText: React.CSSProperties = {
//   marginTop: 6,
//   fontSize: 12,
//   color: "#b91c1c",
// };

// const defaultRow: React.CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   gap: 10,
//   paddingTop: 12,
//   marginBottom: 18,
//   borderTop: "1px solid #eee",
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   gap: 12,
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "12px 16px",
//   borderRadius: 14,
//   background: "#111827",
//   color: "#fff",
//   border: "none",
//   fontWeight: 800,
//   cursor: "pointer",
// };

// const btnSecondary: React.CSSProperties = {
//   padding: "12px 16px",
//   borderRadius: 14,
//   border: "1px solid #e5e7eb",
//   background: "#ffffff",
//   cursor: "pointer",
// };




////////// ********* above code worked before the sku code


// import { useForm, Controller, type SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// import { variantSchema } from "../schema";
// import type { VariantFormValues, VariantUI } from "../schema";

// import AttributesEditor from "./AttributesEditor";

// type Props = {
//   onSave: (variant: VariantUI) => void;
//   onCancel: () => void;
// };

// export default function VariantForm({ onSave, onCancel }: Props) {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<VariantFormValues>({
//     resolver: zodResolver(variantSchema),
//     defaultValues: {
//       variant_name: "",
//       short_label: "",
//       sku: "", // 🆕
//       price: 1,
//       mrp: undefined,
//       stock: 0,
//       attributes: undefined,
//       is_default: false,
//     },
//     mode: "onSubmit",
//   });

//   const submit: SubmitHandler<VariantFormValues> = (values) => {
//     const uiVariant: VariantUI = {
//       id: crypto.randomUUID(),
//       images: [],
//       ...values,
//     };

//     console.log("✅ VARIANT UI:", uiVariant);
//     onSave(uiVariant);
//   };

//   return (
//     <form onSubmit={handleSubmit(submit)} style={card}>
//       <h3 style={title}>Add Variant</h3>

//       {/* ================= BASIC INFO ================= */}
//       <Section title="Variant Information">
//         <FloatingInput
//           label="Variant Name"
//           error={errors.variant_name?.message}
//         >
//           <input {...register("variant_name")} style={inputBase} />
//         </FloatingInput>

//         <FloatingInput
//           label="Short Label"
//           error={errors.short_label?.message}
//         >
//           <input {...register("short_label")} style={inputBase} />
//         </FloatingInput>

//         {/* 🆕 SKU FIELD */}
//         <FloatingInput
//           label="SKU (optional)"
//           error={errors.sku?.message}
//         >
//           <input {...register("sku")} style={inputBase} />
//         </FloatingInput>
//       </Section>

//       {/* ================= PRICING ================= */}
//       <Section title="Pricing & Inventory">
//         <Row>
//           <FloatingInput label="Selling Price" error={errors.price?.message}>
//             <input
//               type="number"
//               {...register("price", { valueAsNumber: true })}
//               style={inputBase}
//             />
//           </FloatingInput>

//           <FloatingInput label="MRP" error={errors.mrp?.message}>
//             <input
//               type="number"
//               {...register("mrp", { valueAsNumber: true })}
//               style={inputBase}
//             />
//           </FloatingInput>
//         </Row>

//         <FloatingInput label="Stock" error={errors.stock?.message}>
//           <input
//             type="number"
//             {...register("stock", { valueAsNumber: true })}
//             style={inputBase}
//           />
//         </FloatingInput>
//       </Section>

//       {/* ================= ATTRIBUTES ================= */}
//       <Section title="Variant Attributes">
//         <Controller
//           name="attributes"
//           control={control}
//           render={({ field }) => (
//             <AttributesEditor value={field.value} onChange={field.onChange} />
//           )}
//         />
//         {errors.attributes && (
//           <div style={errorText}>
//             {errors.attributes.message as string}
//           </div>
//         )}
//       </Section>

//       {/* ================= DEFAULT ================= */}
//       <div style={defaultRow}>
//         <input type="checkbox" {...register("is_default")} />
//         <span>Make this the default variant</span>
//       </div>

//       {/* ================= ACTIONS ================= */}
//       <div style={actions}>
//         <button type="submit" style={btnPrimary}>
//           Save Variant
//         </button>
//         <button type="button" onClick={onCancel} style={btnSecondary}>
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

// /* ================= UI HELPERS ================= */

// function Section({
//   title,
//   children,
// }: {
//   title: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={section}>
//       <h4 style={sectionTitle}>{title}</h4>
//       {children}
//     </div>
//   );
// }

// function Row({ children }: { children: React.ReactNode }) {
//   return <div style={row}>{children}</div>;
// }

// function FloatingInput({
//   label,
//   error,
//   children,
// }: {
//   label: string;
//   error?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <div style={inputWrapper}>
//       <label style={floatingLabel}>{label}</label>
//       {children}
//       {error && <div style={errorText}>{error}</div>}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const card: React.CSSProperties = {
//   marginTop: 16,
//   padding: 20,
//   borderRadius: 18,
//   background: "#ffffff",
//   boxShadow: "0 8px 26px rgba(0,0,0,0.09)",
// };

// const title: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 800,
//   marginBottom: 18,
// };

// const section: React.CSSProperties = {
//   marginBottom: 22,
// };

// const sectionTitle: React.CSSProperties = {
//   fontSize: 14,
//   fontWeight: 700,
//   marginBottom: 12,
// };

// const row: React.CSSProperties = {
//   display: "grid",
//   gridTemplateColumns: "1fr 1fr",
//   gap: 14,
// };

// const inputWrapper: React.CSSProperties = {
//   position: "relative",
//   marginBottom: 16,
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

// const errorText: React.CSSProperties = {
//   marginTop: 6,
//   fontSize: 12,
//   color: "#b91c1c",
// };

// const defaultRow: React.CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   gap: 10,
//   paddingTop: 12,
//   marginBottom: 18,
//   borderTop: "1px solid #eee",
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   gap: 12,
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "12px 16px",
//   borderRadius: 14,
//   background: "#111827",
//   color: "#fff",
//   border: "none",
//   fontWeight: 800,
//   cursor: "pointer",
// };

// const btnSecondary: React.CSSProperties = {
//   padding: "12px 16px",
//   borderRadius: 14,
//   border: "1px solid #e5e7eb",
//   background: "#ffffff",
//   cursor: "pointer",
// };




///////// ****** after update motherboard v1 upgrade


import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { variantSchema } from "../schema";
import type { VariantFormValues, VariantUI } from "../schema";

import AttributesEditor from "./AttributesEditor";

type Props = {
  onSave: (variant: VariantUI) => void;
  onCancel: () => void;
};

export default function VariantForm({ onSave, onCancel }: Props) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<VariantFormValues>({
    resolver: zodResolver(variantSchema),
    defaultValues: {
      variant_name: "",
      short_label: "",
      sku: "",
      price: 1,
      mrp: undefined,
      stock: 0,
      attributes: undefined,
      is_default: false,
    },
    mode: "onSubmit",
  });

  const submit: SubmitHandler<VariantFormValues> = (values) => {
    const uiVariant: VariantUI = {
      id: crypto.randomUUID(),
      images: [],
      ...values,
    };

    onSave(uiVariant);
  };

  const isDefault = watch("is_default");

  return (
    <form onSubmit={handleSubmit(submit)} style={card}>
      <div style={header}>
        <h3 style={title}>Add Variant</h3>
        <p style={subtitle}>
          Create a product variation with unique price, stock and attributes.
        </p>
      </div>

      {/* ================= BASIC INFO ================= */}
      <Section title="Variant Information">
        <FloatingInput
          label="Variant Name"
          required
          error={errors.variant_name?.message}
        >
          <input {...register("variant_name")} style={inputBase} />
        </FloatingInput>

        <FloatingInput
          label="Short Label"
          error={errors.short_label?.message}
        >
          <input {...register("short_label")} style={inputBase} />
        </FloatingInput>

        <FloatingInput
          label="SKU"
          hint="Optional unique stock identifier"
          error={errors.sku?.message}
        >
          <input {...register("sku")} style={inputBase} />
        </FloatingInput>
      </Section>

      {/* ================= PRICING ================= */}
      <Section title="Pricing & Inventory">
        <Row>
          <FloatingInput
            label="Selling Price"
            required
            error={errors.price?.message}
          >
            <input
              type="number"
              {...register("price", { valueAsNumber: true })}
              style={inputBase}
            />
          </FloatingInput>

          <FloatingInput label="MRP" error={errors.mrp?.message}>
            <input
              type="number"
              {...register("mrp", { valueAsNumber: true })}
              style={inputBase}
            />
          </FloatingInput>
        </Row>

        <FloatingInput
          label="Stock"
          required
          hint="0 means out of stock"
          error={errors.stock?.message}
        >
          <input
            type="number"
            {...register("stock", { valueAsNumber: true })}
            style={inputBase}
          />
        </FloatingInput>
      </Section>

      {/* ================= ATTRIBUTES ================= */}
      <Section title="Variant Attributes">
        <Controller
          name="attributes"
          control={control}
          render={({ field }) => (
            <div style={{ width: "100%" }}>
              <AttributesEditor
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          )}
        />
        {errors.attributes && (
          <div style={errorText}>
            {errors.attributes.message as string}
          </div>
        )}
      </Section>

      {/* ================= DEFAULT ================= */}
      <div style={switchRow}>
        <div>
          <div style={switchTitle}>Default Variant</div>
          <div style={switchHint}>
            This variant will be pre-selected for customers
          </div>
        </div>
        <Switch
          {...register("is_default")}
          checked={isDefault}
        />
      </div>

      {/* ================= ACTIONS ================= */}
      <div style={actions}>
        <button
          type="submit"
          style={{
            ...btnPrimary,
            opacity: isSubmitting ? 0.7 : 1,
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Save Variant"}
        </button>

        <button type="button" onClick={onCancel} style={btnSecondary}>
          Cancel
        </button>
      </div>
    </form>
  );
}

/* ================= UI HELPERS ================= */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={section}>
      <h4 style={sectionTitle}>{title}</h4>
      {children}
    </div>
  );
}

function Row({ children }: { children: React.ReactNode }) {
  return <div style={row}>{children}</div>;
}

function FloatingInput({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={inputWrapper}>
      <div style={labelRow}>
        <label style={floatingLabel}>
          {label} {required && <span style={req}>*</span>}
        </label>
        {hint && <span style={miniHint}>{hint}</span>}
      </div>
      {children}
      {error && <div style={errorText}>{error}</div>}
    </div>
  );
}

function Switch({ checked, ...props }: any) {
  return (
    <label style={switchWrap}>
      <input
        type="checkbox"
        checked={checked}
        {...props}
        style={switchInput}
      />
      <span
        style={{
          ...switchTrack,
          background: checked ? "#bf9602" : "#E5E7EB",
        }}
      />
      <span
        style={{
          ...switchThumb,
          transform: checked
            ? "translateX(20px)"
            : "translateX(0px)",
        }}
      />
    </label>
  );
}

/* ================= STYLES ================= */

const card: React.CSSProperties = {
  marginTop: 20,
  padding: 24,
  borderRadius: 20,
  background: "#ffffff",
  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  width: "100%",
  boxSizing: "border-box",
};

const header: React.CSSProperties = {
  marginBottom: 20,
};

const title: React.CSSProperties = {
  fontSize: 18,
  fontWeight: 900,
  margin: 0,
};

const subtitle: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7280",
  marginTop: 6,
};

const section: React.CSSProperties = {
  marginBottom: 26,
};

const sectionTitle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 800,
  marginBottom: 14,
};

const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
  gap: 16,
};

const inputWrapper: React.CSSProperties = {
  marginBottom: 16,
  width: "100%",
};

const labelRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 6,
};

const floatingLabel: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  color: "#374151",
};

const req: React.CSSProperties = {
  color: "#b42318",
};

const miniHint: React.CSSProperties = {
  fontSize: 11,
  color: "#9CA3AF",
};

const inputBase: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  borderRadius: 14,
  border: "1px solid #E5E7EB",
  background: "#FAFAFA",
  fontSize: 14,
  outline: "none",
  boxSizing: "border-box",
};

const errorText: React.CSSProperties = {
  marginTop: 6,
  fontSize: 12,
  color: "#b91c1c",
  fontWeight: 600,
};

const switchRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: 16,
  marginBottom: 24,
  borderTop: "1px solid #f1f1f1",
};

const switchTitle: React.CSSProperties = {
  fontWeight: 800,
  fontSize: 13,
};

const switchHint: React.CSSProperties = {
  fontSize: 12,
  color: "#6b7280",
};

const switchWrap: React.CSSProperties = {
  position: "relative",
  width: 46,
  height: 26,
};

const switchInput: React.CSSProperties = {
  opacity: 0,
  width: 46,
  height: 26,
  position: "absolute",
  zIndex: 2,
  cursor: "pointer",
};

const switchTrack: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  borderRadius: 999,
  background: "#E5E7EB",
  transition: "background 0.2s ease",
};

const switchThumb: React.CSSProperties = {
  position: "absolute",
  width: 20,
  height: 20,
  borderRadius: 999,
  background: "#ffffff",
  top: 3,
  left: 3,
  transition: "transform 0.18s ease",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
};

const actions: React.CSSProperties = {
  display: "flex",
  gap: 14,
};

const btnPrimary: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: 14,
  background: "#111827",
  color: "#fff",
  border: "none",
  fontWeight: 800,
};

const btnSecondary: React.CSSProperties = {
  padding: "12px 18px",
  borderRadius: 14,
  border: "1px solid #E5E7EB",
  background: "#ffffff",
  fontWeight: 700,
};
