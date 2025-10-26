import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Oops!</h1>
      <p className="text-gray-600">
        Sorry, we couldn't find any news you were looking for.
      </p>
      <Link href="/news" className="text-gray-600 mt-4">
        Back to News
      </Link>
    </div>
  );
}
