import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { variantSchema } from "../schema";
import type { VariantFormValues } from "../schema";

type Props = {
  onSave: (variant: VariantFormValues) => void;
  onCancel: () => void;
};

export default function VariantForm({ onSave, onCancel }: Props) {
  const form = useForm<VariantFormValues>({
    resolver: zodResolver(variantSchema),
    defaultValues: {
      variant_name: "",
      short_label: "",
      price: 1,
      mrp: undefined,
      stock: 0,
      attributes: {},
      is_default: false,
    },
    mode: "onSubmit",
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const submit = (values: VariantFormValues) => {
    console.log("✅ VARIANT SUBMIT:", values);
    onSave(values);
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        padding: 16,
        marginTop: 12,
      }}
    >
      <h4 style={{ marginTop: 0 }}>Add Variant</h4>

      <Field label="Variant Name" error={errors.variant_name?.message}>
        <input
          placeholder="e.g., 500g Pack"
          {...register("variant_name")}
          style={inputStyle}
        />
      </Field>

      <Field label="Short Label" error={errors.short_label?.message}>
        <input
          placeholder="e.g., 500g"
          {...register("short_label")}
          style={inputStyle}
        />
      </Field>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <Field label="Price" error={errors.price?.message}>
          <input
            type="number"
            placeholder="Price"
            {...register("price", { valueAsNumber: true })}
            style={inputStyle}
          />
        </Field>

        <Field label="MRP" error={errors.mrp?.message}>
          <input
            type="number"
            placeholder="MRP"
            {...register("mrp", { valueAsNumber: true })}
            style={inputStyle}
          />
        </Field>
      </div>

      <Field label="Stock" error={errors.stock?.message}>
        <input
          type="number"
          placeholder="Stock"
          {...register("stock", { valueAsNumber: true })}
          style={inputStyle}
        />
      </Field>

      <Field label="Attributes (JSON)" error={errors.attributes?.message as string | undefined}>
        <textarea
          placeholder='{"weight":"500g","type":"organic"}'
          {...register("attributes")}
          style={textareaStyle}
        />
      </Field>

      <label style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <input type="checkbox" {...register("is_default")} />
        Default Variant
      </label>

      <div style={{ display: "flex", gap: 10 }}>
        <button type="submit" style={btnPrimary}>
          Save Variant
        </button>
        <button type="button" onClick={onCancel} style={btnSecondary}>
          Cancel
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
      {children}
      {error ? <div style={{ color: "#b91c1c", marginTop: 6 }}>{error}</div> : null}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  minHeight: 90,
};

const btnPrimary: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #111827",
  background: "#111827",
  color: "white",
  cursor: "pointer",
};

const btnSecondary: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 10,
  border: "1px solid #e5e7eb",
  background: "white",
  cursor: "pointer",
};
