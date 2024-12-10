import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductCardList from "./ProductCardList";
import ProductCard from "./ProductCard";

export default function ProductListTab() {
  return (
    <Tabs
      defaultValue="best-seller"
      className="max-w-[1260px] w-full mx-auto px-4 sm:px-0 md:px-6 xl:px-0 pt-[60px]"
    >
      <TabsList className="flex items-center bg-none! w-full h-full justify-between flex-col md:flex-row">
        <div className="flex flex-col items-start gap-4 mb-3">
          <span className="capitalize px-6 py-1 rounded-2xl bg-white-smoke text-lg font-medium text-electric-orange">
            Check our product
          </span>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-950">
            Crafted with excellent material
          </h2>
        </div>
        <div className="flex gap-5 md:gap-6 lg:gap-8">
          <TabsTrigger
            value="best-seller"
            className="py-[11px] px-4 rounded-[28px] border border-solid border-transparent data-[state=active]:border-black text-sm text-gray-secondary data-[state=active]:text-black"
          >
            Best Seller
          </TabsTrigger>
          <TabsTrigger
            value="chair"
            className="py-[11px] px-4 rounded-[28px] border border-solid border-transparent data-[state=active]:border-black text-sm text-gray-secondary data-[state=active]:text-black"
          >
            Chair
          </TabsTrigger>
        </div>
      </TabsList>
      <TabsContent value="best-seller" className="mt-8 md:mt-12 lg:mt-16">
        <ProductCardList>
          {Array.from({ length: 6 }, (_, idx) => (
            <ProductCard
              imgSrc="/images/fabric-chair.png"
              title="fabric chair"
              className="col-span-6 md:col-span-4 lg:col-span-3"
              key={idx}
            />
          ))}
        </ProductCardList>
      </TabsContent>
      <TabsContent value="chair" className="mt-8 md:mt-12 lg:mt-16">
        <ProductCardList>
          {Array.from({ length: 6 }, (_, idx) => (
            <ProductCard
              imgSrc="/images/yellow-sofa.png"
              title="Yellow sofa"
              className="col-span-6 md:col-span-4 lg:col-span-3"
              key={idx}
            />
          ))}
        </ProductCardList>
      </TabsContent>
    </Tabs>
  );
}
