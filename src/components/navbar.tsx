import { navbarItems } from "@/constant/navbar";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-full flex items-center justify-center text-sm leading-[17px] ">
      <nav className=" w-full h-full flex items-center justify-center gap-8 text-sm">
        {navbarItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="py-3 text-secondary whitespace-nowrap cursor-pointer hover:text-primary hover:transition-all duration-50 capitalize"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
