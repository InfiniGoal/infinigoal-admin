// import { supabase } from "../../lib/supabaseClient";

// export async function createProduct(payload: any) {
//   const { data, error } = await supabase
//     .from("products")
//     .insert({
//       ...payload,
//       thumbnail: "", // will be updated later
//     })
//     .select("*")
//     .single();

//   if (error) throw error;
//   return data;
// }







// ///////////// ****** below code for delete product api ******* /////////////



// export async function deleteProduct(productId: string) {
//   /* ================= PRODUCT IMAGES ================= */
//   const { data: productImages } = await supabase
//     .from("product_images")
//     .select("image_url")
//     .eq("product_id", productId);

//   if (productImages?.length) {
//     const paths = productImages
//       .map(img =>
//         img.image_url.split(
//           "/storage/v1/object/public/product-images-v3/"
//         )[1]
//       )
//       .filter(Boolean);

//     if (paths.length) {
//       await supabase.storage
//         .from("product-images-v3")
//         .remove(paths);
//     }
//   }

//   /* ================= VARIANT IMAGES ================= */
//   const { data: variants } = await supabase
//     .from("product_variants")
//     .select("id")
//     .eq("product_id", productId);

//   const variantIds = variants?.map(v => v.id) ?? [];

//   if (variantIds.length) {
//     const { data: variantImages } = await supabase
//       .from("product_variant_images")
//       .select("image_url")
//       .in("variant_id", variantIds);

//     if (variantImages?.length) {
//       const paths = variantImages
//         .map(img =>
//           img.image_url.split(
//             "/storage/v1/object/public/variant-images-v3/"
//           )[1]
//         )
//         .filter(Boolean);

//       if (paths.length) {
//         await supabase.storage
//           .from("variant-images-v3")
//           .remove(paths);
//       }
//     }
//   }

//   /* ================= DELETE PRODUCT (CASCADE) ================= */
//   const { error } = await supabase
//     .from("products")
//     .delete()
//     .eq("id", productId);

//   if (error) throw error;
// }










////////////// above code worked before fixing supbase v3 imges and all

import { supabase } from "../../lib/supabaseClient";

/* ======================================================
   CREATE PRODUCT (UNCHANGED)
====================================================== */
export async function createProduct(payload: any) {
  const { data, error } = await supabase
    .from("products")
    .insert({
      ...payload,
      thumbnail: "", // will be updated later
    })
    .select("*")
    .single();

  if (error) throw error;
  return data;
}

/* ======================================================
   DELETE PRODUCT (SAFE FOR ALL BUCKETS)
====================================================== */
export async function deleteProduct(productId: string) {
  /* ================= PRODUCT IMAGES ================= */
  const { data: productImages } = await supabase
    .from("product_images")
    .select("image_url")
    .eq("product_id", productId);

  if (productImages?.length) {
    const bucketMap: Record<string, string[]> = {};

    for (const img of productImages) {
      const match = img.image_url.match(
        /\/storage\/v1\/object\/public\/([^/]+)\/(.+)$/
      );
      if (!match) continue;

      const [, bucket, path] = match;
      bucketMap[bucket] ??= [];
      bucketMap[bucket].push(path);
    }

    for (const bucket of Object.keys(bucketMap)) {
      await supabase.storage.from(bucket).remove(bucketMap[bucket]);
    }
  }

  /* ================= VARIANT IMAGES ================= */
  const { data: variants } = await supabase
    .from("product_variants")
    .select("id")
    .eq("product_id", productId);

  const variantIds = variants?.map(v => v.id) ?? [];

  if (variantIds.length) {
    const { data: variantImages } = await supabase
      .from("product_variant_images")
      .select("image_url")
      .in("variant_id", variantIds);

    if (variantImages?.length) {
      const bucketMap: Record<string, string[]> = {};

      for (const img of variantImages) {
        const match = img.image_url.match(
          /\/storage\/v1\/object\/public\/([^/]+)\/(.+)$/
        );
        if (!match) continue;

        const [, bucket, path] = match;
        bucketMap[bucket] ??= [];
        bucketMap[bucket].push(path);
      }

      for (const bucket of Object.keys(bucketMap)) {
        await supabase.storage.from(bucket).remove(bucketMap[bucket]);
      }
    }
  }

  /* ================= DELETE PRODUCT (CASCADE) ================= */
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", productId);

  if (error) throw error;
}
