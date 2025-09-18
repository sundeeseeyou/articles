import { ArchiveLayoutProps } from "@/lib/types";

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <main>
      <h1 className="text-4xl">Archive Layout</h1>
      <section id="archive-filter">{archive}</section>
      <section id="latest-filter">{latest}</section>
    </main>
  );
}
