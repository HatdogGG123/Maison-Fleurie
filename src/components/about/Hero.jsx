import React from "react";
import FullWidthLayout from "../layout/FullWidthLayout";
import Navbar from "../Navbar";

const Hero = () => {
  return (
    <FullWidthLayout additionalStyle="h-fit bg-primary">
      <section className="px-5 pb-12 flex flex-col gap-5 h-2/3 lg:gap-20">
        <Navbar />
        <p className="font-heading font-medium text-[clamp(2rem,10vw,5rem)] text-center text-white m-auto px-5 pt-0 pb-10">
          A Story Rooted in Beauty, <br className="hidden lg:block" />
          Passion, and Purpose
        </p>
      </section>
    </FullWidthLayout>
  );
};

export default Hero;
