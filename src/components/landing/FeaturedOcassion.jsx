import React from "react";
import featuredImage1 from "../../assets/featured-ocassion-&-event-image-1.jpg";
import ClipWidthLayout from "../layout/ClipWidthLayout";

const FeaturedOcation = () => {
  const featuredOcassionList = [
    {
      title: "Bloom & Blossom Floral Expo 2026",
      description:
        "A floral exhibition featuring signature bouquets and creative flower arrangements.",
      imageUrl: featuredImage1,
    },
    // {
    //   title: "Bloom & Blossom Floral Expo 2026",
    //   description:
    //     "A floral exhibition featuring signature bouquets and creative flower arrangements.",
    //   imageUrl: featuredImage1,
    // },
    // {
    //   title: "Bloom & Blossom Floral Expo 2026",
    //   description:
    //     "A floral exhibition featuring signature bouquets and creative flower arrangements.",
    //   imageUrl: featuredImage1,
    // },
  ];

  return (
    <>
      <ClipWidthLayout additionalStyle="p-5 flex flex-col justify-between">
        <h1 className="text-[clamp(44px,10vw,6rem)] font-heading font-medium h-[15%] leading-14 md:leading-20">
          Featured Occasions & Events
        </h1>

        <section className="w-full h-[70%] sm:h-[70%]">
          {featuredOcassionList.map((ocassion, index) => (
            <OcassionCard
              key={index}
              title={ocassion.title}
              description={ocassion.description}
              imageUrl={ocassion.imageUrl}
            />
          ))}
        </section>
      </ClipWidthLayout>
    </>
  );
};

function OcassionCard({ title = "", description = "", imageUrl = "" }) {
  return (
    <section className="h-full w-full flex flex-col gap-3 lg:pb-14">
      <div className="w-full h-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <p className="font-heading text-[clamp(32px,6vw,4rem)] leading-8 md:leading-12">
        {title}
      </p>
      <p className="font-jost text-sm sm:text-md">{description}</p>
    </section>
  );
}

export default FeaturedOcation;
