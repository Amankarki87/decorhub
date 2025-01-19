import { ourJourney } from "@/constant/our-journey";
import React from "react";

export default function OurJourney() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl space-y-10 px-6 md:px-8">
        <div className="">
          <h4 className="text-lg font-semibold leading-8 tracking-tight text-primary capitalize">
            Our journey
          </h4>
          <h4 className="mt-2 text-3xl font-bold tracking-tight text-secondary sm:text-4xl font-montserrat">
            {ourJourney.heading}
          </h4>
          <p className="mt-6 text-xl max-w-2xl leading-8 text-gray-700">
            {ourJourney.paragraph}
          </p>
        </div>
        <ul className="grid w-full gap-12 md:grid-cols-3">
          {ourJourney.lists.map((listItem, idx) => (
            <li key={idx} className="w-full">
              <div className="flex items-center justify-center w-12 h-12 bg-white shadow-lg text-primary rounded-xl ring-1 ring-primary/60 shadow-slate-500/10">
                <span className="text-xl text-primary drop-shadow inline-block size-fit">
                  <listItem.icon />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold  text-secondary capitalize">
                {listItem.title}
              </h3>
              <p className="mt-1.5 text-slate-700 text-base">
                {listItem.paragraph}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
