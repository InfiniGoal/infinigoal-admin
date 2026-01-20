import { supabase } from "./supabaseClient";

type UploadArgs = {
  bucket: string;
  path: string;
  file: File;
};

export async function uploadImage({
  bucket,
  path,
  file,
}: UploadArgs): Promise<string> {
  const { error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      upsert: true,
      contentType: file.type,
    });

  if (error) {
    throw error;
  }

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);

  if (!data?.publicUrl) {
    throw new Error("Failed to get public URL");
  }

  return data.publicUrl;
}
