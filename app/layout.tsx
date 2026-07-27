import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "yellowtooths-interview",
  description: "Hello World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${geist.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
