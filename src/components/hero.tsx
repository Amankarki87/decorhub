import HeroImage, { hero } from "@/constant/hero";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full mx-auto max-w-7xl flex flex-col gap-16 md:gap-28 px-6 md:px-8 pb-10">
      <div className="w-full h-full grid grid-cols-1 gap-16 md:grid-cols-2">
        <div className="w-full flex flex-col gap-14 justify-between">
          <div className="w-full flex flex-col gap-10">
            <h1 className="text-6xl font-semibold text-secondary font-montserrat">
              {hero.heading}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {hero.paragraph}
            </p>
          </div>
          <Button
            asChild
            className="w-fit h-12 px-6 group text-sm capitalize text-secondary font-semibold rounded-full hover:transition-all hover:duration-300 md:px-8 md:h-14 md:text-base relative"
          >
            <Link href="/">
              Explore our collection{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                <MoveRight />
              </span>
            </Link>
          </Button>
        </div>
        <Image
          className="w-full h-[18rem] aspect-[4/3] rounded-2xl bg-zinc-200 dark:bg-zinc-700 object-cover md:h-[30rem]"
          width={460}
          height={480}
          alt=""
          src={HeroImage}
        />
      </div>
    </section>
  );
}
