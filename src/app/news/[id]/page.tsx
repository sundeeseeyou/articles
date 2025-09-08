export default function SingleNews({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <>
      <h1>Single News Page</h1>
      <p>NEWS ID: {id}</p>
    </>
  );
}
