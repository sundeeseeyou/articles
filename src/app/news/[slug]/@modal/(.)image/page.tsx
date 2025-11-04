import { DUMMY_NEWS } from "../../../../../../dummy-news";
import { notFound } from "next/navigation";
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
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      {/* Force dialog to fill screen and center content */}
      <dialog
        open
        className="m-0 p-0 w-full h-full bg-transparent flex items-center justify-center border-none"
      >
        <div className="relative">
          <img
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title ?? "News Image"}
            className="max-w-[90vw] max-h-[80vh] object-cover rounded-xl shadow-xl"
          />
        </div>
      </dialog>
    </div>
  );
}
