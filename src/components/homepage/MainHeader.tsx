import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/homepage/NavLink";

export default function MainHeader() {
  return (
    <header className="w-full px-2 py-2 border-b border-white/10 mb-8">
      <nav className="flex flex-row px-4 lg:px-8 justify-between items-center mx-auto ">
        <div>
          <Link href={"/"}>
            <Image
              className="dark:invert"
              src="/nyus-logo.svg"
              alt="Nyus News Logo"
              width={80}
              height={38}
              priority
            />
          </Link>
        </div>
        <ul className="flex flex-row gap-8 justify-center items-center text-md font-medium">
          <li>
            <NavLink href={"/news"}>News</NavLink>
          </li>
          <li>
            <NavLink href={"/archive"}>Archive</NavLink>
          </li>

          <li>
            <Link
              href={"/contacts"}
              className="flex flex-row gap-2 px-8 py-2 bg-primary rounded-full hover:opacity-90 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
