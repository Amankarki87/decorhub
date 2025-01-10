import Image from "next/image";
import React from "react";
// import HeroVideo from "./HeroVideo";

const hero = {
  heading: "Redefining\n Interiors:\n Exclusive Quality",
  subheading:
    "At Decor Hub, we specialize in transforming spaces with premium interior solutions. As trusted importers of high-quality PVC panels, WPC louvers, bamboo charcoal, PVC fluted panels, wall fabrics, SPC flooring, and exclusive decor products, we bring innovation and elegance to every project. Whether you're upgrading your home or designing a commercial space, our products set new standards in style and functionality.",
};

export default function Hero() {
  return (
    <section className="max-w-[1260px] w-full pt-[60px] mx-auto">
      <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-14">
        <div className="col-span-12 lg:col-span-6 px-4 sm:px-6 xl:px-0">
          <h1 className="text-[32px] leading-[140%] md:text-5xl md:leading-[130%] lg:text-[64px] lg:leading-[120%] font-bold lg:whitespace-pre-line text-center lg:text-left mb-4 font-lovelyn">
            {hero.heading}
          </h1>
          <p className="text-gray-secondary text-lg leading-[30.8px] text-center lg:text-left">
            {hero.subheading}
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pr-6">
          <Image
            src="/images/hero.jpg"
            alt="sofa in the middle"
            width={630}
            height={415}
            className="object-cover object-left w-full h-full lg:rounded-[43px] mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
