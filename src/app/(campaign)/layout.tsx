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

export default function campaignLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen w-full max-w-[1920px] mx-auto overflow-x-hidden ${manrope.variable} ${geistMono.variable} antialiased `}
      >
        <main className="flex flex-col justify-start items-center flex-grow min-w-[1280px] mx-auto gap-4 lg:px-6 lg:py-16 px-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
