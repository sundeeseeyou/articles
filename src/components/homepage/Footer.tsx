export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="flex justify-center self-end w-full max-w-screen mx-auto p-4 border-t-1 border-t-gray-700 mt-16 bottom-0">
        <div>Copyright &copy; {year} Food Network. All Right Reserved.</div>
      </footer>
    </>
  );
}
