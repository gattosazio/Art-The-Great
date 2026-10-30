import type { Metadata, Viewport } from "next";
import { Manrope, Silkscreen } from "next/font/google";
import "./globals.css";

const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
  title: "ARTURO",
  description: "Portfolio, projects, and contact information for Art Sumondong.",
  icons: {
    icon: `${publicBasePath}/favicon.ico`,
    shortcut: `${publicBasePath}/favicon.ico`,
    apple: `${publicBasePath}/favicon.png`
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${silkscreen.variable}`}>
        {children}
      </body>
    </html>
  );
}
