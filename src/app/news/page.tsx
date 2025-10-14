import NewsCard from "@/components/news/NewsCard";

export default function News() {
  return (
    <>
      <h1 className="text-4xl ">Hottest NYus!</h1>
      <section className="flex flex-lg-row flex-col gap-4 mt-8">
        <NewsCard />
      </section>
    </>
  );
}
