import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "@/app/global.css";
import Footer from "@/components/homepage/Footer";

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NYUS news",
  description: "Adem Banget Beritanya Mas...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
