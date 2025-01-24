import "./globals.css";
import { Inter } from "@/utils/fonts";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Inter.variable}>
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <Header />
          <main role="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
