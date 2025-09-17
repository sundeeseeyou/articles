export default function SingleNews({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <>
      <h1>Single News Page</h1>
      <p>NEWS ID: {slug}</p>
    </>
  );
}
