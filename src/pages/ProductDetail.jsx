import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import FullWidthLayout from "../components/layout/FullWidthLayout";
import PageLayout from "../components/layout/PageLayout";
import Hero from "../components/productDetail/Hero";
import RecommendedProduct from "../components/productDetail/RecommendedProduct";

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <Hero />
      <RecommendedProduct />

      <div className="h-50"></div>
    </PageLayout>
  );
};

export default ProductDetail;
