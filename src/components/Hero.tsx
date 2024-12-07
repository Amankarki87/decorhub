import Image from "next/image";
import React from "react";

const hero = {
  heading: "Perfect\n Harmony:\n Comfort & Style",
  subheading:
    "Explore furniture that harmoniously combines comfort and style to elevate your home",
};

export default function Hero() {
  return (
    <section className="max-w-[1260px] w-full pt-[60px] mx-auto">
      <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-14">
        <div className="col-span-12 lg:col-span-6 px-4 sm:px-6 xl:px-0">
          <h1 className="text-[32px] leading-[140%] md:text-5xl md:leading-[130%] lg:text-[64px] lg:leading-[120%] font-bold lg:whitespace-pre-line text-center md:text-left mb-4">
            {hero.heading}
          </h1>
          <p className="text-gray-secondary text-lg leading-[30.8px] text-center md:text-left">
            {hero.subheading}
          </p>
        </div>
        <div className="col-span-12 lg:col-span-6 lg:pr-6">
          <Image
            src="/images/ornament.jpg"
            alt="sofa in the middle"
            width={630}
            height={415}
            className="object-cover w-full h-full lg:rounded-[43px] mx-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
