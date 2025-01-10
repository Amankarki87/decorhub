import Hero from "@/components/Hero";
import HorizontalCardList from "@/components/HorizontalCardList";
import ProductListTab from "@/components/ProductListTab";
import TwoColumnLayout from "@/components/TwoColumnLayout";

const horizontalCard = [
  {
    heading: "Bamboo Wood Venner",
    btnHref: "/",
    imgSrc: "/images/bamboo-wood-venner.png",
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
      <TwoColumnLayout />
      <HorizontalCardList horizontalCards={horizontalCard} />
    </div>
  );
}
