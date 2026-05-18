import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});
const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Arturo The Great",
  description: "My personal website."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.variable}
        style={{ "--about-bg-image": `url("${publicBasePath}/wp4515537-shoreline-wallpapers.jpg")` } as React.CSSProperties}
      >
        {children}
      </body>
    </html>
  );
}
