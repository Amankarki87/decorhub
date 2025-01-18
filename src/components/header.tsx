"use client";
import React, { useEffect, useState } from "react";
import DecorhubLogo from "./.././../public/logo.png";
import Image from "next/image";
import Navbar from "./navbar";
import { Button } from "./ui/button";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 400) {
        setIsVisible(true);
        return;
      }
      if (currentScrollY >= lastScrollY) {
        setIsVisible(false);
      }
      if (currentScrollY <= lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-5 z-40 left-8 right-8 rounded-3xl rounded-br-3xl rounded-bl-3xl md:border md:border-black/10 md:rounded-full bg-white/80 backdrop-blur-xl md:px-6 md:pl-8 md:transition-all max-w-[1376px] m-auto transition-transform duration-300",
        {
          "-translate-y-0": isVisible,
          "-translate-y-28": !isVisible,
        }
      )}
    >
      <div className="w-full mx-auto max-w-7xl h-full hidden gap-5 md:flex md:items-center py-3">
        <div className="w-full h-full flex items-center justify-start">
          <Image
            src={DecorhubLogo}
            alt="Decorhub logo"
            className="h-10 object-cover w-auto max-w-full"
          />
        </div>
        <Navbar />
        <div className="w-full h-full flex items-center justify-end overflow-hidden gap-3">
          <Button
            asChild
            className="max-w-[180px] w-fit group rounded-full hover:transition-all hover:duration-300"
          >
            <Link href="/contact-us">
              Contact us{" "}
              <span className="group-hover:translate-x-1 transition-transform">
                <MoveRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
