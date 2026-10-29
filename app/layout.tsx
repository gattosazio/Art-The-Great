import type { Metadata } from "next";
import { Manrope, Silkscreen } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  variable: "--font-pixel",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "ARTURO | Fullstack Engineer",
  description: "Portfolio, projects, and contact information for Arturo Sumondong."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${silkscreen.variable}`}>{children}</body>
    </html>
  );
}
