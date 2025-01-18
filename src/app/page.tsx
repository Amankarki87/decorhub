import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import OurJourney from "@/components/our-journey";
import { featuredProducts1, featuredProducts2 } from "@/constant/products";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts products={featuredProducts1} />
      <OurJourney />
      <FeaturedProducts
        products={featuredProducts2}
        className="pb-16 sm:pb-20 pt-0 sm:pt-0 lg:pt-0"
      />
    </>
  );
}
