
type Props = {
  onUpload: (urls: string[]) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const handleFiles = (files: FileList | null) => {
    if (!files) return;

    const urls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    onUpload(urls);
  };

  return (
    <input
      type="file"
      accept="image/*"
      multiple
      onChange={(e) => handleFiles(e.target.files)}
    />
  );
}
