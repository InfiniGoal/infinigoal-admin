
// type Props = {
//   onUpload: (urls: string[]) => void;
// };

// export default function ImageUploader({ onUpload }: Props) {
//   const handleFiles = (files: FileList | null) => {
//     if (!files) return;

//     const urls = Array.from(files).map((file) =>
//       URL.createObjectURL(file)
//     );

//     onUpload(urls);
//   };

//   return (
//     <input
//       type="file"
//       accept="image/*"
//       multiple
//       onChange={(e) => handleFiles(e.target.files)}
//     />
//   );
// }






type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({ onUpload }: Props) {
  const handleFileChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    /**
     * TEMP MOCK UPLOAD
     * ------------------------------------
     * Replace this later with Supabase upload
     */
    const fakeUrl = URL.createObjectURL(file);

    onUpload(fakeUrl);

    // reset input so same file can be selected again
    e.target.value = "";
  };

  return (
    <div style={{ marginBottom: 12 }}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
    </div>
  );
}
