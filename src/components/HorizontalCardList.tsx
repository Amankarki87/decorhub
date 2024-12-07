import React from "react";
import HorizontalCard from "./HorizontalCard";

interface IHorizontalCard {
  heading: string;
  btnHref: string;
  imgSrc: string;
  imgAlt: string;
}

interface IHorizontalCardListProps {
  horizontalCards: IHorizontalCard[];
}

export default function HorizontalCardList({
  horizontalCards,
}: Readonly<IHorizontalCardListProps>) {
  return (
    <section className="grid grid-cols-12 gap-6 max-w-[1260px] w-full mx-auto px-4 sm:px-0 md:px-6 xl:px-0 pt-[60px]">
      {horizontalCards.map((el) => (
        <HorizontalCard
          className="col-span-12 sm:col-span-6 lg:col-span-4"
          heading={el.heading}
          btnHref={el.btnHref}
          imgSrc={el.imgSrc}
          imgAlt={el.imgAlt}
          key={el.imgSrc}
        />
      ))}
    </section>
  );
}
