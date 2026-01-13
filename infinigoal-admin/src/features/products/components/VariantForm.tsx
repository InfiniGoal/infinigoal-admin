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
    formState: { errors },
  } = useForm<VariantFormValues>({
    resolver: zodResolver(variantSchema),
    defaultValues: {
      variant_name: "",
      short_label: "",
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
      id: crypto.randomUUID(), // UI-only ID
      images: [],
      ...values,
    };

    console.log("✅ VARIANT UI:", uiVariant);
    onSave(uiVariant);
  };

  return (
    <form onSubmit={handleSubmit(submit)} style={panel}>
      <h4 style={{ marginTop: 0 }}>Add Variant</h4>

      <Field label="Variant Name" error={errors.variant_name?.message}>
        <input {...register("variant_name")} style={input} />
      </Field>

      <Field label="Short Label" error={errors.short_label?.message}>
        <input {...register("short_label")} style={input} />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Price" error={errors.price?.message}>
          <input
            type="number"
            {...register("price", { valueAsNumber: true })}
            style={input}
          />
        </Field>

        <Field label="MRP" error={errors.mrp?.message}>
          <input
            type="number"
            {...register("mrp", { valueAsNumber: true })}
            style={input}
          />
        </Field>
      </div>

      <Field label="Stock" error={errors.stock?.message}>
        <input
          type="number"
          {...register("stock", { valueAsNumber: true })}
          style={input}
        />
      </Field>

      {/* ✅ ATTRIBUTES EDITOR (SCALABLE, JSONB SAFE) */}
      <Field label="Attributes" error={(errors.attributes as any)?.message}>
        <Controller
          name="attributes"
          control={control}
          render={({ field }) => (
            <AttributesEditor
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      </Field>

      <label style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input type="checkbox" {...register("is_default")} />
        Default Variant
      </label>

      <div style={{ display: "flex", gap: 10 }}>
        <button type="submit" style={btnPrimary}>
          Save Variant
        </button>
        <button type="button" onClick={onCancel} style={btnSecondary}>
          Cancel
        </button>
      </div>
    </form>
  );
}

/* ================= FIELD ================= */

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
      {children}
      {error && <div style={{ color: "#b91c1c", marginTop: 6 }}>{error}</div>}
    </div>
  );
}

/* ================= STYLES ================= */

const panel: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  padding: 16,
  marginTop: 12,
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
};

const btnPrimary: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  background: "#111827",
  color: "white",
  border: "1px solid #111827",
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  background: "white",
  cursor: "pointer",
};
