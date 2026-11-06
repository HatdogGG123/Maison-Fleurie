import React from "react";
import { useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutContext";
import StepButtons from "./StepButtons";

const deliveryTypeRules = { required: "Please choose a delivery option." };

const DeliveryInformationStep = () => {
  const { checkoutData, updateCheckoutData, nextStep, previousStep } =
    useCheckout();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      deliveryType: checkoutData.deliveryType,
      recipientName: checkoutData.recipientName,
      deliveryAddress: checkoutData.deliveryAddress,
    },
  });

  // "delivery" or "pickup" - used to show or hide the address field
  const deliveryType = watch("deliveryType");

  const onSubmit = (data) => {
    let address = "";

    if (data.deliveryType === "delivery") {
      address = data.deliveryAddress.trim();
    }

    updateCheckoutData({
      deliveryType: data.deliveryType,
      recipientName: data.recipientName.trim(),
      deliveryAddress: address,
    });
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-xl font-medium">2. Delivery Information</h2>
        <p className="text-sm text-black/50">
          Estimated delivery date may take 1 - 3 full business days after your
          order is processed.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            value="delivery"
            {...register("deliveryType", deliveryTypeRules)}
            className="accent-secondary"
          />
          Deliver to an address
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="radio"
            value="pickup"
            {...register("deliveryType", deliveryTypeRules)}
            className="accent-secondary"
          />
          Pickup from the shop
        </label>
        {errors.deliveryType && (
          <p className="text-sm text-red-700">{errors.deliveryType.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="recipientName" className="text-lg">
          Recipient's name
        </label>
        <input
          id="recipientName"
          type="text"
          className={`w-full border bg-transparent p-2 outline-none accent-secondary ${
            errors.recipientName ? "border-red-700" : "border-black/60"
          }`}
          {...register("recipientName", {
            validate: (value) =>
              value.trim() !== "" || "Recipient's name is required.",
            minLength: {
              value: 2,
              message: "Recipient's name must be at least 2 characters.",
            },
          })}
        />
        {errors.recipientName && (
          <p className="text-sm text-red-700">{errors.recipientName.message}</p>
        )}
      </div>

      {deliveryType === "delivery" && (
        <div className="flex flex-col gap-1">
          <label htmlFor="deliveryAddress" className="text-lg">
            Delivery address
          </label>
          <input
            id="deliveryAddress"
            type="text"
            className={`w-full border bg-transparent p-2 outline-none accent-secondary ${
              errors.deliveryAddress ? "border-red-700" : "border-black/60"
            }`}
            {...register("deliveryAddress", {
              validate: (value) =>
                value.trim() !== "" || "Delivery address is required.",
              minLength: {
                value: 10,
                message: "Please enter a complete address.",
              },
            })}
          />
          {errors.deliveryAddress && (
            <p className="text-sm text-red-700">
              {errors.deliveryAddress.message}
            </p>
          )}
        </div>
      )}

      <StepButtons onBack={previousStep} />
    </form>
  );
};

export default DeliveryInformationStep;
