import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useCheckout } from "../context/CheckoutContext";
import StepIndicator from "../components/productCheckout/StepIndicator";
import ConfirmStep from "../components/productCheckout/ConfirmStep";
import DeliveryInformationStep from "../components/productCheckout/DeliveryInformationStep";
import CustomerInformationStep from "../components/productCheckout/CustomerInformationStep";
import PaymentMethodStep from "../components/productCheckout/PaymentMethodStep";
import ReviewStep from "../components/productCheckout/ReviewStep";
import CheckoutComplete from "../components/productCheckout/CheckoutComplete";

const ProductCheckout = () => {
  const { currentStep, totalSteps, flower } = useCheckout();

  const isComplete = currentStep > totalSteps;

  if (!flower && !isComplete) {
    return (
      <section className="flex flex-col items-center gap-4 p-8 font-body">
        <h1 className="font-heading text-5xl">Complete your Order</h1>
        <p className="text-black/70">No flower selected for checkout.</p>
        <Link
          to="/flowers"
          className="bg-neutral-800 px-6 py-3 text-sm text-white"
        >
          Browse Flowers
        </Link>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-6 p-8 font-body">
      {!isComplete && (
        <Link to="/flowers" className="flex w-fit items-center gap-2 text-sm">
          <ChevronLeft strokeWidth={1} className="size-4" />
          Go back to shop
        </Link>
      )}

      <h1 className="text-center font-heading text-5xl">Complete your Order</h1>

      {!isComplete && (
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
      )}

      {currentStep === 1 && <ConfirmStep />}
      {currentStep === 2 && <DeliveryInformationStep />}
      {currentStep === 3 && <CustomerInformationStep />}
      {currentStep === 4 && <PaymentMethodStep />}
      {currentStep === 5 && <ReviewStep />}
      {isComplete && <CheckoutComplete />}
    </section>
  );
};

export default ProductCheckout;
