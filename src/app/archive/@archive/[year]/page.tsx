import NewsCard from "@/components/news/NewsCard";
import { getNewsForYear } from "@/lib/news";

// interface PageProps {
//   params: {
//     year: string;
//   };
// }

type PageProps = Promise<{ year: string }>;

export default async function FilteredNews({ params }: { params: PageProps }) {
  const { year } = await params;
  const filteredNews = getNewsForYear(year);

  return (
    <div>
      <h1>Filtered News for {year}</h1>
      <NewsCard news={filteredNews} />
    </div>
  );
}
