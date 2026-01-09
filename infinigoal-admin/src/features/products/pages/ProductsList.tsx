import { Link } from "react-router-dom";

export default function ProductsList() {
  return (
    <div>
      <header style={header}>
        <h1 style={{ margin: 0 }}>Products</h1>

        <Link to="/products/new">
          <button style={btnPrimary}>+ Add Product</button>
        </Link>
      </header>

      <div style={list}>
        {/* Mock product */}
        <div style={card}>
          <div>
            <strong>Turmeric Powder</strong>
            <div style={meta}>Spices • Active</div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button style={btnSecondary}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------- styles ---------------- */

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 20,
};

const list: React.CSSProperties = {
  display: "grid",
  gap: 12,
};

const card: React.CSSProperties = {
  padding: 14,
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const meta: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7280",
};

const btnPrimary: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid #111827",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "6px 10px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
  background: "white",
  cursor: "pointer",
};
