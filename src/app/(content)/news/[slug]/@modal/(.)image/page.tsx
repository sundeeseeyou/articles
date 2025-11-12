import { DUMMY_NEWS } from "../../../../../../../dummy-news";
import { notFound } from "next/navigation";
import OverlayDiv from "./OverlayDiv";

type PageProps = Promise<{ slug: string }>;

export default async function InterceptedImage({
  params,
}: {
  params: PageProps;
}) {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((n) => n.slug === slug);

  if (!newsItem) notFound();

  return (
    <OverlayDiv
      image={`/images/news/${newsItem.image}`}
      title={newsItem.title ?? "News Image"}
    />
  );
}
