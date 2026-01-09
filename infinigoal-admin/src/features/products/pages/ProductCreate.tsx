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

import { useState } from "react";
import ProductForm from "../components/ProductForm";
import VariantsManager from "../components/VariantsManager";
import type { ProductFormValues, VariantFormValues } from "../schema";

export default function ProductCreate() {
  const [variants, setVariants] = useState<VariantFormValues[]>([]);

  const submitProduct = (product: ProductFormValues) => {
    console.log("PRODUCT:", product);
    console.log("VARIANTS:", variants);
    alert("Product + Variants logged. Ready for DB later.");
  };

  return (
    <div style={{ maxWidth: 820 }}>
      <h1>Create Product</h1>

      <ProductForm
        onSubmit={submitProduct}
        submitLabel="Save Product"
      />

      <VariantsManager
        variants={variants}
        onChange={setVariants}
      />
    </div>
  );
}
