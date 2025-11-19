import NewsCard from "@/components/news/NewsCard";
// import { getAllNews } from "@/lib/news";

export default async function News() {
  // const all = getAllNews();
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news data");
  }

  const all = await response.json();

  return (
    <>
      <h1 className="text-4xl font-bold">Hottest News!</h1>
      <section className="flex flex-lg-row flex-col gap-4 mt-8">
        <NewsCard news={all} />
      </section>
    </>
  );
}
