import { draftMode } from "next/headers";
import "./globals.css";
import { inter } from "@/utils/fonts";
import { PreviewMode } from "@/utils/preview-mode";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <html lang="en">
      <body className={`${inter.variable} font-circular`}>
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <Header />
          <main role="main">{children}</main>
          <Footer />
        </div>
        {isDraftMode && <PreviewMode />}
      </body>
    </html>
  );
}
