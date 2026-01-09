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


import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../schema";
import type { ProductFormValues } from "../schema";
import AttributesEditor from "./AttributesEditor";

type Props = {
  initialValues?: Partial<ProductFormValues>;
  onSubmit: (values: ProductFormValues) => void;
  submitLabel?: string;
};

export default function ProductForm({
  initialValues,
  onSubmit,
  submitLabel = "Save Product",
}: Props) {
  // ✅ IMPORTANT: type the resolver + useForm with ProductFormValues
  const form = useForm<ProductFormValues>({
    resolver: zodResolver<ProductFormValues>(productSchema),
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
      ...initialValues,
    },
    mode: "onSubmit",
  });

  const { register, handleSubmit, control, formState } = form;
  const { errors } = formState;

  // ✅ IMPORTANT: wrap to satisfy SubmitHandler typing perfectly
  const submit = (values: ProductFormValues) => onSubmit(values);

  return (
    <form onSubmit={handleSubmit(submit)} style={{ display: "grid", gap: 12 }}>
      <Field label="Product Name" error={errors.name?.message}>
        <input {...register("name")} style={inputStyle} />
      </Field>

      <Field label="Slug" error={errors.slug?.message}>
        <input {...register("slug")} style={inputStyle} />
      </Field>

      <Field label="Short Description" error={errors.short_description?.message}>
        <textarea {...register("short_description")} style={textareaStyle} />
      </Field>

      <Field label="Description" error={errors.description?.message}>
        <textarea {...register("description")} style={textareaStyle} />
      </Field>

      <Field label="Brand" error={errors.brand?.message}>
        <input {...register("brand")} style={inputStyle} />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Main Category" error={errors.main_category?.message}>
          <input {...register("main_category")} style={inputStyle} />
        </Field>

        <Field label="Sub Category" error={errors.sub_category?.message}>
          <input {...register("sub_category")} style={inputStyle} />
        </Field>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="MRP" error={errors.mrp?.message}>
          <input type="number" {...register("mrp", { valueAsNumber: true })} style={inputStyle} />
        </Field>

        <Field label="Selling Price" error={errors.price?.message}>
          <input type="number" {...register("price", { valueAsNumber: true })} style={inputStyle} />
        </Field>
      </div>

      <Field label="Stock" error={errors.stock?.message}>
        <input type="number" {...register("stock", { valueAsNumber: true })} style={inputStyle} />
      </Field>

      <label style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input type="checkbox" {...register("is_active")} />
        Active
      </label>

      <Field label="Attributes" error={(errors.attributes_schema as any)?.message}>
        <Controller
          control={control}
          name="attributes_schema"
          render={({ field }) => (
            <AttributesEditor value={field.value} onChange={field.onChange} />
          )}
        />
      </Field>

      <div style={{ marginTop: 8 }}>
        <button type="submit" style={btnPrimary}>
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

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
    <div>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
      {children}
      {error ? <div style={{ color: "#b91c1c", marginTop: 6 }}>{error}</div> : null}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 90,
};

const btnPrimary: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #111827",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};
