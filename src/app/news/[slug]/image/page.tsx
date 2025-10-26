import { DUMMY_NEWS } from "../../../../../dummy-news";
import { notFound } from "next/navigation";

type PageProps = Promise<{ slug: string }>;

export default async function imageFullScreen({
  params,
}: {
  params: PageProps;
}) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((n) => n.slug === slug);

  if (!newsItem) notFound();

  return (
    <div className="max-w-[50rem] flex flex-col justify-center items-start gap-4">
      <img
        src={`/images/news/${newsItem.image}`}
        alt={newsItem.title ?? "News Image"}
        className="w-auto h-auto object-cover object-center mb-8 rounded-xl"
      />
    </div>
  );
}
