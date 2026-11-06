import React from "react";
import { flowers } from "../../data/productList";
import FlowerCard from "./FlowerCard";
import EmptyState from "./EmptyState";

const FlowerList = () => {
  return (
    <section className="grid grid-cols-1 gap-2 w-full h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {flowers.length === 0 || !flowers ? (
        <EmptyState />
      ) : (
        flowers.map((flower) => {
          return <FlowerCard key={flower.id} {...flower} />;
        })
      )}
    </section>
  );
};

export default FlowerList;
