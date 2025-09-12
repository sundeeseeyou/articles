import Image from "next/image";
import Navlink from "./Navlink";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center justify-start min-w-full sticky top-0 z-50">
      <div className="flex flex-row justify-between items-center min-w-[1280px] h-16 px-8 py-4">
        <Link href="/">
          <div
            id="logo"
            className=" flex flex-row justify-center items-center gap-4 mb-2"
          >
            <div className="w-12 h-12 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="NYUS Logo"
                width={150}
                height={50}
                priority
              />
            </div>
            <span className="text-3xl font-bold">NYUS Dashboard</span>
          </div>
        </Link>
        <nav className="w-1/2 justify-center items-center gap-8">
          <Navlink />
        </nav>
      </div>
    </header>
  );
}
