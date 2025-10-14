import { ArchiveLayoutProps } from "@/lib/types";

export default function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <main className="flex flex-col justify-center items-center gap-4 w-full">
      <h1 className="text-4xl font-bold">Archive Layout</h1>
      <section
        id="archive-filter"
        className="py-8 px-4 border-b-1 border-gray-800"
      >
        {archive}
      </section>
      <section
        id="latest-filter"
        className="py-8 px-4 border-b-1 border-gray-800"
      >
        {latest}
      </section>
    </main>
  );
}
