import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Error 404</h1>
      <p className="text-gray-600">
        Sorry, we couldn't find any page you were looking for.
      </p>
      <Link
        href="/"
        className="text-gray-400 mt-8 p-4 border border-gray-600 rounded-lg hover:bg-gray-200 hover:text-gray-900"
      >
        Back to homepage
      </Link>
    </div>
  );
}
