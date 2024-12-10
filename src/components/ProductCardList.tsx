import React from "react";

interface IProductCardListProps {
  children: React.ReactNode;
}

export default function ProductCardList({
  children,
}: Readonly<IProductCardListProps>) {
  return <section className="grid grid-cols-12 gap-6">{children}</section>;
}
