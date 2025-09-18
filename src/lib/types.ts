import { ReactNode } from "react";

export type LinkType = {
  href: string;
  children: ReactNode;
};

export type ArchiveLayoutProps = {
  archive: ReactNode;
  latest: ReactNode;
};

export type NewsType = {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: number;
  content: string;
};
