import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/homepage/NavLink";

export default function MainHeader() {
  return (
    <header className="min-w-screen px-2 py-4 border-b border-white/10 mb-8">
      <nav className="mx-auto flex flex-row max-w-[1440px] justify-between items-center">
        <div>
          <Link href={"/"}>
            <Image
              className="dark:invert"
              src="/nyus-logo.svg"
              alt="Nyus News Logo"
              width={120}
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
