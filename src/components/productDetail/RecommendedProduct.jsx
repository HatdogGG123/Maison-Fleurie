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
    <ClipWidthLayout additionalStyle="grid grid-cols-3 gap-5">
      {cards}
    </ClipWidthLayout>
  );
};

export default RecommendedProduct;
