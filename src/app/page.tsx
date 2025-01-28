import FeaturedProducts from "@/components/featured-products";
import Hero from "@/components/hero";
import TwoColumContact from "@/components/two-column-contact";
import { featuredProducts } from "@/constant/products";

export default function Home() {
  return (
    <div className="pt-24 md:pt-32">
      <Hero />
      <FeaturedProducts products={featuredProducts} />
      <TwoColumContact />
    </div>
  );
}
