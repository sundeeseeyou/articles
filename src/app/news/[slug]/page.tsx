import HeroesImg from "@/components/news/heroesImg";

export default function SingleNews({ params }: { params: { slug: string } }) {
  const { slug } = params;
  return (
    <div>
      <HeroesImg />
    </div>
  );
}
