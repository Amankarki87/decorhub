import React from "react";
import ProductCard from "./ProductCard";

export default function ProductCardList() {
  return (
    <section className="grid grid-cols-12 gap-6 max-w-[1260px] w-full mx-auto px-4 sm:px-0 md:px-6 xl:px-0 pt-[60px]">
      {Array.from({ length: 12 }, (_, idx) => (
        <ProductCard
          className="col-span-6 md:col-span-4 lg:col-span-3"
          key={idx}
        />
      ))}
    </section>
  );
}
