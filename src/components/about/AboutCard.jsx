import React from "react";
import ClipWidthLayout from "../layout/ClipWidthLayout";

const AboutCard = ({ altText = "", imageUrl = "", text = "", isReversed }) => {
  return (
    <ClipWidthLayout additionalStyle="">
      <section
        className={`h-full w-full flex flex-col md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`}
      >
        <section className="overflow-hidden h-full w-full md:w-1/2 bg-tertiary">
          <img
            src={imageUrl}
            alt={altText}
            className="object-top object-cover h-full w-full"
          />
        </section>
        <section className="h-full w-full md:w-1/2 px-5 py-5 flex justify-center items-center md:px-20">
          <p className="font-body text-md md:text-lg">{text}</p>
        </section>
      </section>
    </ClipWidthLayout>
  );
};

export default AboutCard;
