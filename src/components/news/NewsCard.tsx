import { DUMMY_NEWS } from "../../../dummy-news";
import Link from "next/link";
import Image from "next/image";

export default function NewsCard() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-8 gap-y-12 justify-center h-full">
      {DUMMY_NEWS.map((singleNews) => (
        <div key={singleNews.id}>
          <Link
            href={`/news/${singleNews.slug}`}
            className="flex flex-col gap-8 justify-center items-center text-black rounded-sm overflow-hidden bg-white/90 p-4 hover:scale-105 hover:rotate-1 transition-transform h-full"
          >
            <Image
              src={`/images/news/${singleNews.image}`}
              alt={singleNews.title}
              width={300}
              height={300}
            />
            <h3>{singleNews.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}
