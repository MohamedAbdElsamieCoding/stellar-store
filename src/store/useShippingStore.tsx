import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ShippingStore } from "../types/shipping.type";

export const useShippingStore = create<ShippingStore>()(
  persist(
    (set) => ({
      shippingData: {
        fullName: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
      },

      setShippingData: (data) =>
        set({
          shippingData: data,
        }),
    }),
    { name: "shipping-storage" },
  ),
);
