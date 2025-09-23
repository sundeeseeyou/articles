import { DUMMY_NEWS } from "../../../dummy-news";
import Image from "next/image";

export default function HeroesImg() {
  return DUMMY_NEWS.map((items) => (
    <div
      className="relative w-full h-96 rounded-xl overflow-hidden mb-8"
      key={items.id}
    >
      <Image
        src={`/images/news/${items.image}`}
        alt={items.title}
        width={800}
        height={300}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{items.title}</h1>
      </div>
    </div>
  ));
}
