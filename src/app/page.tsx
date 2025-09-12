import Image from "next/image";
import Header from "../components/toplevel/Header";

export default function Home() {
  return (
<<<<<<< HEAD
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center max-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
=======
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Header />
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
>>>>>>> d0f566aefe181d5baa34fd56040b9bdde2d78a6d
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.png"
          alt="NYUS Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
