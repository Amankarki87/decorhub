import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import OurJourney from "@/components/our-journey";
import { featuredProducts } from "@/constant/products";

export default function Home() {
  return (
    <div className="pt-24 md:pt-32">
      <Hero />

      <FeaturedProducts products={featuredProducts} />
      <OurJourney />
    </div>
  );
}
