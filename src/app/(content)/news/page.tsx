import NewsCard from "@/components/news/NewsCard";
import { getAllNews } from "@/lib/news";

export default function News() {
  const all = getAllNews();
  return (
    <>
      <h1 className="text-4xl font-bold">Hottest News!</h1>
      <section className="flex flex-lg-row flex-col gap-4 mt-8">
        <NewsCard news={all} />
      </section>
    </>
  );
}
