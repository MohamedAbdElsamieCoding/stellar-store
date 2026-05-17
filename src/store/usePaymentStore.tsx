import { create } from "zustand";
import type { PaymentStore } from "../types/payment.type";

export const usePaymentStore = create<PaymentStore>((set) => ({
  paymentData: {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  },
  setPaymentData: (data) => {
    set({ paymentData: data });
  },
}));
