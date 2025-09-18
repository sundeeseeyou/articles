import NewsCard from "@/components/news/NewsCard";

export default function News() {
  return (
    <>
      <h1 className="text-4xl ">News List</h1>
      <div className="flex flex-lg-row flex-col gap-4 mt-8">
        <NewsCard />
      </div>
    </>
  );
}
