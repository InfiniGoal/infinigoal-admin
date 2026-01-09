import { useEffect, useMemo, useState } from "react";

type Attribute = { key: string; value: string };

type Props = {
  value?: Record<string, unknown>;
  onChange: (val: Record<string, unknown> | undefined) => void;
};

export default function AttributesEditor({ value, onChange }: Props) {
  const initial = useMemo<Attribute[]>(() => {
    if (!value) return [];
    return Object.entries(value).map(([k, v]) => ({ key: k, value: String(v) }));
  }, [value]);

  const [items, setItems] = useState<Attribute[]>(initial);

  // Keep local UI in sync when form resets / initialValues change
  useEffect(() => {
    setItems(initial);
  }, [initial]);

  const sync = (list: Attribute[]) => {
    setItems(list);

    const obj: Record<string, unknown> = {};
    for (const it of list) {
      const k = it.key.trim();
      if (!k) continue;
      obj[k] = it.value;
    }

    onChange(Object.keys(obj).length ? obj : undefined);
  };

  return (
    <div style={container}>
      {items.map((item, i) => (
        <div key={i} style={row}>
          <input
            placeholder="Key"
            value={item.key}
            onChange={(e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], key: e.target.value };
              sync(updated);
            }}
            style={input}
          />

          <input
            placeholder="Value"
            value={item.value}
            onChange={(e) => {
              const updated = [...items];
              updated[i] = { ...updated[i], value: e.target.value };
              sync(updated);
            }}
            style={input}
          />

          <button
            type="button"
            onClick={() => sync(items.filter((_, idx) => idx !== i))}
            style={btnDelete}
            aria-label="Delete attribute"
            title="Delete"
          >
            ✕
          </button>
        </div>
      ))}

      <button type="button" onClick={() => sync([...items, { key: "", value: "" }])} style={btnAdd}>
        + Add Attribute
      </button>
    </div>
  );
}

const container: React.CSSProperties = {
  border: "1px dashed #e5e7eb",
  padding: 12,
  borderRadius: 12,
};

const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr auto",
  gap: 8,
  marginBottom: 8,
};

const input: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 8,
  border: "1px solid #e5e7eb",
};

const btnDelete: React.CSSProperties = {
  border: "none",
  background: "transparent",
  cursor: "pointer",
  color: "#ef4444",
  fontSize: 18,
};

const btnAdd: React.CSSProperties = {
  marginTop: 6,
  border: "1px solid #111827",
  background: "#111827",
  color: "white",
  padding: "6px 10px",
  borderRadius: 8,
  cursor: "pointer",
};
