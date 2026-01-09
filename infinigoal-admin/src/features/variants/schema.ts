import { z } from "zod";

/**
 * Matches public.product_variants table
 */
export const variantSchema = z.object({
  variant_name: z.string().min(2),
  short_label: z.string().optional(),

  price: z.number().positive(),
  mrp: z.number().optional(),

  stock: z.number().int().nonnegative(),

  // ✅ FIXED
  attributes: z
    .record(z.string(), z.any())
    .optional(),

  is_default: z.boolean(),
});

export type VariantFormValues = z.infer<typeof variantSchema>;
