import { useEffect, useMemo, useRef, useState } from "react";
import { listAllTags } from "@/features/tags/api";

type Props = {
  value: string[];
  onChange: (tags: string[]) => void;
  placeholder?: string;
};

export default function TagSelector({ value, onChange, placeholder }: Props) {
  const [allTags, setAllTags] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    (async () => {
      setAllTags(await listAllTags());
    })();
  }, []);

  const filtered = useMemo(() => {
    const q = input.trim().toLowerCase();
    if (!q) return allTags.filter((t) => !value.includes(t));
    return allTags
      .filter((t) => !value.includes(t))
      .filter((t) => t.toLowerCase().includes(q))
      .slice(0, 20);
  }, [allTags, input, value]);

  function addTag(raw: string) {
    const tag = raw.trim();
    if (!tag) return;
    if (value.includes(tag)) return;

    onChange([...value, tag]);
    setInput("");
    setOpen(false);
  }

  function remove(tag: string) {
    onChange(value.filter((t) => t !== tag));
  }

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!boxRef.current) return;
      if (!boxRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div style={box} ref={boxRef}>
      <label style={label}>Tags</label>

      <div style={inputRow}>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              addTag(input);
            }
            if (e.key === "Escape") setOpen(false);
          }}
          placeholder={placeholder ?? "Type a tag and press Enter"}
          style={inputStyle}
        />
        <button type="button" style={addBtn} onClick={() => addTag(input)}>
          Add
        </button>
      </div>

      {open && filtered.length > 0 && (
        <div style={dropdown}>
          {filtered.map((t) => (
            <button
              key={t}
              type="button"
              style={item}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => addTag(t)}
            >
              {t}
            </button>
          ))}
        </div>
      )}

      <div style={tagWrap}>
        {value.map((t) => (
          <span key={t} style={tag}>
            {t}
            <button type="button" onClick={() => remove(t)} style={removeBtn}>
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

const box: React.CSSProperties = { position: "relative", marginTop: 8 };
const label: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  color: "#6C7A89",
  marginBottom: 6,
};
const inputRow: React.CSSProperties = { display: "flex", gap: 8 };
const inputStyle: React.CSSProperties = {
  flex: 1,
  width: "100%",
  padding: "14px 12px",
  borderRadius: 14,
  border: "1px solid #E3E3E3",
  background: "#FAFAFA",
  fontSize: 14,
};
const addBtn: React.CSSProperties = {
  padding: "14px 14px",
  borderRadius: 14,
  border: "none",
  cursor: "pointer",
  background: "#bf9602",
  color: "#fff",
  fontWeight: 800,
};
const dropdown: React.CSSProperties = {
  position: "absolute",
  top: 74,
  left: 0,
  right: 0,
  background: "#fff",
  border: "1px solid #eee",
  borderRadius: 14,
  boxShadow: "0 14px 40px rgba(0,0,0,0.12)",
  maxHeight: 220,
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
const tagWrap: React.CSSProperties = { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 };
const tag: React.CSSProperties = {
  background: "#f3f4f6",
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 13,
  display: "flex",
  alignItems: "center",
  gap: 6,
};
const removeBtn: React.CSSProperties = {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  fontWeight: 900,
};
