import NewsCard from "@/components/news/NewsCard";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

type PageProps = Promise<{ filter: Array<string> }>;

export default async function FilteredNews({ params }: { params: PageProps }) {
  const { filter } = await params;
  const filteredNews = getNewsForYear(filter);

  const links = getAvailableNewsYears();
  return (
    <div className="flex flex-col justify-center items-start">
      <h2 className="text-2xl font-bold mb-4">Filtered for: {filter}</h2>
      <nav className="mb-8">
        <ul className="flex flex-row justify-start items-center gap-4">
          {links.map((year) => (
            <li key={year}>
              <Link
                href={`/archive/${year}`}
                className="px-4 py-2 border-1 border-gray-700 rounded-md hover:bg-gray-700"
              >
                {year}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <NewsCard news={filteredNews} />
    </div>
  );
}
