import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { featuredProducts } from "@/constant/featured-products";

export default function FeaturedProducts() {
  return (
    <section className="py-10 bg-white dark:bg-slate-800 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto pt-10 rounded-lg">
        <div className="grid grid-cols-1 gap-4 text-center rounded-lg sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:text-left">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="relative overflow-hidden group">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={product.src}
                  alt=""
                  className="object-cover w-full rounded-lg h-full transition-all duration-300 group-hover:scale-125 group-hover:rotate-3 aspect-[1/1]"
                />
              </div>
              <div className="absolute inset-0 rounded-lg  bg-gradient-to-t from-black via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4 lg:p-8 w-full">
                <h3 className="text-xl lg:text-2xl font-bold text-white/90">
                  {product.title}
                </h3>
                <Button
                  asChild
                  variant="link"
                  className="mt-2 text-sm lg:text-base font-bold text-white/90 relative group-hover:underline px-0"
                >
                  <Link href={product.link}>
                    Explore Now{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      <MoveRight />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
