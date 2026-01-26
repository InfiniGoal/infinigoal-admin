// import { supabase } from "@/lib/supabaseClient";
// import type { ProductImageUI } from "@/features/images/types";
// import type { VariantUI } from "../schema";

// /* ======================================================
//    HELPERS
// ====================================================== */

// function isBlobUrl(url: string) {
//   return url.startsWith("blob:");
// }

// async function blobUrlToFile(blobUrl: string, filename: string) {
//   const res = await fetch(blobUrl);
//   const blob = await res.blob();
//   return new File([blob], filename, { type: blob.type });
// }

// /* ======================================================
//    MAIN SERVICE
// ====================================================== */

// export async function saveImages(params: {
//   productId: string;
//   productImages: ProductImageUI[];
//   variants: VariantUI[];
// }) {
//   const { productId, productImages, variants } = params;

//   /* ================= PRODUCT IMAGES ================= */

//   for (const img of productImages) {
//     // Already saved image → skip
//     if (!isBlobUrl(img.image_url)) continue;

//     const file = await blobUrlToFile(
//       img.image_url,
//       `product-${productId}-${Date.now()}.jpg`
//     );

//     const storagePath = `products/${productId}/${file.name}`;

//     const { error: uploadError } = await supabase.storage
//       .from("product-images")
//       .upload(storagePath, file, { upsert: false });

//     if (uploadError) throw uploadError;

//     const { data: publicUrl } = supabase.storage
//       .from("product-images")
//       .getPublicUrl(storagePath);

//     await supabase.from("product_images").insert({
//       product_id: productId,
//       image_url: publicUrl.publicUrl,
//       is_primary: img.is_primary,
//       position: img.position,
//     });
//   }

//   /* ================= VARIANT IMAGES ================= */

//   for (const variant of variants) {
//     if (!variant.id || !variant.images?.length) continue;

//     for (const img of variant.images) {
//       // Already saved image → skip
//       if (!isBlobUrl(img.image_url)) continue;

//       const file = await blobUrlToFile(
//         img.image_url,
//         `variant-${variant.id}-${Date.now()}.jpg`
//       );

//       const storagePath = `variants/${variant.id}/${file.name}`;

//       const { error: uploadError } = await supabase.storage
//         .from("variant-images")
//         .upload(storagePath, file, { upsert: false });

//       if (uploadError) throw uploadError;

//       const { data: publicUrl } = supabase.storage
//         .from("variant-images")
//         .getPublicUrl(storagePath);

//       await supabase.from("product_variant_images").insert({
//         variant_id: variant.id,
//         image_url: publicUrl.publicUrl,
//         is_primary: img.is_primary,
//         position: img.position,
//       });
//     }
//   }
// }




/////// above code used before the v3 image storage migration ///////


// import { supabase } from "@/lib/supabaseClient";
// import type { ProductImageUI } from "@/features/images/types";
// import type { VariantUI } from "../schema";

// /* ======================================================
//    HELPERS
// ====================================================== */

// function isBlobUrl(url: string) {
//   return url.startsWith("blob:");
// }

// async function blobUrlToFile(blobUrl: string, filename: string) {
//   const res = await fetch(blobUrl);
//   const blob = await res.blob();
//   return new File([blob], filename, { type: blob.type });
// }

// /* ======================================================
//    MAIN SERVICE
// ====================================================== */

// export async function saveImages(params: {
//   productId: string;
//   productImages: ProductImageUI[];
//   variants: VariantUI[];
// }) {
//   const { productId, productImages, variants } = params;

//   /* ================= PRODUCT IMAGES ================= */

//   for (const img of productImages) {
//     // Already saved image → skip
//     if (!isBlobUrl(img.image_url)) continue;

//     const file = await blobUrlToFile(
//       img.image_url,
//       `product-${productId}-${Date.now()}.jpg`
//     );

//     const storagePath = `products/${productId}/${file.name}`;

//     // ✅ v3 bucket
//     const { error: uploadError } = await supabase.storage
//       .from("product-images-v3")
//       .upload(storagePath, file, { upsert: false });

//     if (uploadError) throw uploadError;

//     const { data: publicUrl } = supabase.storage
//       .from("product-images-v3")
//       .getPublicUrl(storagePath);

//     await supabase.from("product_images").insert({
//       product_id: productId,
//       image_url: publicUrl.publicUrl,
//       is_primary: img.is_primary,
//       position: img.position,
//     });
//   }

//   /* ================= VARIANT IMAGES ================= */

//   for (const variant of variants) {
//     if (!variant.id || !variant.images?.length) continue;

//     for (const img of variant.images) {
//       // Already saved image → skip
//       if (!isBlobUrl(img.image_url)) continue;

//       const file = await blobUrlToFile(
//         img.image_url,
//         `variant-${variant.id}-${Date.now()}.jpg`
//       );

//       const storagePath = `variants/${variant.id}/${file.name}`;

//       // ✅ v3 bucket
//       const { error: uploadError } = await supabase.storage
//         .from("variant-images-v3")
//         .upload(storagePath, file, { upsert: false });

//       if (uploadError) throw uploadError;

//       const { data: publicUrl } = supabase.storage
//         .from("variant-images-v3")
//         .getPublicUrl(storagePath);

//       await supabase.from("product_variant_images").insert({
//         variant_id: variant.id,
//         image_url: publicUrl.publicUrl,
//         is_primary: img.is_primary,
//         position: img.position,
//       });
//     }
//   }
// }



////////// ****** above code worked before v3 with mobile app integration ***** //////

// import { supabase } from "@/lib/supabaseClient";
// import type { ProductImageUI } from "@/features/images/types";
// import type { VariantUI } from "../schema";

// /* ======================================================
//    HELPERS
// ====================================================== */

// function isBlobUrl(url: string) {
//   return url.startsWith("blob:");
// }

// async function blobUrlToFile(blobUrl: string, filename: string) {
//   const res = await fetch(blobUrl);
//   const blob = await res.blob();
//   return new File([blob], filename, { type: blob.type });
// }

// /* ======================================================
//    MAIN SERVICE
// ====================================================== */

// export async function saveImages(params: {
//   productId: string;
//   productImages: ProductImageUI[];
//   variants: VariantUI[];
// }) {
//   const { productId, productImages, variants } = params;

//   let primaryProductImageUrl: string | null = null;

//   /* ================= PRODUCT IMAGES ================= */

//   for (const img of productImages) {
//     // Already saved image → skip
//     if (!isBlobUrl(img.image_url)) continue;

//     const file = await blobUrlToFile(
//       img.image_url,
//       `product-${productId}-${Date.now()}.jpg`
//     );

//     const storagePath = `products/${productId}/${file.name}`;

//     // ✅ Upload to v3 bucket
//     const { error: uploadError } = await supabase.storage
//       .from("product-images-v3")
//       .upload(storagePath, file, { upsert: false });

//     if (uploadError) throw uploadError;

//     const { data: publicUrl } = supabase.storage
//       .from("product-images-v3")
//       .getPublicUrl(storagePath);

//     const imageUrl = publicUrl.publicUrl;

//     // 🔑 CAPTURE PRIMARY IMAGE
//     if (img.is_primary && !primaryProductImageUrl) {
//       primaryProductImageUrl = imageUrl;
//     }

//     await supabase.from("product_images").insert({
//       product_id: productId,
//       image_url: imageUrl,
//       is_primary: img.is_primary,
//       position: img.position,
//     });
//   }

//   /* ================= UPDATE PRODUCT THUMBNAIL ================= */

//   if (primaryProductImageUrl) {
//     const { error: thumbError } = await supabase
//       .from("products")
//       .update({
//         thumbnail: primaryProductImageUrl,
//       })
//       .eq("id", productId);

//     if (thumbError) throw thumbError;
//   }

//   /* ================= VARIANT IMAGES ================= */

//   for (const variant of variants) {
//     if (!variant.id || !variant.images?.length) continue;

//     for (const img of variant.images) {
//       if (!isBlobUrl(img.image_url)) continue;

//       const file = await blobUrlToFile(
//         img.image_url,
//         `variant-${variant.id}-${Date.now()}.jpg`
//       );

//       const storagePath = `variants/${variant.id}/${file.name}`;

//       const { error: uploadError } = await supabase.storage
//         .from("variant-images-v3")
//         .upload(storagePath, file, { upsert: false });

//       if (uploadError) throw uploadError;

//       const { data: publicUrl } = supabase.storage
//         .from("variant-images-v3")
//         .getPublicUrl(storagePath);

//       await supabase.from("product_variant_images").insert({
//         variant_id: variant.id,
//         image_url: publicUrl.publicUrl,
//         is_primary: img.is_primary,
//         position: img.position,
//       });
//     }
//   }
// }



////////// ****** above code for new created items correctly before admin and app v3 migration ***** //////

// import { supabase } from "@/lib/supabaseClient";
// import type { ProductImageUI } from "@/features/images/types";
// import type { VariantUI } from "../schema";

// /* ======================================================
//    HELPERS
// ====================================================== */

// function isBlobUrl(url: string) {
//   return url.startsWith("blob:");
// }

// async function blobUrlToFile(blobUrl: string, filename: string) {
//   const res = await fetch(blobUrl);
//   const blob = await res.blob();
//   return new File([blob], filename, { type: blob.type });
// }

// /* ======================================================
//    MAIN SERVICE
// ====================================================== */

// export async function saveImages(params: {
//   productId: string;
//   productImages: ProductImageUI[];
//   variants: VariantUI[];
// }) {
//   const { productId, productImages, variants } = params;

//   let primaryProductImageUrl: string | null = null;

//   /* ================= PRODUCT IMAGES ================= */

//   for (const img of productImages) {
//     // 🔑 EXISTING IMAGE (already in storage)
//     if (!isBlobUrl(img.image_url)) {
//       if (img.is_primary && !primaryProductImageUrl) {
//         primaryProductImageUrl = img.image_url;
//       }
//       continue;
//     }

//     // 🔑 NEW IMAGE UPLOAD
//     const file = await blobUrlToFile(
//       img.image_url,
//       `product-${productId}-${Date.now()}.jpg`
//     );

//     const storagePath = `products/${productId}/${file.name}`;

//     const { error: uploadError } = await supabase.storage
//       .from("product-images-v3")
//       .upload(storagePath, file, { upsert: false });

//     if (uploadError) throw uploadError;

//     const { data: publicUrl } = supabase.storage
//       .from("product-images-v3")
//       .getPublicUrl(storagePath);

//     const imageUrl = publicUrl.publicUrl;

//     if (img.is_primary && !primaryProductImageUrl) {
//       primaryProductImageUrl = imageUrl;
//     }

//     await supabase.from("product_images").insert({
//       product_id: productId,
//       image_url: imageUrl,
//       is_primary: img.is_primary,
//       position: img.position,
//     });
//   }

//   /* ================= UPDATE PRODUCT THUMBNAIL ================= */

//   if (primaryProductImageUrl) {
//     const { error } = await supabase
//       .from("products")
//       .update({ thumbnail: primaryProductImageUrl })
//       .eq("id", productId);

//     if (error) throw error;
//   }

//   /* ================= VARIANT IMAGES ================= */

//   for (const variant of variants) {
//     if (!variant.id || !variant.images?.length) continue;

//     for (const img of variant.images) {
//       if (!isBlobUrl(img.image_url)) continue;

//       const file = await blobUrlToFile(
//         img.image_url,
//         `variant-${variant.id}-${Date.now()}.jpg`
//       );

//       const storagePath = `variants/${variant.id}/${file.name}`;

//       const { error: uploadError } = await supabase.storage
//         .from("variant-images-v3")
//         .upload(storagePath, file, { upsert: false });

//       if (uploadError) throw uploadError;

//       const { data: publicUrl } = supabase.storage
//         .from("variant-images-v3")
//         .getPublicUrl(storagePath);

//       await supabase.from("product_variant_images").insert({
//         variant_id: variant.id,
//         image_url: publicUrl.publicUrl,
//         is_primary: img.is_primary,
//         position: img.position,
//       });
//     }
//   }
// }



/////////// above worked before the old images udpate


import { supabase } from "@/lib/supabaseClient";
import type { ProductImageUI } from "@/features/images/types";
import type { VariantUI } from "../schema";

/* ======================================================
   HELPERS
====================================================== */

function isBlobUrl(url: string) {
  return url.startsWith("blob:");
}

async function blobUrlToFile(blobUrl: string, filename: string) {
  const res = await fetch(blobUrl);
  const blob = await res.blob();
  return new File([blob], filename, { type: blob.type });
}

/* ======================================================
   MAIN SERVICE
====================================================== */

export async function saveImages(params: {
  productId: string;
  productImages: ProductImageUI[];
  variants: VariantUI[];
}) {
  const { productId, productImages, variants } = params;

  /* ======================================================
     1️⃣ CLEAN EXISTING PRODUCT IMAGES
     - Reset all primaries
     - Delete removed images
  ====================================================== */

  // Fetch existing DB images
  const { data: existingImages } = await supabase
    .from("product_images")
    .select("id, image_url")
    .eq("product_id", productId);

  const existingMap = new Map(
    (existingImages ?? []).map((img) => [img.image_url, img.id])
  );

  const currentUrls = new Set(
    productImages
      .filter((img) => !isBlobUrl(img.image_url))
      .map((img) => img.image_url)
  );

  // 🗑 DELETE removed images
  const toDelete = (existingImages ?? [])
    .filter((img) => !currentUrls.has(img.image_url))
    .map((img) => img.id);

  if (toDelete.length > 0) {
    await supabase.from("product_images").delete().in("id", toDelete);
  }

  // 🔁 RESET all primaries
  await supabase
    .from("product_images")
    .update({ is_primary: false })
    .eq("product_id", productId);

  let primaryImageUrl: string | null = null;

  /* ======================================================
     2️⃣ UPSERT PRODUCT IMAGES
  ====================================================== */

  for (const img of productImages) {
    // EXISTING IMAGE
    if (!isBlobUrl(img.image_url)) {
      const id = existingMap.get(img.image_url);

      if (!id) continue;

      if (img.is_primary && !primaryImageUrl) {
        primaryImageUrl = img.image_url;
      }

      await supabase
        .from("product_images")
        .update({
          is_primary: img.is_primary,
          position: img.position,
        })
        .eq("id", id);

      continue;
    }

    // NEW IMAGE
    const file = await blobUrlToFile(
      img.image_url,
      `product-${productId}-${Date.now()}.jpg`
    );

    const storagePath = `products/${productId}/${file.name}`;

    const { error: uploadError } = await supabase.storage
      .from("product-images-v3")
      .upload(storagePath, file, { upsert: false });

    if (uploadError) throw uploadError;

    const { data: publicUrl } = supabase.storage
      .from("product-images-v3")
      .getPublicUrl(storagePath);

    if (img.is_primary && !primaryImageUrl) {
      primaryImageUrl = publicUrl.publicUrl;
    }

    await supabase.from("product_images").insert({
      product_id: productId,
      image_url: publicUrl.publicUrl,
      is_primary: img.is_primary,
      position: img.position,
    });
  }

  /* ======================================================
     3️⃣ UPDATE PRODUCT THUMBNAIL
  ====================================================== */

  if (primaryImageUrl) {
    await supabase
      .from("products")
      .update({ thumbnail: primaryImageUrl })
      .eq("id", productId);
  }

  /* ======================================================
     4️⃣ VARIANT IMAGES (UNCHANGED)
  ====================================================== */

  for (const variant of variants) {
    if (!variant.id || !variant.images?.length) continue;

    for (const img of variant.images) {
      if (!isBlobUrl(img.image_url)) continue;

      const file = await blobUrlToFile(
        img.image_url,
        `variant-${variant.id}-${Date.now()}.jpg`
      );

      const storagePath = `variants/${variant.id}/${file.name}`;

      const { error } = await supabase.storage
        .from("variant-images-v3")
        .upload(storagePath, file, { upsert: false });

      if (error) throw error;

      const { data: publicUrl } = supabase.storage
        .from("variant-images-v3")
        .getPublicUrl(storagePath);

      await supabase.from("product_variant_images").insert({
        variant_id: variant.id,
        image_url: publicUrl.publicUrl,
        is_primary: img.is_primary,
        position: img.position,
      });
    }
  }
}
