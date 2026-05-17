import { useState } from "react";
import Shipping from "./Shipping";
import CheckoutSummary from "./CheckoutSummary";
import Payment from "./Payment";
import Review from "./Review";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "SHIPPING" },
    { id: 2, label: "PAYMENT" },
    { id: 3, label: "REVIEW" },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleConfirmOrder = () => {
    console.log("Order Confirmed");
  };

  return (
    <>
      <div className="app-container flex flex-col gap-12 py-12">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;
            return (
              <div key={step.id} className="flex items-center gap-1 md:gap-4">
                <div
                  onClick={() => {
                    if (step.id <= currentStep) {
                      setCurrentStep(step.id);
                    }
                  }}
                  className={`flex items-center justify-center
                 w-4 h-4 md:w-12 md:h-12 rounded-2xl
                  font-bold text-lg transition-all duration-300

                  ${
                    isActive
                      ? "bg-lime-400 text-black text-xs text-center md:text-xl"
                      : isCompleted
                        ? "bg-lime-600 text-white text-xs text-center md:text-xl"
                        : "bg-gray-700 text-gray-400 text-xs text-center md:text-xl"
                  }
                  `}
                >
                  {step.id}
                </div>

                <p
                  className={`text-[9px] md:text-xs font-semibold tracking-widest
                  ${isActive || isCompleted ? "text-lime-400" : "text-gray-500"}
                  `}
                >
                  {step.label}
                </p>

                {index < steps.length - 1 && (
                  <div className="w-10 md:w-24 h-0.5 bg-gray-700 mx-8"></div>
                )}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="col-span-2 flex flex-col gap-8">
            {currentStep === 1 && <Shipping />}
            {currentStep === 2 && <Payment />}
            {currentStep === 3 && <Review />}
            <div className="flex items-center justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className="px-6 py-3 rounded-xl bg-gray-700 disabled:opacity-40"
              >
                Back
              </button>

              <button
                onClick={nextStep}
                disabled={currentStep === steps.length}
                className="px-6 py-3 rounded-xl bg-lime-400 text-black font-semibold disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
          <div>
            <CheckoutSummary />
            <button
              onClick={handleConfirmOrder}
              className="w-full mt-6 py-4 bg-lime-400 text-black font-bold uppercase"
            >
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
