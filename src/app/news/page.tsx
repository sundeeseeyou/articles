import Link from "next/link";

export default function News() {
  return (
    <>
      <h1 className="text-4xl ">News List</h1>
      <ul>
        <li>
          <Link
            href="/news/indonesia-is-great"
            className="text-white hover:underline"
          >
            Indonesia is Great
          </Link>
        </li>
        <li>
          <Link
            href="/news/indonesia-is-wrong"
            className="text-white hover:underline"
          >
            Indonesia is Wrong
          </Link>
        </li>
      </ul>
    </>
  );
}
