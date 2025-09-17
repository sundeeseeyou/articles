import { ReactNode } from "react";

export type LinkType = {
  href: string;
  children: ReactNode;
};

export type ArchiveLayoutProps = {
  archive: ReactNode;
  latest: ReactNode;
};
