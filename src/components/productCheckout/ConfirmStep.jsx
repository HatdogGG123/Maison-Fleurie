import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { useCheckout } from "../../context/CheckoutContext";
import StepButtons from "./StepButtons";

const MAX_QUANTITY = 10;

const ConfirmStep = () => {
  const navigate = useNavigate();
  const { flower, checkoutData, subtotal, updateCheckoutData, nextStep } =
    useCheckout();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      giftMessage: checkoutData.giftMessage,
    },
  });

  const increaseQuantity = () => {
    if (checkoutData.quantity < MAX_QUANTITY) {
      updateCheckoutData({ quantity: checkoutData.quantity + 1 });
    }
  };

  const decreaseQuantity = () => {
    if (checkoutData.quantity > 1) {
      updateCheckoutData({ quantity: checkoutData.quantity - 1 });
    }
  };

  const goBackToShop = () => {
    navigate("/flowers");
  };

  const onSubmit = (data) => {
    updateCheckoutData({ giftMessage: data.giftMessage.trim() });
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <h2 className="text-xl font-medium">1. Confirm your order</h2>

      <div className="flex flex-col gap-5 md:flex-row">
        <img
          src={flower.imageUrl}
          alt={flower.name}
          className="size-24 object-cover"
        />

        <div className="flex flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <p>{flower.name}</p>
            <p className="text-xl font-medium">${subtotal.toFixed(2)}</p>
          </div>

          <div className="flex items-end justify-between">
            <p className="text-sm text-black/50">
              Quantity: {checkoutData.quantity}
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
                className="cursor-pointer bg-primary p-1 text-white"
              >
                <Minus strokeWidth={1} className="size-5" />
              </button>
              <p>{checkoutData.quantity}</p>
              <button
                type="button"
                onClick={increaseQuantity}
                aria-label="Increase quantity"
                className="cursor-pointer bg-primary p-1 text-white"
              >
                <Plus strokeWidth={1} className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="giftMessage" className="text-lg">
          Gift message (optional)
        </label>
        <input
          id="giftMessage"
          type="text"
          placeholder="Add a special message to be given to the recipient"
          className={`w-full border bg-transparent p-2 outline-none ${
            errors.giftMessage ? "border-red-700" : "border-black/60"
          }`}
          {...register("giftMessage", {
            maxLength: {
              value: 150,
              message: "Gift message must not exceed 150 characters.",
            },
          })}
        />
        {errors.giftMessage && (
          <p className="text-sm text-red-700">{errors.giftMessage.message}</p>
        )}
      </div>

      <StepButtons onBack={goBackToShop} />
    </form>
  );
};

export default ConfirmStep;
