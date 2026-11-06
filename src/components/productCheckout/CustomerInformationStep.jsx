import React from "react";
import { useForm } from "react-hook-form";
import { useCheckout } from "../../context/CheckoutContext";
import StepButtons from "./StepButtons";

const CustomerInformationStep = () => {
  const { checkoutData, updateCheckoutData, nextStep, previousStep } =
    useCheckout();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      customerName: checkoutData.customerName,
      email: checkoutData.email,
    },
  });

  const onSubmit = (data) => {
    updateCheckoutData({
      customerName: data.customerName.trim(),
      email: data.email.trim(),
    });
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4"
    >
      <h2 className="text-xl font-medium">3. Customer Information</h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="customerName" className="text-lg">
          Full name
        </label>
        <input
          id="customerName"
          type="text"
          className={`w-full border bg-transparent p-2 outline-none ${
            errors.customerName ? "border-red-700" : "border-black/60"
          }`}
          {...register("customerName", {
            validate: (value) =>
              value.trim() !== "" || "Full name is required.",
            minLength: {
              value: 2,
              message: "Full name must be at least 2 characters.",
            },
          })}
        />
        {errors.customerName && (
          <p className="text-sm text-red-700">{errors.customerName.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-lg">
          Email address
        </label>
        <input
          id="email"
          type="email"
          className={`w-full border bg-transparent p-2 outline-none ${
            errors.email ? "border-red-700" : "border-black/60"
          }`}
          {...register("email", {
            validate: (value) => {
              if (value.trim() === "") {
                return "Email is required.";
              }
              if (!value.includes("@") || !value.includes(".")) {
                return "Please enter a valid email address.";
              }
              return true;
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-700">{errors.email.message}</p>
        )}
      </div>

      <StepButtons onBack={previousStep} />
    </form>
  );
};

export default CustomerInformationStep;
