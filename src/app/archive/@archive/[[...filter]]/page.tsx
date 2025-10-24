import NewsCard from "@/components/news/NewsCard";
import NavYear from "@/components/news/NavYear";
import { getNewsForYear, getAvailableNewsYears } from "@/lib/news";

type PageProps = Promise<{ filter: Array<string> }>;

export default async function FilteredNews({ params }: { params: PageProps }) {
  const { filter } = await params;
  const filteredNews = getNewsForYear(filter);
  const links = getAvailableNewsYears();

  return (
    <div className="flex flex-col justify-center items-start">
      <h2 className="text-2xl font-bold mb-4">Filtered for: {filter}</h2>
      <NavYear links={links} />
      <p className="text-sm text-gray-400">
        {filteredNews.length === 0 ? "Pilih Tahun yang tersedia!" : null}
      </p>
      <NewsCard news={filteredNews} />
    </div>
  );
}
