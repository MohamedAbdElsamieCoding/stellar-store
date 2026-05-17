import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { usePaymentStore } from "../../store/usePaymentStore";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const { paymentData, setPaymentData } = usePaymentStore();

  return (
    <div className="col-span-2 flex flex-col gap-8">
      <h1>Select Payment Method</h1>
      <label
        className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition ${
          paymentMethod === "cash"
            ? "border-tertiary-400 bg-lime-50"
            : "border-neutral-300"
        }`}
      >
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-5 h-5 accent-primary"
          />

          <span
            className={`font-medium transition ${
              paymentMethod === "cash" ? "text-lime-600" : "text-text"
            }`}
          >
            Cash On Delivery
          </span>
        </div>
      </label>
      <label
        className={`border rounded-xl p-4 flex items-center justify-between cursor-pointer transition ${
          paymentMethod === "card"
            ? "border-lime-400 bg-lime-50"
            : "border-gray-300"
        }`}
      >
        <div className="flex items-center gap-3">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === "card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-5 h-5 accent-lime-400"
          />

          <span
            className={`font-medium transition ${
              paymentMethod === "card" ? "text-lime-600" : "text-text"
            }`}
          >
            Credit Card
          </span>
        </div>
      </label>
      {paymentMethod === "card" && (
        <div className="flex flex-col border border-primary/30 p-8 gap-8">
          <div className="flex gap-4 items-center">
            <CiCreditCard1 className="text-primary text-2xl" />

            <p className="text-xl font-headline">Credit / Debit Card</p>
          </div>

          <form className="flex flex-col gap-6">
            {/* Card Number */}
            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs font-headline text-text/50">
                Card Number
              </label>

              <input
                type="text"
                value={paymentData.cardNumber}
                placeholder="1234 5678 9012 3456"
                className="border border-text/20 bg-tertiary py-4 px-4 outline-none focus:border-primary transition"
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardNumber: e.target.value,
                  })
                }
              />
            </div>

            {/* Expiry + CVV */}
            <div className="grid grid-cols-2 gap-4">
              {/* Expiry */}
              <div className="flex flex-col gap-2 relative">
                <label className="uppercase text-xs font-headline text-text/50">
                  Expiry Date
                </label>

                <input
                  type="text"
                  placeholder="MM/YY"
                  maxLength={5}
                  className="border border-text/20 bg-tertiary py-4 px-4 outline-none focus:border-primary transition"
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      expiryDate: e.target.value,
                    })
                  }
                />

                <SlCalender className="absolute right-4 top-13 text-text/50 pointer-events-none" />
              </div>

              {/* CVV */}
              <div className="flex flex-col gap-2">
                <label className="uppercase text-xs font-headline text-text/50">
                  CVV
                </label>

                <input
                  type="password"
                  placeholder="123"
                  maxLength={4}
                  className="border border-text/20 bg-tertiary py-4 px-4 outline-none focus:border-primary transition"
                />
              </div>
            </div>

            {/* Card Holder */}
            <div className="flex flex-col gap-2">
              <label className="uppercase text-xs font-headline text-text/50">
                Card Holder Name
              </label>

              <input
                type="text"
                value={paymentData.cardHolder}
                placeholder="Holder Name"
                className="border border-text/20 bg-tertiary py-4 px-4 outline-none focus:border-primary transition"
                onChange={(e) =>
                  setPaymentData({
                    ...paymentData,
                    cardHolder: e.target.value,
                  })
                }
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Payment;
