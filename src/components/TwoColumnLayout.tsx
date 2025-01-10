import Image from "next/image";
import React from "react";

export default function TwoColumnLayout() {
  return (
    <section className="max-w-[1260px] w-full mx-auto px-4 sm:px-0 md:px-6 xl:px-0 pt-[60px]">
      <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-14">
        <div className="lg:max-w-[479px] col-span-12 lg:col-span-6 ">
          <h2 className="text-[28px] leading-[140%] md:text-4xl md:leading-[130%] lg:text-[44px] lg:leading-[127%] font-semibold mb-6">
            Elevate Your Space with Uncompromising Quality
          </h2>
          <p className="text-sm leading-[171%] text-gray-tertiary font-normal">
            Experience the epitome of furniture quality. Our products are
            meticulously crafted with an unwavering commitment to excellence.
            From the finest materials to expert craftsmanship, each piece
            embodies durability, comfort, and timeless style. Elevate your space
            with the assurance of exceptional quality and lasting beauty
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pr-6">
          <Image
            src="/images/two-column-layout.png"
            alt="sofa in the middle"
            width={477}
            height={557}
            className="object-cover w-full h-[300px] lg:h-full mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
