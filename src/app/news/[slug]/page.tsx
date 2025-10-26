import { DUMMY_NEWS } from "../../../../dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

type PageProps = Promise<{ slug: string }>;

export default async function SingleNews({ params }: { params: PageProps }) {
  const { slug } = await params;
  const news = DUMMY_NEWS.find((n) => n.slug === slug);

  if (!news) notFound();

  return (
    <div className="max-w-[50rem] flex flex-col justify-center items-start gap-4">
      <h1 className="text-4xl mb-2 mt-2">{news.title}</h1>
      <div className="flex flex-col aspect-video justify-start w-full overflow-hidden rounded-xl">
        <Link
          href={`/news/${news.slug}/image`}
          className="text-blue-600 underline mb-4"
        >
          <img
            src={`/images/news/${news.image}`}
            alt={news.title ?? "News Image"}
            className="w-auto h-auto object-cover object-center mb-8 rounded-xl"
          />
        </Link>
      </div>

      <p className="opacity-80">{news.content}</p>
    </div>
  );
}
