import React from "react";
import { MoveUpRight } from "lucide-react";
import featuredBouquetTestimony1 from "../../assets/featured-bouquet-testimony-image-1.jpg";
import featuredBouquet1 from "../../assets/featured-bouquet-image-1.jpg";
import ClipWidthLayout from "../layout/ClipWidthLayout";
import Button from "../ui/Button";

const FeaturedBouquet = () => {
  const featuredBouquetList = [
    {
      title: "Rosée d’Amour",
      testimonyImageUrl: featuredBouquetTestimony1,
      bouquetImageUrl: featuredBouquet1,
      id: "",
    },
  ];

  return (
    <ClipWidthLayout additionalStyle="">
      {featuredBouquetList.map((bouquet, index) => (
        <BouquetCard
          key={index}
          title={bouquet.title}
          bouquetImageUrl={bouquet.bouquetImageUrl}
          testimonyImageUrl={bouquet.testimonyImageUrl}
        />
      ))}
    </ClipWidthLayout>
  );
};

function BouquetCard({
  title = "",
  testimonyImageUrl = "",
  bouquetImageUrl = "",
  id = "",
}) {
  return (
    <section className="h-full w-full grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
      <div className="w-full h-full bg-red-100 overflow-hidden">
        <img
          src={testimonyImageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 items-center justify-center">
        <p className="font-heading text-[clamp(3rem,3vw,5rem)]">{title}</p>
        <img
          src={bouquetImageUrl}
          alt={title}
          className="aspect-video object-cover w-[40%]"
        />
        <Button
          text="Explore"
          trailingIcon={<MoveUpRight width={18} height={18} />}
          additionalStyle="bg-primary px-10 py-2 text-white"
        />
      </div>
    </section>
  );
}

export default FeaturedBouquet;
