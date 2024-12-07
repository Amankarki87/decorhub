import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IHorizontalCardProps {
  heading: string;
  btnHref: string;
  className?: string;
  imgSrc: string;
  imgAlt: string;
}

export default function HorizontalCard({
  heading,
  btnHref,
  className,
  imgSrc,
  imgAlt,
}: Readonly<IHorizontalCardProps>) {
  return (
    <div className={cn("w-full rounded-[20px] bg-gray-primary", className)}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6 pl-6 py-9 lg:pl-9 lg:py-12 flex flex-col gap-3 items-center">
          <h3 className="font-rubik text-2xl leading-[133%] font-medium capitalize">
            {heading}
          </h3>
          <Link
            className="rounded-[20px] px-4 py-2 bg-white text-sm font-semibold"
            href={btnHref}
          >
            See More
          </Link>
        </div>
        <div className="col-span-6 pr-2 flex items-end justify-center">
          <Image
            src={imgSrc}
            alt={imgAlt}
            width={211}
            height={211}
            className="object-contain max-w-full object-center"
          />
        </div>
      </div>
    </div>
  );
}
