import React from "react";
import Hero from "../components/landing/Hero";
import FeaturedOcassion from "../components/landing/FeaturedOcassion";
import FeaturedBouquet from "../components/landing/FeaturedBouquet";
import Testimonial from "../components/landing/Testimonial";
import PageLayout from "../components/layout/PageLayout";
import ClipWidthLayout from "../components/layout/ClipWidthLayout";

const LandingPage = () => {
  return (
    <PageLayout>
      <Hero />
      <FeaturedOcassion />
      <FeaturedBouquet />
      <Testimonial />
    </PageLayout>
  );
};

export default LandingPage;
