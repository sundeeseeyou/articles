"use client";

import { useRouter } from "next/navigation";
import { MdOutlineClose } from "react-icons/md";

export default function OverlayDiv({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  const router = useRouter();

  const handleOverlayClick = () => {
    try {
      router.back();
    } catch {
      window.history.back();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer"
      onClick={handleOverlayClick}
    >
      {/* Bagian konten modal */}
      <div
        className="relative cursor-default"
        onClick={(e) => e.stopPropagation()} // ini mencegah klik pada gambar ikut nutup
      >
        <img
          src={image}
          alt={title ?? "News Image"}
          className="max-h-[80vh] object-cover object-top rounded-xl shadow-xl aspect-video"
        />
        <button
          onClick={handleOverlayClick}
          className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full px-2 py-2 text-xs hover:cursor-pointer"
        >
          <MdOutlineClose size={24} />
        </button>
      </div>
    </div>
  );
}
