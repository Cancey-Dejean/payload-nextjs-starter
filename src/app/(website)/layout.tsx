import "./globals.css";
import { Inter } from "@/utils/fonts";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
<<<<<<< HEAD
  return (
    <html lang="en">
      <body className={Inter.variable}>
=======
  const { isEnabled: isDraftMode } = await draftMode();
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
>>>>>>> 29e280c67443669fa79d1638d14f683a273bdde4
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
          <Header />
          <main role="main">{children}</main>
          <Footer />
        </div>
<<<<<<< HEAD
=======
        {isDraftMode && <PreviewMode />}

        <LivePreviewListener />
>>>>>>> 29e280c67443669fa79d1638d14f683a273bdde4
      </body>
    </html>
  );
}
