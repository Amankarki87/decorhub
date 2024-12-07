import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface IProductCardProps {
  className?: string;
  //   imgSrc: string;
  //   title: string;
}

export default function ProductCard({
  className,
}: //   imgSrc,
//   title,
Readonly<IProductCardProps>) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="bg-white-smoke px-3 pt-3">
        <Image
          src="/images/fabric-chair.png"
          alt="fabric chair"
          width={270}
          height={300}
          className="object-cover w-full h-full object-center"
        />
      </div>
      <div className="p-3 px-[18px]">
        <h4 className="font-rubik font-semibold text-base md:text-xl text-gray-fiftieth-shade">
          Fabric Chair
        </h4>
      </div>
    </div>
  );
}
