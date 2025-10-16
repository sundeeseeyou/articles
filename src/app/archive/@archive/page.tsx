import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function ArchivePage() {
  const links = getAvailableNewsYears();
  return (
    <article className="flex flex-col justify-start items-start gap-4">
      <ul className="flex flex-row justify-start items-center gap-4">
        {links.map((year) => (
          <li key={year}>
            <Link href={`/archive/${year}`}>{year}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
