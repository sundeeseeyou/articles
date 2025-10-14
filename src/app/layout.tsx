import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import MainHeader from "@/components/homepage/MainHeader";
import "@/app/globals.css";

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
      <body className={`${manrope.variable} ${geistMono.variable} antialiased`}>
        <MainHeader />
        <main className="flex flex-col justify-center items-center gap-4 p-4 mx-auto min-w-[1440px] max-w-full">
          {children}
        </main>
      </body>
    </html>
  );
}
