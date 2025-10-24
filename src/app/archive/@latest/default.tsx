// default.tsx works as a fallback page for parallel routes
// when no other page is matched inside the parallel route segment
// in this case, when no year is provided after /archive/, this page will be rendered
import NewsCard from "@/components/news/NewsCard";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
  const upToDate = getLatestNews();
  return (
    <article className="flex flex-col justify-start items-start">
      <h2 className="text-2xl font-bold lg:mb-8 ">Latest New Page</h2>
      <NewsCard news={upToDate} />
    </article>
  );
}
