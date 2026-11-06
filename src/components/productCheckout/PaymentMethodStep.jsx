import React from "react";
import { useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutContext";
import StepButtons from "./StepButtons";
import PriceSummary from "./PriceSummary";

const paymentRules = { required: "Please choose a payment method." };

const PaymentMethodStep = () => {
  const {
    checkoutData,
    flower,
    subtotal,
    updateCheckoutData,
    nextStep,
    previousStep,
  } = useCheckout();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymentMethod: checkoutData.paymentMethod,
    },
  });

  const onSubmit = (data) => {
    updateCheckoutData({ paymentMethod: data.paymentMethod });
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">4. Payment Method</h2>
        <p className="text-sm text-black/50">
          Cash on Delivery means the person receiving the flowers will be asked
          to pay the order total upon delivery. If this is a gift, we recommend
          paying online (GCash) to keep the gift a surprise.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-center gap-3 border border-black/60 p-3 has-checked:bg-black/5">
          <input
            type="radio"
            value="gcash"
            {...register("paymentMethod", paymentRules)}
          />
          <div>
            <p className="font-medium">GCash</p>
            <p className="text-sm text-black/60">Pay securely online.</p>
          </div>
        </label>

        <label className="flex cursor-pointer items-center gap-3 border border-black/60 p-3 has-checked:bg-black/5">
          <input
            type="radio"
            value="cod"
            {...register("paymentMethod", paymentRules)}
          />
          <div>
            <p className="font-medium">Cash on Delivery</p>
            <p className="text-sm text-black/60">
              Pay when the flowers arrive.
            </p>
          </div>
        </label>

        {errors.paymentMethod && (
          <p className="text-sm text-red-700">{errors.paymentMethod.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-black/50">Flowers</p>
        <div className="flex justify-between">
          <p>
            {flower.name} x{checkoutData.quantity}
          </p>
          <p className="font-medium">${subtotal.toFixed(2)}</p>
        </div>
      </div>

      <PriceSummary />

      <StepButtons onBack={previousStep} nextText="Review Order" />
    </form>
  );
};

export default PaymentMethodStep;
