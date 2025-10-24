import { ArchiveLayoutProps } from "@/lib/types";

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <main className="flex flex-col justify-center items-center gap-4 min-w-screen w-screen">
      <h1 className="text-4xl font-bold">Archive Layout</h1>
      <section className="flex flex-col gap-16 py-8 px-4 border-b-1 border-gray-800">
        {archive}
        {latest}
      </section>
    </main>
  );
}
