// import { Link } from "react-router-dom";

// export default function ProductsList() {
//   return (
//     <div>
//       <header style={header}>
//         <h1 style={{ margin: 0 }}>Products</h1>

//         <Link to="/products/new">
//           <button style={btnPrimary}>+ Add Product</button>
//         </Link>
//       </header>

//       <div style={list}>
//         {/* Mock product */}
//         <div style={card}>
//           <div>
//             <strong>Turmeric Powder</strong>
//             <div style={meta}>Spices • Active</div>
//           </div>

//           <div style={{ display: "flex", gap: 8 }}>
//             <button style={btnSecondary}>Edit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- styles ---------------- */

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 20,
// };

// const list: React.CSSProperties = {
//   display: "grid",
//   gap: 12,
// };

// const card: React.CSSProperties = {
//   padding: 14,
//   border: "1px solid #e5e7eb",
//   borderRadius: 12,
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #111827",
//   background: "#111827",
//   color: "white",
//   cursor: "pointer",
// };

// const btnSecondary: React.CSSProperties = {
//   padding: "6px 10px",
//   borderRadius: 8,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };




/////////////// above seems like dummy

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { supabase } from "@/lib/supabaseClient";

// type ProductRow = {
//   id: string;
//   name: string;
//   brand: string | null;
//   main_category: string | null;
//   is_active: boolean;
//   created_at: string;
// };

// export default function ProductsList() {
//   const [products, setProducts] = useState<ProductRow[]>([]);
//   const [search, setSearch] = useState("");
//   const [status, setStatus] = useState<"all" | "active" | "inactive">("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   async function fetchProducts() {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("products")
//       .select("id, name, brand, main_category, is_active, created_at")
//       .order("created_at", { ascending: false });

//     if (!error && data) {
//       setProducts(data);
//     }

//     setLoading(false);
//   }

//   async function toggleStatus(product: ProductRow) {
//     await supabase
//       .from("products")
//       .update({ is_active: !product.is_active })
//       .eq("id", product.id);

//     fetchProducts();
//   }

//   const filtered = products.filter((p) => {
//     if (status === "active" && !p.is_active) return false;
//     if (status === "inactive" && p.is_active) return false;

//     if (search && !p.name.toLowerCase().includes(search.toLowerCase())) {
//       return false;
//     }

//     return true;
//   });

//   return (
//     <div>
//       {/* ================= HEADER ================= */}
//       <header style={header}>
//         <h1 style={{ margin: 0 }}>Products</h1>

//         <Link to="/products/new">
//           <button style={btnPrimary}>+ Add Product</button>
//         </Link>
//       </header>

//       {/* ================= FILTER BAR ================= */}
//       <div style={filters}>
//         <input
//           placeholder="Search product..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={searchInput}
//         />

//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value as any)}
//           style={select}
//         >
//           <option value="all">All</option>
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div>

//       {/* ================= LIST ================= */}
//       {loading ? (
//         <div style={empty}>Loading products...</div>
//       ) : filtered.length === 0 ? (
//         <div style={empty}>No products found</div>
//       ) : (
//         <div style={list}>
//           {filtered.map((p) => (
//             <div key={p.id} style={row}>
//               <div>
//                 <strong>{p.name}</strong>
//                 <div style={meta}>
//                   {p.brand || "—"} • {p.main_category || "—"} •{" "}
//                   {p.is_active ? "Active" : "Inactive"}
//                 </div>
//               </div>

//               <div style={{ display: "flex", gap: 8 }}>
//                 <Link to={`/products/${p.id}/edit`}>
//                   <button style={btnGhost}>Edit</button>
//                 </Link>




//                 <button
//                   style={p.is_active ? btnDanger : btnSuccess}
//                   onClick={() => toggleStatus(p)}
//                 >
//                   {p.is_active ? "Disable" : "Enable"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: 20,
// };

// const filters: React.CSSProperties = {
//   display: "flex",
//   gap: 12,
//   marginBottom: 16,
// };

// const searchInput: React.CSSProperties = {
//   flex: 1,
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
// };

// const select: React.CSSProperties = {
//   padding: "10px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
// };

// const list: React.CSSProperties = {
//   display: "grid",
//   gap: 12,
// };

// const row: React.CSSProperties = {
//   padding: 16,
//   borderRadius: 14,
//   background: "#fff",
//   boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 4,
// };

// const empty: React.CSSProperties = {
//   padding: 20,
//   color: "#6b7280",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#111827",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };

// const btnGhost: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   background: "#ef4444",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };

// const btnSuccess: React.CSSProperties = {
//   padding: "8px 12px",
//   borderRadius: 10,
//   background: "#16a34a",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };




//////// above code worked before edit button


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { supabase } from "@/lib/supabaseClient";

// type ProductRow = {
//   id: string;
//   name: string;
//   brand: string | null;
//   main_category: string | null;
//   is_active: boolean;
//   created_at: string;
// };

// export default function ProductsList() {
//   const [products, setProducts] = useState<ProductRow[]>([]);
//   const [search, setSearch] = useState("");
//   const [status, setStatus] =
//     useState<"all" | "active" | "inactive">("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   async function fetchProducts() {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("products")
//       .select("id, name, brand, main_category, is_active, created_at")
//       .order("created_at", { ascending: false });

//     if (!error && data) {
//       setProducts(data);
//     }

//     setLoading(false);
//   }

//   async function toggleStatus(product: ProductRow) {
//     await supabase
//       .from("products")
//       .update({ is_active: !product.is_active })
//       .eq("id", product.id);

//     fetchProducts();
//   }

//   const filtered = products.filter((p) => {
//     if (status === "active" && !p.is_active) return false;
//     if (status === "inactive" && p.is_active) return false;

//     if (
//       search &&
//       !p.name.toLowerCase().includes(search.toLowerCase())
//     ) {
//       return false;
//     }

//     return true;
//   });

//   return (
//     <div>
//       {/* ================= HEADER ================= */}
//       <header style={header}>
//         <div>
//           <h1 style={title}>Products</h1>
//           <p style={subtitle}>
//             Manage your catalog, pricing, and availability
//           </p>
//         </div>

//         <Link to="/products/new">
//           <button style={btnPrimary}>+ Add Product</button>
//         </Link>
//       </header>

//       {/* ================= FILTER BAR ================= */}
//       <div style={filters}>
//         <input
//           placeholder="Search by product name…"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={searchInput}
//         />

//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value as any)}
//           style={select}
//         >
//           <option value="all">All Products</option>
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div>

//       {/* ================= LIST ================= */}
//       {loading ? (
//         <div style={empty}>Loading products…</div>
//       ) : filtered.length === 0 ? (
//         <div style={empty}>No products found</div>
//       ) : (
//         <div style={list}>
//           {filtered.map((p) => (
//             <div key={p.id} style={row}>
//               <div style={rowLeft}>
//                 <strong style={name}>{p.name}</strong>
//                 <div style={meta}>
//                   {p.brand || "—"} • {p.main_category || "—"} •{" "}
//                   <span
//                     style={{
//                       color: p.is_active ? "#16a34a" : "#ef4444",
//                       fontWeight: 600,
//                     }}
//                   >
//                     {p.is_active ? "Active" : "Inactive"}
//                   </span>
//                 </div>
//               </div>

//               <div style={actions}>
//                 <Link to={`/products/${p.id}/edit`}>
//                   <button style={btnGhost}>Edit</button>
//                 </Link>

//                 <button
//                   style={p.is_active ? btnDanger : btnSuccess}
//                   onClick={() => toggleStatus(p)}
//                 >
//                   {p.is_active ? "Disable" : "Enable"}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: 24,
// };

// const title: React.CSSProperties = {
//   margin: 0,
//   fontSize: 26,
//   fontWeight: 900,
// };

// const subtitle: React.CSSProperties = {
//   marginTop: 6,
//   fontSize: 14,
//   color: "#6b7280",
// };

// const filters: React.CSSProperties = {
//   display: "flex",
//   gap: 12,
//   marginBottom: 18,
// };

// const searchInput: React.CSSProperties = {
//   flex: 1,
//   padding: "12px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   fontSize: 14,
// };

// const select: React.CSSProperties = {
//   padding: "12px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   fontSize: 14,
// };

// const list: React.CSSProperties = {
//   display: "grid",
//   gap: 14,
// };

// const row: React.CSSProperties = {
//   padding: 18,
//   borderRadius: 16,
//   background: "#fff",
//   boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };

// const rowLeft: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
// };

// const name: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 700,
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 6,
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   gap: 10,
// };

// const empty: React.CSSProperties = {
//   padding: 24,
//   color: "#6b7280",
//   textAlign: "center",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "12px 16px",
//   borderRadius: 14,
//   background: "#111827",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };

// const btnGhost: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#ef4444",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };

// const btnSuccess: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#16a34a",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };




////////// above code worked before the delete button


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

type ProductRow = {
  id: string;
  name: string;
  brand: string | null;
  main_category: string | null;
  is_active: boolean;
  created_at: string;
};

export default function ProductsList() {
  const [products, setProducts] = useState<ProductRow[]>([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] =
    useState<"all" | "active" | "inactive">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  /* ================= FETCH ================= */

  async function fetchProducts() {
    setLoading(true);

    const { data, error } = await supabase
      .from("products")
      .select("id, name, brand, main_category, is_active, created_at")
      .order("created_at", { ascending: false });

    if (!error && data) {
      setProducts(data);
    }

    setLoading(false);
  }


  
  /* ================= STATUS TOGGLE ================= */

  async function toggleStatus(product: ProductRow) {
    await supabase
      .from("products")
      .update({ is_active: !product.is_active })
      .eq("id", product.id);

    fetchProducts();
  }

  /* ================= DELETE PRODUCT (CASCADE) ================= */

  async function deleteProduct(productId: string) {
    const ok = confirm(
      "Are you sure?\n\nThis will permanently delete:\n• Product\n• Variants\n• Variant Images\n\nThis action cannot be undone."
    );

    if (!ok) return;

    await supabase
      .from("products")
      .delete()
      .eq("id", productId);

    fetchProducts();
  }

  /* ================= FILTER ================= */

  const filtered = products.filter((p) => {
    if (status === "active" && !p.is_active) return false;
    if (status === "inactive" && p.is_active) return false;

    if (
      search &&
      !p.name.toLowerCase().includes(search.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  /* ================= UI ================= */

  return (
    <div>
      {/* ================= HEADER ================= */}
      <header style={header}>
        <div>
          <h1 style={title}>Products</h1>
          <p style={subtitle}>
            Manage your catalog, pricing, and availability
          </p>
        </div>

        <Link to="/products/new">
          <button style={btnPrimary}>+ Add Product</button>
        </Link>
      </header>

      {/* ================= FILTER BAR ================= */}
      <div style={filters}>
        <input
          placeholder="Search by product name…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchInput}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as any)}
          style={select}
        >
          <option value="all">All Products</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {/* ================= LIST ================= */}
      {loading ? (
        <div style={empty}>Loading products…</div>
      ) : filtered.length === 0 ? (
        <div style={empty}>No products found</div>
      ) : (
        <div style={list}>
          {filtered.map((p) => (
            <div key={p.id} style={row}>
              <div style={rowLeft}>
                <strong style={name}>{p.name}</strong>
                <div style={meta}>
                  {p.brand || "—"} • {p.main_category || "—"} •{" "}
                  <span
                    style={{
                      color: p.is_active ? "#16a34a" : "#ef4444",
                      fontWeight: 600,
                    }}
                  >
                    {p.is_active ? "Active" : "Inactive"}
                  </span>
                </div>
              </div>

              <div style={actions}>
                <Link to={`/products/${p.id}/edit`}>
                  <button style={btnGhost}>Edit</button>
                </Link>

                <button
                  style={p.is_active ? btnDanger : btnSuccess}
                  onClick={() => toggleStatus(p)}
                >
                  {p.is_active ? "Disable" : "Enable"}
                </button>

                <button
                  style={btnDelete}
                  onClick={() => deleteProduct(p.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================= STYLES ================= */

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  marginBottom: 24,
};

const title: React.CSSProperties = {
  margin: 0,
  fontSize: 26,
  fontWeight: 900,
};

const subtitle: React.CSSProperties = {
  marginTop: 6,
  fontSize: 14,
  color: "#6b7280",
};

const filters: React.CSSProperties = {
  display: "flex",
  gap: 12,
  marginBottom: 18,
};

const searchInput: React.CSSProperties = {
  flex: 1,
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  fontSize: 14,
};

const select: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  fontSize: 14,
};

const list: React.CSSProperties = {
  display: "grid",
  gap: 14,
};

const row: React.CSSProperties = {
  padding: 18,
  borderRadius: 16,
  background: "#fff",
  boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const rowLeft: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const name: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 700,
};

const meta: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7280",
  marginTop: 6,
};

const actions: React.CSSProperties = {
  display: "flex",
  gap: 10,
};

const empty: React.CSSProperties = {
  padding: 24,
  color: "#6b7280",
  textAlign: "center",
};

const btnPrimary: React.CSSProperties = {
  padding: "12px 16px",
  borderRadius: 14,
  background: "#111827",
  color: "#fff",
  border: "none",
  fontWeight: 700,
  cursor: "pointer",
};

const btnGhost: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid #e5e7eb",
  background: "white",
  cursor: "pointer",
};

const btnDanger: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  background: "#ef4444",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const btnSuccess: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  background: "#16a34a",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const btnDelete: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  background: "#7f1d1d",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  fontWeight: 700,
};





/////////////// above code worked before the duplicate the products pages

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { supabase } from "@/lib/supabaseClient";

// type ProductRow = {
//   id: string;
//   name: string;
//   brand: string | null;
//   main_category: string | null;
//   is_active: boolean;
//   created_at: string;
// };

// export default function ProductsList() {
//   const [products, setProducts] = useState<ProductRow[]>([]);
//   const [search, setSearch] = useState("");
//   const [status, setStatus] =
//     useState<"all" | "active" | "inactive">("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   /* ================= FETCH ================= */

//   async function fetchProducts() {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("products")
//       .select("id, name, brand, main_category, is_active, created_at")
//       .order("created_at", { ascending: false });

//     if (!error && data) {
//       setProducts(data);
//     }

//     setLoading(false);
//   }

//   /* ================= STATUS TOGGLE ================= */

//   async function toggleStatus(product: ProductRow) {
//     await supabase
//       .from("products")
//       .update({ is_active: !product.is_active })
//       .eq("id", product.id);

//     fetchProducts();
//   }

//   /* ================= DELETE PRODUCT (CASCADE) ================= */

//   async function deleteProduct(productId: string) {
//     const ok = confirm(
//       "Are you sure?\n\nThis will permanently delete:\n• Product\n• Variants\n• Variant Images\n\nThis action cannot be undone."
//     );

//     if (!ok) return;

//     await supabase
//       .from("products")
//       .delete()
//       .eq("id", productId);

//     fetchProducts();
//   }

  




//   async function duplicateProduct(productId: string) {
//   const ok = confirm("Duplicate this product?");
//   if (!ok) return;

//   /* ================= 1. FETCH PRODUCT ================= */

//   const { data: product } = await supabase
//     .from("products")
//     .select("*")
//     .eq("id", productId)
//     .single();

//   if (!product) {
//     alert("Original product not found");
//     return;
//   }

//   /* ================= 2. PREPARE UNIQUE FIELDS ================= */

//   const newName = `${product.name} (Copy)`;

//   // 🔑 VERY IMPORTANT: slug must be unique
//   const newSlug = `${product.slug}-copy-${Date.now()}`;

//   /* ================= 3. INSERT NEW PRODUCT ================= */

//   const { data: newProduct, error: productError } = await supabase
//     .from("products")
//     .insert({
//       ...product,
//       id: undefined,
//       name: newName,
//       slug: newSlug,
//       is_active: false,
//       created_at: undefined,
//     })
//     .select()
//     .single();

//   if (productError || !newProduct) {
//     alert("Product duplication failed");
//     return;
//   }

//   /* ================= 4. COPY PRODUCT IMAGES ================= */

//   const { data: productImages } = await supabase
//     .from("product_images")
//     .select("*")
//     .eq("product_id", productId);

//   if (productImages?.length) {
//     await supabase.from("product_images").insert(
//       productImages.map(img => ({
//         ...img,
//         id: undefined,
//         product_id: newProduct.id,
//       }))
//     );
//   }

//   /* ================= 5. COPY VARIANTS ================= */

//   const { data: variants } = await supabase
//     .from("product_variants")
//     .select("*")
//     .eq("product_id", productId);

//   for (const v of variants ?? []) {
//     const { data: newVariant } = await supabase
//       .from("product_variants")
//       .insert({
//         ...v,
//         id: undefined,
//         product_id: newProduct.id,
//       })
//       .select()
//       .single();

//     if (!newVariant) continue;

//     /* ================= 6. COPY VARIANT IMAGES ================= */

//     const { data: variantImages } = await supabase
//       .from("product_variant_images")
//       .select("*")
//       .eq("variant_id", v.id);

//     if (variantImages?.length) {
//       await supabase.from("product_variant_images").insert(
//         variantImages.map(img => ({
//           ...img,
//           id: undefined,
//           variant_id: newVariant.id,
//         }))
//       );
//     }
//   }

//   /* ================= 7. REFRESH LIST ================= */

//   fetchProducts();
// }



//   /* ================= FILTER ================= */

//   const filtered = products.filter((p) => {
//     if (status === "active" && !p.is_active) return false;
//     if (status === "inactive" && p.is_active) return false;

//     if (
//       search &&
//       !p.name.toLowerCase().includes(search.toLowerCase())
//     ) {
//       return false;
//     }

//     return true;
//   });

//   /* ================= UI ================= */

//   return (
//     <div>
//       {/* ================= HEADER ================= */}
//       <header style={header}>
//         <div>
//           <h1 style={title}>Products</h1>
//           <p style={subtitle}>
//             Manage your catalog, pricing, and availability
//           </p>
//         </div>

//         <Link to="/products/new">
//           <button style={btnPrimary}>+ Add Product</button>
//         </Link>
//       </header>

//       {/* ================= FILTER BAR ================= */}
//       <div style={filters}>
//         <input
//           placeholder="Search by product name…"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={searchInput}
//         />

//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value as any)}
//           style={select}
//         >
//           <option value="all">All Products</option>
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div>

//       {/* ================= LIST ================= */}
//       {loading ? (
//         <div style={empty}>Loading products…</div>
//       ) : filtered.length === 0 ? (
//         <div style={empty}>No products found</div>
//       ) : (
//         <div style={list}>
//           {filtered.map((p) => (
//             <div key={p.id} style={row}>
//               <div style={rowLeft}>
//                 <strong style={name}>{p.name}</strong>
//                 <div style={meta}>
//                   {p.brand || "—"} • {p.main_category || "—"} •{" "}
//                   <span
//                     style={{
//                       color: p.is_active ? "#16a34a" : "#ef4444",
//                       fontWeight: 600,
//                     }}
//                   >
//                     {p.is_active ? "Active" : "Inactive"}
//                   </span>
//                 </div>
//               </div>

//               <div style={actions}>
//                 <Link to={`/products/${p.id}/edit`}>
//                   <button style={btnGhost}>Edit</button>
//                 </Link>

//                 {/* <button
//                   style={btnGhost}
//                   onClick={() => duplicateProduct(p.id)}
//                 >
//                   Duplicate
//                 </button> */}

//                 <button
//                   style={p.is_active ? btnDanger : btnSuccess}
//                   onClick={() => toggleStatus(p)}
//                 >
//                   {p.is_active ? "Disable" : "Enable"}
//                 </button>

//                 <button
//                   style={btnDelete}
//                   onClick={() => deleteProduct(p.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ================= STYLES (UNCHANGED) ================= */

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: 24,
// };

// const title: React.CSSProperties = {
//   margin: 0,
//   fontSize: 26,
//   fontWeight: 900,
// };

// const subtitle: React.CSSProperties = {
//   marginTop: 6,
//   fontSize: 14,
//   color: "#6b7280",
// };

// const filters: React.CSSProperties = {
//   display: "flex",
//   gap: 12,
//   marginBottom: 18,
// };

// const searchInput: React.CSSProperties = {
//   flex: 1,
//   padding: "12px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   fontSize: 14,
// };

// const select: React.CSSProperties = {
//   padding: "12px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   fontSize: 14,
// };

// const list: React.CSSProperties = {
//   display: "grid",
//   gap: 14,
// };

// const row: React.CSSProperties = {
//   padding: 18,
//   borderRadius: 16,
//   background: "#fff",
//   boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };

// const rowLeft: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
// };

// const name: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 700,
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 6,
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   gap: 10,
// };

// const empty: React.CSSProperties = {
//   padding: 24,
//   color: "#6b7280",
//   textAlign: "center",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "12px 16px",
//   borderRadius: 14,
//   background: "#111827",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };

// const btnGhost: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#ef4444",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };

// const btnSuccess: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#16a34a",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };

// const btnDelete: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#7f1d1d",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
//   fontWeight: 700,
// };





//////////// below bring back before the duplicate button code


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { supabase } from "@/lib/supabaseClient";

// type ProductRow = {
//   id: string;
//   name: string;
//   brand: string | null;
//   main_category: string | null;
//   is_active: boolean;
//   created_at: string;
// };

// export default function ProductsList() {
//   const [products, setProducts] = useState<ProductRow[]>([]);
//   const [search, setSearch] = useState("");
//   const [status, setStatus] =
//     useState<"all" | "active" | "inactive">("all");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   /* ================= FETCH ================= */

//   async function fetchProducts() {
//     setLoading(true);

//     const { data, error } = await supabase
//       .from("products")
//       .select("id, name, brand, main_category, is_active, created_at")
//       .order("created_at", { ascending: false });

//     if (!error && data) {
//       setProducts(data);
//     }

//     setLoading(false);
//   }

//   /* ================= STATUS TOGGLE ================= */

//   async function toggleStatus(product: ProductRow) {
//     await supabase
//       .from("products")
//       .update({ is_active: !product.is_active })
//       .eq("id", product.id);

//     fetchProducts();
//   }

//   /* ================= DELETE PRODUCT (CASCADE) ================= */

//   async function deleteProduct(productId: string) {
//     const ok = confirm(
//       "Are you sure?\n\nThis will permanently delete:\n• Product\n• Variants\n• Variant Images\n\nThis action cannot be undone."
//     );

//     if (!ok) return;

//     await supabase
//       .from("products")
//       .delete()
//       .eq("id", productId);

//     fetchProducts();
//   }

//   /* ================= FILTER ================= */

//   const filtered = products.filter((p) => {
//     if (status === "active" && !p.is_active) return false;
//     if (status === "inactive" && p.is_active) return false;

//     if (
//       search &&
//       !p.name.toLowerCase().includes(search.toLowerCase())
//     ) {
//       return false;
//     }

//     return true;
//   });

//   /* ================= UI ================= */

//   return (
//     <div>
//       {/* ================= HEADER ================= */}
//       <header style={header}>
//         <div>
//           <h1 style={title}>Products</h1>
//           <p style={subtitle}>
//             Manage your catalog, pricing, and availability
//           </p>
//         </div>

//         <Link to="/products/new">
//           <button style={btnPrimary}>+ Add Product</button>
//         </Link>
//       </header>

//       {/* ================= FILTER BAR ================= */}
//       <div style={filters}>
//         <input
//           placeholder="Search by product name…"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={searchInput}
//         />

//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value as any)}
//           style={select}
//         >
//           <option value="all">All Products</option>
//           <option value="active">Active</option>
//           <option value="inactive">Inactive</option>
//         </select>
//       </div>

//       {/* ================= LIST ================= */}
//       {loading ? (
//         <div style={empty}>Loading products…</div>
//       ) : filtered.length === 0 ? (
//         <div style={empty}>No products found</div>
//       ) : (
//         <div style={list}>
//           {filtered.map((p) => (
//             <div key={p.id} style={row}>
//               <div style={rowLeft}>
//                 <strong style={name}>{p.name}</strong>
//                 <div style={meta}>
//                   {p.brand || "—"} • {p.main_category || "—"} •{" "}
//                   <span
//                     style={{
//                       color: p.is_active ? "#16a34a" : "#ef4444",
//                       fontWeight: 600,
//                     }}
//                   >
//                     {p.is_active ? "Active" : "Inactive"}
//                   </span>
//                 </div>
//               </div>

//               <div style={actions}>
//                 <Link to={`/products/${p.id}/edit`}>
//                   <button style={btnGhost}>Edit</button>
//                 </Link>

//                 <button
//                   style={p.is_active ? btnDanger : btnSuccess}
//                   onClick={() => toggleStatus(p)}
//                 >
//                   {p.is_active ? "Disable" : "Enable"}
//                 </button>

//                 <button
//                   style={btnDelete}
//                   onClick={() => deleteProduct(p.id)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// /* ================= STYLES ================= */

// const header: React.CSSProperties = {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "flex-start",
//   marginBottom: 24,
// };

// const title: React.CSSProperties = {
//   margin: 0,
//   fontSize: 26,
//   fontWeight: 900,
// };

// const subtitle: React.CSSProperties = {
//   marginTop: 6,
//   fontSize: 14,
//   color: "#6b7280",
// };

// const filters: React.CSSProperties = {
//   display: "flex",
//   gap: 12,
//   marginBottom: 18,
// };

// const searchInput: React.CSSProperties = {
//   flex: 1,
//   padding: "12px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   fontSize: 14,
// };

// const select: React.CSSProperties = {
//   padding: "12px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   fontSize: 14,
// };

// const list: React.CSSProperties = {
//   display: "grid",
//   gap: 14,
// };

// const row: React.CSSProperties = {
//   padding: 18,
//   borderRadius: 16,
//   background: "#fff",
//   boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
// };

// const rowLeft: React.CSSProperties = {
//   display: "flex",
//   flexDirection: "column",
// };

// const name: React.CSSProperties = {
//   fontSize: 16,
//   fontWeight: 700,
// };

// const meta: React.CSSProperties = {
//   fontSize: 13,
//   color: "#6b7280",
//   marginTop: 6,
// };

// const actions: React.CSSProperties = {
//   display: "flex",
//   gap: 10,
// };

// const empty: React.CSSProperties = {
//   padding: 24,
//   color: "#6b7280",
//   textAlign: "center",
// };

// const btnPrimary: React.CSSProperties = {
//   padding: "12px 16px",
//   borderRadius: 14,
//   background: "#111827",
//   color: "#fff",
//   border: "none",
//   fontWeight: 700,
//   cursor: "pointer",
// };

// const btnGhost: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   border: "1px solid #e5e7eb",
//   background: "white",
//   cursor: "pointer",
// };

// const btnDanger: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#ef4444",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };

// const btnSuccess: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#16a34a",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
// };

// const btnDelete: React.CSSProperties = {
//   padding: "10px 14px",
//   borderRadius: 12,
//   background: "#7f1d1d",
//   color: "#fff",
//   border: "none",
//   cursor: "pointer",
//   fontWeight: 700,
// };
