import React from "react";
import FullWidthLayout from "../components/layout/FullWidthLayout";
import FlowerList from "../components/flowerShop/FlowerList";
import Sidebar from "../components/flowerShop/Sidebar";
import TopBar from "../components/flowerShop/TopBar";

const FlowerShop = () => {
  return (
    <FullWidthLayout additionalStyle="h-fit gap-2">
      <section className="p-2 flex flex-col gap-2">
        <TopBar />
        <FlowerList />
      </section>
    </FullWidthLayout>
  );
};

export default FlowerShop;
