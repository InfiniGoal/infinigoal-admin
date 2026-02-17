import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listProductsByTag } from "../api";

type Props = {
  tag: string;
  onClose: () => void;
};

type Product = {
  id: string;
  name: string;
  price: number;
  is_active: boolean;
};

export default function TagProductsPanel({ tag, onClose }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setProducts((await listProductsByTag(tag)) as Product[]);
      setLoading(false);
    })();
  }, [tag]);

  return (
    <div style={overlay}>
      <div style={panel}>
        <div style={header}>
          <div>
            <h3 style={title}>Tag: {tag}</h3>
            <p style={subtitle}>
              {products.length} product{products.length !== 1 && "s"} found
            </p>
          </div>

          <button style={closeBtn} onClick={onClose}>✕</button>
        </div>

        {loading ? (
          <div style={stateBox}>Loading products…</div>
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
                <tr key={p.id} style={tr}>
                  <td style={td}>{p.name}</td>
                  <td style={td}>₹{p.price}</td>
                  <td style={td}>
                    <span
                      style={{
                        ...status,
                        background: p.is_active ? "#E8F8EF" : "#FDECEC",
                        color: p.is_active ? "#137A3A" : "#B42318",
                      }}
                    >
                      {p.is_active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td style={{ ...td, textAlign: "right" }}>
                    <button style={editBtn} onClick={() => navigate(`/products/${p.id}/edit`)}>
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

const overlay: React.CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(15, 23, 42, 0.55)",
  backdropFilter: "blur(2px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const panel: React.CSSProperties = {
  background: "#ffffff",
  width: "92%",
  maxWidth: 900,
  maxHeight: "80vh",
  overflow: "auto",
  borderRadius: 18,
  boxShadow: "0 25px 60px rgba(0,0,0,0.25)",
};

const header: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 10,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "16px 20px",
  borderBottom: "1px solid #eee",
  background: "#fff",
};

const title: React.CSSProperties = { margin: 0, fontSize: 18, fontWeight: 800 };
const subtitle: React.CSSProperties = { margin: "4px 0 0", fontSize: 13, color: "#6B7280" };

const closeBtn: React.CSSProperties = {
  border: "none",
  background: "#F3F4F6",
  borderRadius: 10,
  padding: "6px 10px",
  fontSize: 16,
  cursor: "pointer",
};

const table: React.CSSProperties = { width: "100%", borderCollapse: "collapse" };

const th: React.CSSProperties = {
  textAlign: "left",
  fontSize: 12,
  color: "#6B7280",
  fontWeight: 700,
  padding: "12px 20px",
  borderBottom: "1px solid #eee",
};

const td: React.CSSProperties = {
  padding: "14px 20px",
  borderBottom: "1px solid #f1f1f1",
  fontSize: 14,
};

const tr: React.CSSProperties = { transition: "background 0.15s ease" };

const status: React.CSSProperties = {
  padding: "4px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
};

const editBtn: React.CSSProperties = {
  padding: "6px 12px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  background: "#bf9602",
  color: "#fff",
  fontWeight: 700,
  fontSize: 13,
};

const stateBox: React.CSSProperties = {
  padding: 32,
  textAlign: "center",
  color: "#6B7280",
  fontSize: 14,
};
