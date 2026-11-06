import React from "react";
import { useParams } from "react-router-dom";
import { flowers } from "../../data/productList";
import FlowerCard from "../flowerShop/FlowerCard";
import ClipWidthLayout from "../layout/ClipWidthLayout";

const RecommendedProduct = () => {
  const { id } = useParams();

  const maxItems = 3;
  const currentIndex = flowers.findIndex((f) => f.id === Number(id));
  const availableItems = Math.min(maxItems, flowers.length - 1);

  const cards = [];
  let i = currentIndex + 1;

  if (availableItems > 0) {
    do {
      if (i >= flowers.length) {
        i = 0;
      }

      const flower = flowers[i];

      cards.push(
        <FlowerCard
          discount={flower.discount}
          imageUrl={flower.imageUrl}
          name={flower.name}
          price={flower.price}
          key={flower.id}
          id={flower.id}
        />,
      );

      i++;
    } while (cards.length < availableItems);
  }

  return (
    <ClipWidthLayout additionalStyle="flex flex-col p-5 gap-5 h-fit">
      <section>
        <p className="font-heading text-[3rem] font-medium md:text-[4rem]">
          Recommended Bouquets
        </p>
      </section>
      <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cards}
      </section>
    </ClipWidthLayout>
  );
};

export default RecommendedProduct;
