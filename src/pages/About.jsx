import React, { useEffect } from "react";
import ClipWidthLayout from "../components/layout/ClipWidthLayout";
import Hero from "../components/about/Hero";
import AboutCardList from "../components/about/AboutCardList";

const About = () => {
  return (
    <>
      <Hero />
      <AboutCardList />
      <ClipWidthLayout additionalStyle="h-fit px-10 my-[100px] md:px-20 md:my-[200px]">
        <p className="text-center font-body text-md md:text-lg">
          At Fleur & Grâce, we believe that flowers are more than gifts—they are
          expressions of love, gratitude, comfort, and happiness. With every
          bouquet we create, we hope to help you celebrate life's beautiful
          moments, share your sincerest feelings, and make memories that last.
        </p>
      </ClipWidthLayout>
    </>
  );
};

export default About;
