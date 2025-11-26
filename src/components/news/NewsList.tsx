import NewsCard from "@/components/news/NewsCard";
import { getAllNews } from "@/lib/news";

export default async function News() {
  const all = await getAllNews();
  return <NewsCard news={all} />;
}
