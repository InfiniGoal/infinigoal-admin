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

      const { data } = await supabase
        .from("products")
        .select("id, name, price, is_active")
        .eq("brand", brandName);

      setProducts(data ?? []);
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
              {products.length} product{products.length !== 1 && "s"}
            </p>
          </div>

          <button style={closeBtn} onClick={onClose}>
            ✕
          </button>
        </div>

        {loading ? (
          <div style={stateBox}>Loading...</div>
        ) : products.length === 0 ? (
          <div style={stateBox}>No products found</div>
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
                    {p.is_active ? "Active" : "Inactive"}
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

/* ===== styles ===== */

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.45)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const panel: React.CSSProperties = {
  background: "#fff",
  width: "90%",
  maxWidth: 900,
  maxHeight: "80vh",
  overflow: "auto",
  borderRadius: 18,
  padding: 16,
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const title: React.CSSProperties = {
  margin: 0,
  fontSize: 18,
  fontWeight: 800,
};

const subtitle: React.CSSProperties = {
  margin: 0,
  fontSize: 13,
  color: "#6B7280",
};

const closeBtn: React.CSSProperties = {
  border: "none",
  background: "#F3F4F6",
  borderRadius: 8,
  padding: "6px 10px",
  cursor: "pointer",
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
};

const th: React.CSSProperties = {
  textAlign: "left",
  padding: 12,
  fontSize: 12,
  color: "#6B7280",
  borderBottom: "1px solid #eee",
};

const td: React.CSSProperties = {
  padding: 12,
  borderBottom: "1px solid #f1f1f1",
};

const editBtn: React.CSSProperties = {
  background: "#bf9602",
  color: "#fff",
  border: "none",
  padding: "6px 12px",
  borderRadius: 8,
  cursor: "pointer",
};

const stateBox: React.CSSProperties = {
  padding: 32,
  textAlign: "center",
  color: "#6B7280",
};
