export async function blobUrlToFile(
  blobUrl: string,
  filename: string
): Promise<File> {
  const res = await fetch(blobUrl);
  const blob = await res.blob();

  return new File([blob], filename, { type: blob.type });
}
