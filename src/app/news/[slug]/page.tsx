import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "../../../../dummy-news";

type PageProps = { params: { slug: string } };

export default function SingleNews({ params }: PageProps) {
  const { slug } = params;
  const news = DUMMY_NEWS.find((n) => n.slug === slug);

  if (!news) notFound();

  return (
    <div className="min-w-[1180px] flex flex-col gap-4">
      <div className="w-full h-128 overflow-hidden rounded-xl">
        <img
          src={`/images/news/${news.image}`}
          alt={news.title ?? "News Image"}
          className="w-auto h-auto object-cover object-center mb-8 rounded-xl"
        />
      </div>
      <h1 className="text-4xl mb-4">{news.title}</h1>
      <p className="opacity-80">{news.content}</p>
    </div>
  );
}
