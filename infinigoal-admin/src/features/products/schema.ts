// import { z } from "zod";

// export const productSchema = z.object({
//   name: z.string().min(3, "Name must be at least 3 characters"),
//   slug: z.string().min(3, "Slug must be at least 3 characters"),
//   description: z.string().min(10, "Description must be at least 10 characters"),
//   main_category: z.string().min(2, "Category is required"),
//   price: z.number().positive("Price must be greater than 0"),
//   stock: z.number().int().nonnegative("Stock must be 0 or more"),
//   is_active: z.boolean(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;



/////// above code worked for simple


// import { z } from "zod";

// /* ---------- PRODUCT ---------- */
// export const productSchema = z.object({
//   name: z.string().min(3),
//   slug: z.string().min(3),
//   short_description: z.string().optional(),
//   description: z.string().min(10),
//   brand: z.string().optional(),
//   main_category: z.string().min(2),
//   sub_category: z.string().optional(),
//   mrp: z.number().optional(),
//   price: z.number().positive(),
//   stock: z.number().int().nonnegative(),
//   is_active: z.boolean(),
//   attributes_schema: z.record(z.string(), z.any()).optional(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;

// /* ---------- VARIANT ---------- */
// export const variantSchema = z.object({
//   variant_name: z.string().min(2),
//   short_label: z.string().optional(),
//   price: z.number().positive(),
//   mrp: z.number().optional(),
//   stock: z.number().int().nonnegative(),
//   attributes: z.record(z.string(), z.any()).optional(),
//   is_default: z.boolean(),
// });

// export type VariantFormValues = z.infer<typeof variantSchema>;



////////////


// import { z } from "zod";

// /* ---------- HELPERS ---------- */
// const jsonRecord = z.preprocess((val) => {
//   if (typeof val === "string") {
//     try {
//       return JSON.parse(val);
//     } catch {
//       throw new Error("Invalid JSON format");
//     }
//   }
//   return val;
// }, z.record(z.string(), z.any()));

// /* ---------- PRODUCT ---------- */
// export const productSchema = z.object({
//   name: z.string().min(3),
//   slug: z.string().min(3),

//   short_description: z.string().optional(),
//   description: z.string().min(10),

//   brand: z.string().optional(),

//   main_category: z.string().min(2),
//   sub_category: z.string().optional(),

//   mrp: z.number().optional(),
//   price: z.number().positive(),

//   stock: z.number().int().nonnegative(),

//   is_active: z.boolean(),

//   // ✅ FIXED: textarea JSON → object
//   attributes_schema: jsonRecord.optional(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;

// /* ---------- VARIANT ---------- */
// export const variantSchema = z.object({
//   variant_name: z.string().min(2),
//   short_label: z.string().optional(),

//   price: z.number().positive(),
//   mrp: z.number().optional(),

//   stock: z.number().int().nonnegative(),

//   // ✅ FIXED: textarea JSON → object
//   attributes: jsonRecord.optional(),

//   is_default: z.boolean(),
// });

// export type VariantFormValues = z.infer<typeof variantSchema>;



///////////


import { z } from "zod";

/**
 * Explicit JSON object type for jsonb fields.
 * Using Record<string, unknown> keeps it safe and avoids 'unknown' leaks from preprocess.
 */
export type JsonObject = Record<string, unknown>;

const jsonObjectSchema = z.record(z.string(), z.unknown());

const jsonObjectFromInput = z.preprocess((val): JsonObject | undefined => {
  if (val === undefined || val === null || val === "") return undefined;

  // Already an object (from AttributesEditor)
  if (typeof val === "object") return val as JsonObject;

  // String fallback (if someone pastes JSON)
  if (typeof val === "string") {
    try {
      return JSON.parse(val) as JsonObject;
    } catch {
      throw new Error("Invalid JSON format");
    }
  }

  return undefined;
}, jsonObjectSchema);

export const productSchema = z.object({
  name: z.string().min(3),
  slug: z.string().min(3),

  short_description: z.string().optional(),
  description: z.string().min(10),

  brand: z.string().optional(),

  main_category: z.string().min(2),
  sub_category: z.string().optional(),

  mrp: z.number().optional(),
  price: z.number().positive(),

  stock: z.number().int().nonnegative(),
  is_active: z.boolean(),

  // ✅ strongly typed as Record<string, unknown> | undefined
  attributes_schema: jsonObjectFromInput.optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export const variantSchema = z.object({
  variant_name: z.string().min(2),
  short_label: z.string().optional(),

  price: z.number().positive(),
  mrp: z.number().optional(),

  stock: z.number().int().nonnegative(),
  is_default: z.boolean(),

  // ✅ same strong typing
  attributes: jsonObjectFromInput.optional(),
});

export type VariantFormValues = z.infer<typeof variantSchema>;
