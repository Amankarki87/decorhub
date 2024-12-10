import Hero from "@/components/Hero";
import HorizontalCardList from "@/components/HorizontalCardList";
import ProductListTab from "@/components/ProductListTab";

const horizontalCard = [
  {
    heading: "dining tables",
    btnHref: "/",
    imgSrc: "/images/table.png",
    imgAlt: "dining table",
  },
  {
    heading: "chairs",
    btnHref: "/",
    imgSrc: "/images/chair.png",
    imgAlt: "chair table",
  },
  {
    heading: "office desks",
    btnHref: "/",
    imgSrc: "/images/office-desk.png",
    imgAlt: "office desk",
  },
];

export default function Home() {
  return (
    <div>
      <Hero />
      <HorizontalCardList horizontalCards={horizontalCard} />
      <ProductListTab />
      <HorizontalCardList horizontalCards={horizontalCard} />
    </div>
  );
}
