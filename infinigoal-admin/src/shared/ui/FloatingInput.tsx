type Props = {
  label: string;
  type?: string;
  value?: any;
  onChange?: any;
  textarea?: boolean;
};

export default function FloatingInput({
  label,
  type = "text",
  textarea,
  ...props
}: Props) {
  return (
    <div className="fi-wrapper">
      {textarea ? (
        <textarea
          placeholder=" "
          className="fi-input fi-textarea"
          {...props}
        />
      ) : (
        <input
          type={type}
          placeholder=" "
          className="fi-input"
          {...props}
        />
      )}
      <label className="fi-label">{label}</label>
    </div>
  );
}
