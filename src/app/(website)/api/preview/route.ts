import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const draftPreview = await draftMode();
  draftPreview.enable();

  // Redirect to the path the user was trying to preview
  redirect(slug ? `/${slug}` : "/");
}
