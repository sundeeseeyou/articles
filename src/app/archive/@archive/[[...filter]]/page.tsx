import NewsCard from "@/components/news/NewsCard";
import NavYear from "@/components/news/NavYear";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";

type PageProps = Promise<{ filter: Array<string> }>;

export default async function FilteredNews({ params }: { params: PageProps }) {
  const { filter } = await params;
  const filteredNews = getNewsForYear(filter);
  const links = getAvailableNewsYears();

  const hasFilter = !!(filter && filter.length > 0);
  const emptyNews = filteredNews.length === 0;

  let message = "";

  if (emptyNews) {
    message = hasFilter
      ? "No news found in that year!"
      : "Select a year to filter.";
  }

  return (
    <div className="flex flex-col justify-center items-start border-b-1 border-b-gray-800 pb-8">
      <h2 className="text-2xl font-bold mb-4">Filtered for: {filter}</h2>
      <NavYear links={links} />
      {message && <p className="text-gray-600 italic mb-4">{message}</p>}
      <NewsCard news={filteredNews} />
    </div>
  );
}
