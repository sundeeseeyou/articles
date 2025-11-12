import { LayoutProps } from "../../../../lib/types";

export default function NewsSlugLayout({ children, modal }: LayoutProps) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
