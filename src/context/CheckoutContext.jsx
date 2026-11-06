import { createContext, useContext, useState } from "react";
import { flowers, getDiscountedPrice } from "../data/productList";

const CheckoutContext = createContext(null);

const TOTAL_STEPS = 5;
const DELIVERY_FEE = 100;

const emptyCheckoutData = {
  flowerId: null,
  quantity: 1,
  giftMessage: "",
  deliveryType: "",
  recipientName: "",
  deliveryAddress: "",
  customerName: "",
  email: "",
  paymentMethod: "",
};

export const CheckoutProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState(emptyCheckoutData);

  // call this when the user presses "Buy now" on a flower
  const startCheckout = (flowerId) => {
    setCheckoutData({ ...emptyCheckoutData, flowerId: Number(flowerId) });
    setCurrentStep(1);
  };

  // merges the new values into the saved data
  const updateCheckoutData = (newData) => {
    setCheckoutData((prev) => ({ ...prev, ...newData }));
  };

  const nextStep = () => {
    if (currentStep <= TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetCheckout = () => {
    setCheckoutData(emptyCheckoutData);
    setCurrentStep(1);
  };

  // prices are calculated here so every step shows the same numbers
  const flower = flowers.find((item) => item.id === checkoutData.flowerId);

  let subtotal = 0;
  let deliveryFee = 0;

  if (flower) {
    const unitPrice = getDiscountedPrice(flower.price, flower.discount);
    subtotal = unitPrice * checkoutData.quantity;
  }

  if (checkoutData.deliveryType === "delivery") {
    deliveryFee = DELIVERY_FEE;
  }

  const total = subtotal + deliveryFee;

  return (
    <CheckoutContext.Provider
      value={{
        currentStep,
        totalSteps: TOTAL_STEPS,
        checkoutData,
        flower,
        subtotal,
        deliveryFee,
        total,
        startCheckout,
        updateCheckoutData,
        nextStep,
        previousStep,
        resetCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = () => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used inside CheckoutProvider");
  }
  return context;
};
