import React from "react";

const StepButtons = ({ onBack, nextText = "Continue" }) => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-5">
      <button
        type="button"
        onClick={onBack}
        className="cursor-pointer p-3 text-sm"
      >
        Back
      </button>
      <button
        type="submit"
        className="cursor-pointer bg-neutral-800 p-3 text-sm text-white"
      >
        {nextText}
      </button>
    </div>
  );
};

export default StepButtons;
