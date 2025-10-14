import NewsCard from "@/components/news/NewsCard";

export default function LatestNewsPage() {
  return (
    <article className="flex flex-col justify-start items-start">
      <h2 className="text-xl lg:mb-8 ">Latest New Page</h2>
      <NewsCard />
    </article>
  );
}
