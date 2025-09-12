import Link from "next/link";

export default function Navlink() {
  return (
    <ul className="flex flex-row justify-end items-center gap-8 text-white">
      <li>
        <Link href="/" className="text-gray-white hover:text-blue-500">
          Home
        </Link>
      </li>
      <li>
        <Link href="/news" className="text-gray-white hover:text-blue-500">
          News
        </Link>
      </li>
    </ul>
  );
}
