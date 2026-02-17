import { useEffect, useMemo, useState } from "react";
import { listActiveBrandNames } from "@/features/brands/api";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function BrandSelector({ value, onChange }: Props) {
  const [brands, setBrands] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      setBrands(await listActiveBrandNames());
    })();
  }, []);

  const filtered = useMemo(() => {
    const q = value.trim().toLowerCase();
    if (!q) return brands;
    return brands.filter((b) => b.toLowerCase().includes(q));
  }, [brands, value]);

  return (
    <div style={wrap}>
      <label style={label}>Brand</label>
      <input
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 120)}
        placeholder="Type brand name..."
        style={input}
      />

      {open && filtered.length > 0 && (
        <div style={dropdown}>
          {filtered.slice(0, 30).map((b) => (
            <button
              key={b}
              type="button"
              style={item}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => {
                onChange(b);
                setOpen(false);
              }}
            >
              {b}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const wrap: React.CSSProperties = { position: "relative", marginBottom: 18 };
const label: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  color: "#6C7A89",
  marginBottom: 6,
};
const input: React.CSSProperties = {
  width: "100%",
  padding: "14px 12px",
  borderRadius: 14,
  border: "1px solid #E3E3E3",
  background: "#FAFAFA",
  fontSize: 14,
};
const dropdown: React.CSSProperties = {
  position: "absolute",
  top: 62,
  left: 0,
  right: 0,
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: 14,
  boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
  maxHeight: 260,
  overflow: "auto",
  zIndex: 50,
};
const item: React.CSSProperties = {
  display: "block",
  width: "100%",
  textAlign: "left",
  padding: "10px 12px",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  fontSize: 14,
};
