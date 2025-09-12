import Image from "next/image";
import Header from "../components/toplevel/Header";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/logo.png"
        alt="NYUS Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
}
