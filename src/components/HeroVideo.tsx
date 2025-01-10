import { cn } from "@/lib/utils";
import React from "react";

interface IHeroVideoProps {
  className?: string;
}

export default function HeroVideo({ className }: IHeroVideoProps) {
  return (
    <video
      width="630"
      height="415"
      preload="none"
      autoPlay
      loop
      muted
      playsInline
      className={cn(className)}
    >
      <source src="/videos/hero(2).mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
