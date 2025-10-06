import { ArchiveLayoutProps } from "@/lib/types";

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <main className="flex flex-col w-full justify-start items-start gap-4 p-8">
      <h1 className="text-4xl">Archive Layout</h1>
      <section id="archive-filter">{archive}</section>
      <section id="latest-filter">{latest}</section>
    </main>
  );
}
