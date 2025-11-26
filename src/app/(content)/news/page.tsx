// src/app/news/page.tsx
import { Suspense } from "react";
import NewsList from "@/components/news/NewsList";

export default function News() {
  return (
    <>
      <h1 className="text-4xl font-bold">Hottest News!</h1>
      <section className="flex flex-lg-row flex-col gap-4 mt-8">
        <Suspense fallback={<NewsGridSkeleton />}>
          <NewsList />
        </Suspense>
      </section>
    </>
  );
}

function NewsGridSkeleton() {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 gap-x-8 gap-y-8 justify-center h-full">
      {[...Array(8)].map((_, index) => (
        <div key={index}>
          <div className="flex flex-col gap-4 justify-center items-center text-black rounded-sm overflow-hidden bg-white p-4 h-full animate-pulse">
            <div className="w-[300px] h-[300px] bg-gray-300/50 rounded" />
            <div className="w-full space-y-2">
              <div className="h-5 bg-gray-300/5 rounded w-3/4 mx-auto" />
              <div className="h-5 bg-gray-300 rounded w-1/2 mx-auto" />
            </div>
            <div className="h-3 bg-gray-300 rounded w-32" />
          </div>
        </div>
      ))}
    </div>
  );
}
