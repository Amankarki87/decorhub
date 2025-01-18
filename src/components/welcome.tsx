import HeroImage from "@/constant/hero";
import { welcomeContent } from "@/constant/welcome";
import Image from "next/image";
import React from "react";

export default function Welcome() {
  return (
    <section className="relative isolate bg-secondary overflow-hiddenpy-24 sm:py-32">
      <Image
        alt=""
        src={HeroImage}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-20"
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl font-montserrat">
            {welcomeContent.heading}
          </h2>
          <p className="mt-6 text-lg leading-8 max-w-2xl text-gray-300">
            {welcomeContent.paragraph}
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {welcomeContent.lists.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-x-4 rounded-xl bg-primary/5 backdrop-blur-xl p-6 ring-1 ring-inset ring-primary/10"
            >
              <span className="text-lg text-primary inline-block size-fit">
                {<item.icon />}
              </span>
              <div className="text-base leading-7">
                <h3 className="font-semibold text-primary capitalize">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-300">{item.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
