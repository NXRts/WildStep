import type { Metadata } from "next";
// import localFont from "next/font/local"; // Disabling local fonts to use Google Fonts via CSS variable if needed or just standard
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "Toko Outdoor - Premium Adventure Gear",
  description: "High quality outdoor equipment for your next adventure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
