import { useState } from "react";
import Shipping from "./Shipping";
import CheckoutSummary from "./CheckoutSummary";
import Payment from "./Payment";
import Review from "./Review";

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, label: "SHIPPING", active: currentStep === 1 },
    { id: 2, label: "PAYMENT", active: currentStep === 2 },
    { id: 3, label: "REVIEW", active: currentStep === 3 },
  ];

  return (
    <>
      <div className="app-container flex flex-col gap-12 py-12">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-4">
              <div
                onClick={() => setCurrentStep(step.id)}
                className={`flex items-center justify-center w-12 h-12 rounded-2xl cursor-pointer transition-all font-bold text-lg ${
                  step.active
                    ? "bg-lime-400 text-black"
                    : "bg-gray-700 text-gray-400 hover:bg-gray-600"
                }`}
              >
                {step.id}
              </div>

              <p
                className={`text-xs font-semibold tracking-widest ${
                  step.active ? "text-lime-400" : "text-gray-500"
                }`}
              >
                {step.label}
              </p>

              {index < steps.length - 1 && (
                <div className="w-24 h-0.5 bg-gray-700 mx-8"></div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {currentStep === 1 && <Shipping />}
          {currentStep === 2 && <Payment />}
          {currentStep === 3 && <Review />}

          <CheckoutSummary />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
