import React from "react";
import { officeInfo } from "@/constant/office-info";

export default function OfficeInfo() {
  return (
    <section className="relative py-6 overflow-hidden bg-secondary sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <div className="relative mx-auto max-w-7xl px-6  md:px-8">
        <div className="flex flex-col gap-16">
          <div className="">
            <h2 className="text-4xl font-semibold text-white  md:text-5xl font-montserrat">
              {officeInfo.heading}
            </h2>
            <p className="mt-6 font-normal text-white/70">
              {officeInfo.subheading}
            </p>
          </div>
          <ul className="flex flex-col items-start justify-between gap-5 md:flex-row">
            {officeInfo.infoList.map((item, idx) => (
              <li key={idx} className="mt-4 flex items-start w-full">
                <div className="inline-flex items-center justify-center w-10 h-10 text-white bg-primary rounded-full shrink-0">
                  <span className="text-base text-white inline-block size-fit">
                    <item.icon />
                  </span>
                </div>
                <div className="ml-4 sm:ml-6">
                  <h3 className="font-semibold text-white/70 capitalize">
                    {item.title}
                  </h3>
                  {item.paragraph && (
                    <p className="mt-1 text-sm font-normal text-white/70 whitespace-pre-line leading-7">
                      {item.paragraph}
                    </p>
                  )}
                  {item.paragraph2 && (
                    <p className="mt-1 text-sm font-normal text-white/70 whitespace-pre-line leading-7">
                      {item.paragraph2}
                    </p>
                  )}

                  {item.mail && (
                    <a
                      className="mt-1 text-sm font-normal text-white/70 whitespace-pre-line block leading-7"
                      href={`mailto:${item.mail}`}
                    >
                      {item.mail}
                    </a>
                  )}
                  {item.phone && (
                    <a
                      className="mt-1 text-sm font-normal text-white/70 whitespace-pre-line block leading-7"
                      href={`tel:${item.phone}`}
                    >
                      {item.phone}
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
