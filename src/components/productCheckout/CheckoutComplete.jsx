import React from "react";
import { useNavigate } from "react-router-dom";
import { CircleCheck } from "lucide-react";
import { useCheckout } from "../../context/CheckoutContext";

const CheckoutComplete = () => {
  const navigate = useNavigate();
  const { resetCheckout } = useCheckout();

  const returnToShop = () => {
    navigate("/flowers");
    resetCheckout();
  };

  return (
    <section className="flex flex-col items-center gap-4 text-center">
      <CircleCheck strokeWidth={1} className="size-14 text-neutral-700" />
      <h2 className="text-xl font-medium">Your order is submitted!</h2>
      <p className="text-sm">
        Thank you for your order! Your purchase has been placed successfully.
        Our team is preparing your flowers with care, and your order will be
        delivered within the estimated timeframe. We appreciate your trust in
        Fleur &amp; Grâce and look forward to bringing beauty to your doorstep.
      </p>
      <button
        type="button"
        onClick={returnToShop}
        className="mt-4 cursor-pointer bg-neutral-800 px-12 py-3 text-sm text-white"
      >
        Return to Shop
      </button>
    </section>
  );
};

export default CheckoutComplete;
