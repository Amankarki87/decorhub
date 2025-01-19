import Image, { ImageProps } from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface IProducts {
  title: string;
  link: string;
  src: ImageProps["src"];
}

interface IFeaturedProductsProps {
  products: IProducts[];
  className?: string;
}

export default function FeaturedProducts({
  products,
  className,
}: IFeaturedProductsProps) {
  return (
    <section
      className={cn(" bg-white dark:bg-slate-800 py-16 sm:py-20", className)}
    >
      <div className="max-w-7xl mx-auto rounded-lg px-6 md:px-8">
        <h4 className="mb-12 text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-montserrat capitalize">
          Discover our products
        </h4>
        <div className="grid grid-cols-1 gap-y-12 gap-6 text-center rounded-lg sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:text-left">
          {products.map((product, idx) => (
            <Link key={idx} href={product.link}>
              <div className="relative overflow-hidden group">
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
                    variant="link"
                    className="mt-2 text-sm lg:text-base font-bold text-white/90 relative group-hover:underline px-0"
                  >
                    Explore Now{" "}
                    <span className="group-hover:translate-x-1 transition-transform">
                      <MoveRight />
                    </span>
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
