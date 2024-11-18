import { draftMode } from "next/headers";
import Header from "@/components/ui/Header";
import { PreviewMode } from "@/components/PreviewMode";
import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <html lang="en">
      <body>
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <Header />
          <main role="main">{children}</main>
        </div>
        {isDraftMode && <PreviewMode />}
      </body>
    </html>
  );
}
