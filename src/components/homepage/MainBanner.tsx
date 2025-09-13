export default function MainBanner() {
  return (
    <header className="min-w-full border rounded-xl grid lg:grid-cols-3 grid-col-1 items-center justify-center">
      <div className="lg:col-span-4 p-8 flex flex-col gap-4 bg-primary/10 rounded-xl">
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-primary">NYUS</span> News{" "}
        </h1>
        <p className="text-lg text-white/70">
          Your trusted source for the latest news and updates. Stay informed
        </p>
      </div>
    </header>
  );
}
