import React from "react";
import { useCheckout } from "../../context/CheckoutContext";

const PriceSummary = () => {
  const { subtotal, deliveryFee, total } = useCheckout();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-black/50">Prices</p>

      <div className="flex justify-between">
        <p>Sub total</p>
        <p className="font-medium">${subtotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between">
        <p>Delivery Fee</p>
        <p className="font-medium">${deliveryFee.toFixed(2)}</p>
      </div>

      <div className="flex justify-between border-t border-black/40 pt-3">
        <p>Amount to pay</p>
        <p className="font-medium">${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default PriceSummary;
