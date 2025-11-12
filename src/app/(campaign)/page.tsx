import MainBanner from "@/components/homepage/MainBanner";

export default function Home() {
  return (
    <>
      <MainBanner />
      <a
        href="/news"
        className="mt-4 border-2 border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all duration-200 font-medium text-lg flex justify-center items-center"
      >
        <div>Read our news</div>
      </a>
    </>
  );
}
