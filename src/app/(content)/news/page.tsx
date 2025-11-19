import NewsCard from "@/components/news/NewsCard";
// import { getAllNews } from "@/lib/news";
import { useState, useEffect } from "react";

export default function News() {
  // const all = getAllNews();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch("https://localhost:9090");

      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNewsData(news);
    }
    fetchNews();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  let newsContent;

  if (newsData) return (newsContent = <NewsCard news={newsData} />);
  return (
    <>
      <h1 className="text-4xl font-bold">Hottest News!</h1>
      <section className="flex flex-lg-row flex-col gap-4 mt-8">
        <NewsCard news={all} />
      </section>
    </>
  );
}
