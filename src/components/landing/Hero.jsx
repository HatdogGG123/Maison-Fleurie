import React from "react";
import heroBg from "../../assets/hero-bg-image.webp";
import Navbar from "../Navbar";
import FullWidthLayout from "../layout/FullWidthLayout";

const Landing = () => {
  return (
    <FullWidthLayout
      additionalStyle="flex flex-col"
      inlineStyle={{
        background: `linear-gradient(180deg,rgba(32, 32, 32, 0) 0%, rgba(32, 32, 32, 0.35) 86%, #dcd9d8 100%), url(${heroBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <section className="w-full h-full flex items-center justify-center">
        <p className="font-heading text-[clamp(6rem,20vw,18rem)] leading-30 text-center text-white md:leading-60">
          Maison Fleurie
        </p>
      </section>
    </FullWidthLayout>
  );
};

export default Landing;
