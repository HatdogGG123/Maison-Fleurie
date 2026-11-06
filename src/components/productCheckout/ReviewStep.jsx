import React from "react";
import { useCheckout } from "../../context/CheckoutContext";
import StepButtons from "./StepButtons";
import PriceSummary from "./PriceSummary";

const getEstimatedDeliveryDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + 3);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const ReviewStep = () => {
  const {
    checkoutData,
    flower,
    subtotal,
    deliveryFee,
    total,
    nextStep,
    previousStep,
  } = useCheckout();

  let recipientAddress = "Pickup from the shop";
  if (checkoutData.deliveryType === "delivery") {
    recipientAddress = checkoutData.deliveryAddress;
  }

  let paymentName = "Cash on Delivery";
  if (checkoutData.paymentMethod === "gcash") {
    paymentName = "GCash";
  }

  const details = [
    { label: "Flower", value: `${flower.name} x${checkoutData.quantity}` },
    { label: "Delivery Date", value: getEstimatedDeliveryDate() },
    { label: "Recipient Name", value: checkoutData.recipientName },
    { label: "Recipient Address", value: recipientAddress },
    { label: "Customer Name", value: checkoutData.customerName },
    { label: "Email", value: checkoutData.email },
    { label: "Mode of Payment", value: paymentName },
  ];

  if (checkoutData.giftMessage !== "") {
    details.push({ label: "Gift Message", value: checkoutData.giftMessage });
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    const order = {
      ...checkoutData,
      flowerName: flower.name,
      subtotal: subtotal,
      deliveryFee: deliveryFee,
      total: total,
    };

    // replace this with saving the order later
    console.log("Order placed:", order);

    nextStep();
  };

  return (
    <form onSubmit={handlePlaceOrder} className="flex flex-col gap-4">
      <h2 className="text-xl font-medium">5. Review Order Details</h2>

      <div className="flex flex-col gap-2">
        {details.map((detail) => (
          <div key={detail.label} className="grid grid-cols-[170px_1fr] gap-2">
            <p className="text-sm">{detail.label}</p>
            <p className="text-sm font-medium">{detail.value}</p>
          </div>
        ))}
      </div>

      <PriceSummary />

      <StepButtons onBack={previousStep} nextText="Place Order" />
    </form>
  );
};

export default ReviewStep;
