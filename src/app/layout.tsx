import type { Metadata } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import MainHeader from "@/components/homepage/MainHeader";
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
      <body
        className={`flex flex-col min-h-screen w-full max-w-[1920px] mx-auto overflow-x-hidden ${manrope.variable} ${geistMono.variable} antialiased `}
      >
        <MainHeader />
        <main className="flex flex-col justify-center items-center flex-grow max-w-screen mx-auto lg:px-6 px-5">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
