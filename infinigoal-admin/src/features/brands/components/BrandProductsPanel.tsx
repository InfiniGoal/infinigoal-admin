import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";

type Props = {
  brandName: string;
  onClose: () => void;
};

type Product = {
  id: string;
  name: string;
  price: number;
  is_active: boolean;
};

export default function BrandProductsPanel({
  brandName,
  onClose,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("products")
        .select("id, name, price, is_active")
        .eq("brand", brandName);

      if (error) setProducts([]);
      else setProducts(data ?? []);

      setLoading(false);
    })();
  }, [brandName]);

  return (
    <div style={overlay}>
      <div style={panel}>
        <div style={header}>
          <div>
            <h3 style={title}>Brand: {brandName}</h3>
            <p style={subtitle}>
              {products.length} product{products.length !== 1 && "s"} found
            </p>
          </div>

          <button style={closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {loading ? (
          <div style={stateBox}>Loading products…</div>
        ) : products.length === 0 ? (
          <div style={stateBox}>No products under this brand</div>
        ) : (
          <table style={table}>
            <thead>
              <tr>
                <th style={th}>Product</th>
                <th style={th}>Price</th>
                <th style={th}>Status</th>
                <th style={th}></th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td style={td}>{p.name}</td>
                  <td style={td}>₹{p.price}</td>
                  <td style={td}>
                    <span
                      style={{
                        padding: "4px 10px",
                        borderRadius: 999,
                        fontSize: 12,
                        fontWeight: 700,
                        background: p.is_active
                          ? "#E8F8EF"
                          : "#FDECEC",
                        color: p.is_active
                          ? "#137A3A"
                          : "#B42318",
                      }}
                    >
                      {p.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td style={{ ...td, textAlign: "right" }}>
                    <button
                      style={editBtn}
                      onClick={() =>
                        navigate(`/products/${p.id}/edit`)
                      }
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(15, 23, 42, 0.55)",
  backdropFilter: "blur(2px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
} as const;

const panel = {
  background: "#fff",
  width: "92%",
  maxWidth: 900,
  maxHeight: "80vh",
  overflow: "auto",
  borderRadius: 18,
  boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
} as const;

const header = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  borderBottom: "1px solid #eee",
} as const;

const title = { margin: 0, fontSize: 18, fontWeight: 800 };
const subtitle = { margin: "4px 0 0", fontSize: 13, color: "#6B7280" };
const closeBtn = {
  border: "none",
  background: "#F3F4F6",
  borderRadius: 10,
  padding: "6px 10px",
  cursor: "pointer",
} as const;

const table = { width: "100%", borderCollapse: "collapse" } as const;
const th = { textAlign: "left", padding: "12px 20px" } as const;
const td = { padding: "14px 20px" } as const;

const editBtn = {
  padding: "6px 12px",
  borderRadius: 8,
  border: "none",
  background: "#bf9602",
  color: "#fff",
  cursor: "pointer",
  fontWeight: 700,
} as const;

const stateBox = {
  padding: 32,
  textAlign: "center",
  color: "#6B7280",
} as const;
