"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkType } from "../types";

export default function NavLink({ href, children }: LinkType) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={` hover:text-gray-300 ${
        pathname.startsWith(href) ? "text-pink-500" : ""
      }`}
    >
      {children}
    </Link>
  );
}
