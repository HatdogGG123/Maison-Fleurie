import React from "react";

const StepIndicator = ({ currentStep, totalSteps }) => {
  const bars = [];

  for (let i = 1; i <= totalSteps; i++) {
    bars.push(
      <div
        key={i}
        className={`h-1 flex-1 ${i <= currentStep ? "bg-neutral-800" : "bg-black/15"}`}
      />,
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm">
        Step {currentStep} of {totalSteps}
      </p>
      <div className="flex gap-1">{bars}</div>
    </div>
  );
};

export default StepIndicator;
