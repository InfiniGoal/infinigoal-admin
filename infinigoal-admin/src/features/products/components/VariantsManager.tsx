import { useState } from "react";
import VariantForm from "./VariantForm";
import type { VariantFormValues } from "../schema";

type Props = {
  variants: VariantFormValues[];
  onChange: (variants: VariantFormValues[]) => void;
};

export default function VariantsManager({ variants, onChange }: Props) {
  const [showForm, setShowForm] = useState(false);

  const addVariant = (variant: VariantFormValues) => {
    const updated = variant.is_default
      ? variants.map(v => ({ ...v, is_default: false })).concat(variant)
      : [...variants, variant];

    onChange(updated);
    setShowForm(false);
  };

  const deleteVariant = (index: number) => {
    onChange(variants.filter((_, i) => i !== index));
  };

  return (
    <section style={section}>
      <header style={header}>
        <h3 style={{ margin: 0 }}>Variants</h3>

        {!showForm && (
          <button onClick={() => setShowForm(true)} style={btnPrimary}>
            + Add Variant
          </button>
        )}
      </header>

      {variants.length === 0 && !showForm && (
        <div style={emptyState}>
          No variants added yet.
        </div>
      )}

      {variants.map((v, i) => (
        <div key={i} style={card}>
          <div>
            <strong>{v.variant_name}</strong>
            {v.short_label && <span style={badge}>{v.short_label}</span>}
            {v.is_default && <span style={defaultBadge}>Default</span>}
            <div style={meta}>
              ₹{v.price} • Stock: {v.stock}
            </div>
          </div>

          <button onClick={() => deleteVariant(i)} style={btnDanger}>
            Delete
          </button>
        </div>
      ))}

      {showForm && (
        <VariantForm
          onSave={addVariant}
          onCancel={() => setShowForm(false)}
        />
      )}
    </section>
  );
}

/* ---------------- styles ---------------- */

const section: React.CSSProperties = {
  marginTop: 32,
  borderTop: "1px solid #e5e7eb",
  paddingTop: 24,
};

const header: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
};

const card: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: 12,
  border: "1px solid #e5e7eb",
  borderRadius: 12,
  marginBottom: 10,
};

const meta: React.CSSProperties = {
  fontSize: 13,
  color: "#6b7280",
};

const badge: React.CSSProperties = {
  marginLeft: 8,
  padding: "2px 8px",
  borderRadius: 999,
  background: "#f3f4f6",
  fontSize: 12,
};

const defaultBadge: React.CSSProperties = {
  marginLeft: 8,
  padding: "2px 8px",
  borderRadius: 999,
  background: "#111827",
  color: "white",
  fontSize: 12,
};

const emptyState: React.CSSProperties = {
  padding: 16,
  border: "1px dashed #e5e7eb",
  borderRadius: 12,
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

const btnDanger: React.CSSProperties = {
  padding: "6px 10px",
  borderRadius: 8,
  border: "1px solid #ef4444",
  background: "#ef4444",
  color: "white",
  cursor: "pointer",
};
