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


// import { z } from "zod";

// /**
//  * Explicit JSON object type for jsonb fields.
//  * Using Record<string, unknown> keeps it safe and avoids 'unknown' leaks from preprocess.
//  */
// export type JsonObject = Record<string, unknown>;

// const jsonObjectSchema = z.record(z.string(), z.unknown());

// const jsonObjectFromInput = z.preprocess((val): JsonObject | undefined => {
//   if (val === undefined || val === null || val === "") return undefined;

//   // Already an object (from AttributesEditor)
//   if (typeof val === "object") return val as JsonObject;

//   // String fallback (if someone pastes JSON)
//   if (typeof val === "string") {
//     try {
//       return JSON.parse(val) as JsonObject;
//     } catch {
//       throw new Error("Invalid JSON format");
//     }
//   }

//   return undefined;
// }, jsonObjectSchema);

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

//   // ✅ strongly typed as Record<string, unknown> | undefined
//   attributes_schema: jsonObjectFromInput.optional(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;

// export const variantSchema = z.object({
//   variant_name: z.string().min(2),
//   short_label: z.string().optional(),

//   price: z.number().positive(),
//   mrp: z.number().optional(),

//   stock: z.number().int().nonnegative(),
//   is_default: z.boolean(),

//   // ✅ same strong typing
//   attributes: jsonObjectFromInput.optional(),
// });

// export type VariantFormValues = z.infer<typeof variantSchema>;




////////////// ************ above code working fine for basic


// import { z } from "zod";

// /* =========================================================
//    JSONB SAFE TYPE
//    ---------------------------------------------------------
//    - Explicit JSON object type for Supabase jsonb
//    - Avoids `unknown` leaking into form types
//    - Safe for UI + API + DB
// ========================================================= */

// export type JsonObject = Record<string, unknown>;

// /**
//  * Base JSON object schema
//  */
// const jsonObjectSchema = z.record(z.string(), z.unknown());

// /**
//  * Preprocess helper:
//  * - Accepts:
//  *    • object (from AttributesEditor)
//  *    • stringified JSON (paste fallback)
//  *    • empty / undefined
//  */
// const jsonObjectFromInput = z.preprocess(
//   (val): JsonObject | undefined => {
//     if (val === undefined || val === null || val === "") {
//       return undefined;
//     }

//     // Already an object (AttributesEditor output)
//     if (typeof val === "object") {
//       return val as JsonObject;
//     }

//     // String JSON fallback
//     if (typeof val === "string") {
//       try {
//         return JSON.parse(val) as JsonObject;
//       } catch {
//         throw new Error("Invalid JSON format");
//       }
//     }

//     return undefined;
//   },
//   jsonObjectSchema
// );

// /* =========================================================
//    PRODUCT SCHEMA
//    ---------------------------------------------------------
//    Maps EXACTLY to:
//    public.products
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

//   /**
//    * jsonb field
//    * Example:
//    * {
//    *   weight: "1kg",
//    *   type: "organic"
//    * }
//    */
//   attributes_schema: jsonObjectFromInput.optional(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;

// /* =========================================================
//    VARIANT SCHEMA
//    ---------------------------------------------------------
//    Maps EXACTLY to:
//    public.product_variants
// ========================================================= */

// export const variantSchema = z.object({
//   variant_name: z.string().min(2, "Variant name is required"),
//   short_label: z.string().optional(),

//   price: z.number().positive("Variant price must be greater than 0"),
//   mrp: z.number().optional(),

//   stock: z.number().int().nonnegative("Stock cannot be negative"),
//   is_default: z.boolean(),

//   /**
//    * jsonb field
//    * Example:
//    * {
//    *   size: "500g",
//    *   pack: "pouch"
//    * }
//    */
//   attributes: jsonObjectFromInput.optional(),
// });

// export type VariantFormValues = z.infer<typeof variantSchema>;

// /* =========================================================
//    UI-ONLY VARIANT MODEL (ARCHITECTURE LAYER)
//    ---------------------------------------------------------
//    - Used by VariantsManager / VariantCard
//    - NOT directly sent to DB
//    - Flattened later during save
// ========================================================= */

// import type { ProductImageUI } from "@/features/images/types";

// export type VariantUI = VariantFormValues & {
//   id: string; // UI-only (crypto.randomUUID)
//   images: ProductImageUI[];
// };



////////////////////


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




//////////////

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
// ========================================================= */
// export const variantSchema = z.object({
//   variant_name: z.string().min(2, "Variant name is required"),
//   short_label: z.string().optional(),

//   price: z.number().positive("Variant price must be greater than 0"),
//   mrp: z.number().optional(),

//   stock: z.number().int().nonnegative("Stock cannot be negative"),
//   is_default: z.boolean(),

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




////////// ******* working on the duplicate issues



// import { z } from "zod";
// import type { ProductImageUI } from "@/features/images/types";

// /* =========================================================
//    JSONB SAFE TYPE
// ========================================================= */
// export type JsonObject = Record<string, unknown>;

// /**
//  * ✅ CRITICAL FIX
//  * Allow undefined AFTER preprocess so edit forms do not block
//  */
// const jsonObjectSchema = z
//   .record(z.string(), z.unknown())
//   .optional();

// /**
//  * Accept:
//  * - object (from AttributesEditor)
//  * - stringified JSON (from textarea)
//  * - empty / null / undefined → undefined
//  */
// const jsonObjectFromInput = z.preprocess(
//   (val): JsonObject | undefined => {
//     if (val === undefined || val === null || val === "") return undefined;

//     // already an object
//     if (typeof val === "object") return val as JsonObject;

//     // string fallback
//     if (typeof val === "string") {
//       try {
//         return JSON.parse(val) as JsonObject;
//       } catch {
//         return undefined;
//       }
//     }

//     return undefined;
//   },
//   jsonObjectSchema
// );

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

//   /**
//    * ✅ Now SAFE for:
//    * - null from DB
//    * - untouched edit forms
//    * - empty attributes
//    */
//   attributes_schema: jsonObjectFromInput.optional(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;

// /* =========================================================
//    VARIANT SCHEMA (maps to public.product_variants)
// ========================================================= */
// export const variantSchema = z.object({
//   variant_name: z.string().min(2, "Variant name is required"),
//   short_label: z.string().optional(),

//   price: z.number().positive("Variant price must be greater than 0"),
//   mrp: z.number().optional(),

//   stock: z.number().int().nonnegative("Stock cannot be negative"),
//   is_default: z.boolean(),

//   /**
//    * Same safe behavior for variants
//    */
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




///////////// ********** above code worked before the tags


// import { z } from "zod";
// import type { ProductImageUI } from "@/features/images/types";

// /* =========================================================
//    JSONB SAFE TYPE
// ========================================================= */
// export type JsonObject = Record<string, unknown>;

// /**
//  * ✅ CRITICAL FIX
//  * Allow undefined AFTER preprocess so edit forms do not block
//  */
// const jsonObjectSchema = z
//   .record(z.string(), z.unknown())
//   .optional();

// /**
//  * Accept:
//  * - object (from AttributesEditor)
//  * - stringified JSON (from textarea)
//  * - empty / null / undefined → undefined
//  */
// const jsonObjectFromInput = z.preprocess(
//   (val): JsonObject | undefined => {
//     if (val === undefined || val === null || val === "") return undefined;

//     // already an object
//     if (typeof val === "object") return val as JsonObject;

//     // string fallback
//     if (typeof val === "string") {
//       try {
//         return JSON.parse(val) as JsonObject;
//       } catch {
//         return undefined;
//       }
//     }

//     return undefined;
//   },
//   jsonObjectSchema
// );

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

//   /**
//    * ✅ SAFE JSON schema
//    */
//   attributes_schema: jsonObjectFromInput.optional(),

//   /* ======================================================
//      🆕 ADVANCED E-COMMERCE FIELDS (OPTIONAL, NON-BREAKING)
//      These map directly to new DB columns
//   ====================================================== */
//   tags: z.array(z.string()).optional(),
//   search_keywords: z.array(z.string()).optional(),
//   synonyms: z.array(z.string()).optional(),
//   badges: z.array(z.string()).optional(),
//   is_featured: z.boolean().optional(),
// });

// export type ProductFormValues = z.infer<typeof productSchema>;

// /* =========================================================
//    VARIANT SCHEMA (maps to public.product_variants)
//    ❌ NO CHANGES HERE
// ========================================================= */
// export const variantSchema = z.object({
//   variant_name: z.string().min(2, "Variant name is required"),
//   short_label: z.string().optional(),

//   price: z.number().positive("Variant price must be greater than 0"),
//   mrp: z.number().optional(),

//   stock: z.number().int().nonnegative("Stock cannot be negative"),
//   is_default: z.boolean(),

//   /**
//    * Same safe behavior for variants
//    */
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



////////// ******* above code worked before the sku code


import { z } from "zod";
import type { ProductImageUI } from "@/features/images/types";

/* =========================================================
   JSONB SAFE TYPE
========================================================= */
export type JsonObject = Record<string, unknown>;

const jsonObjectSchema = z
  .record(z.string(), z.unknown())
  .optional();

const jsonObjectFromInput = z.preprocess(
  (val): JsonObject | undefined => {
    if (val === undefined || val === null || val === "") return undefined;

    if (typeof val === "object") return val as JsonObject;

    if (typeof val === "string") {
      try {
        return JSON.parse(val) as JsonObject;
      } catch {
        return undefined;
      }
    }

    return undefined;
  },
  jsonObjectSchema
);

/* =========================================================
   PRODUCT SCHEMA
========================================================= */
export const productSchema = z.object({
  name: z.string().min(3, "Product name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),

  short_description: z.string().optional(),
  description: z.string().min(10, "Description must be at least 10 characters"),

  brand: z.string().optional(),

  main_category: z.string().min(2, "Main category is required"),
  sub_category: z.string().optional(),

  mrp: z.number().optional(),
  price: z.number().positive("Price must be greater than 0"),

  stock: z.number().int().nonnegative("Stock cannot be negative"),
  is_active: z.boolean(),

  attributes_schema: jsonObjectFromInput.optional(),

  tags: z.array(z.string()).optional(),
  search_keywords: z.array(z.string()).optional(),
  synonyms: z.array(z.string()).optional(),
  badges: z.array(z.string()).optional(),
  is_featured: z.boolean().optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;

/* =========================================================
   VARIANT SCHEMA (SKU ADDED — NON BREAKING)
========================================================= */
export const variantSchema = z.object({
  variant_name: z.string().min(2, "Variant name is required"),
  short_label: z.string().optional(),

  sku: z.string().optional(), // 🆕 SKU (SAFE, OPTIONAL)

  price: z.number().positive("Variant price must be greater than 0"),
  mrp: z.number().optional(),

  stock: z.number().int().nonnegative("Stock cannot be negative"),
  is_default: z.boolean(),

  attributes: jsonObjectFromInput.optional(),
});

export type VariantFormValues = z.infer<typeof variantSchema>;

/* =========================================================
   UI-ONLY VARIANT MODEL
========================================================= */
export type VariantUI = VariantFormValues & {
  id: string;
  images: ProductImageUI[];
};
