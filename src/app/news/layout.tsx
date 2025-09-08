import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "News List",
    template: "%s | NYUS",
  },
  description: "Always up to date, Always trustworthy",
};

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col justify-center items-center gap-4 p-8">
      {children}
    </main>
  );
}
