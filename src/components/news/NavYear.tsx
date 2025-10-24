import Link from "next/link";

type navYearProps = {
  links: Array<string>;
};
export default function NavYear({ links }: navYearProps) {
  return (
    <nav className="mb-8">
      <ul className="flex flex-row justify-start items-center gap-4">
        {links.map((year) => (
          <li key={year}>
            <Link
              href={`/archive/${year}`}
              className="px-4 py-2 border-1 border-gray-700 rounded-md hover:bg-gray-700"
            >
              {year}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
