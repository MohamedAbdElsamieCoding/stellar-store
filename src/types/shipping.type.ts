export interface ShippingData {
  fullName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
}

export interface ShippingStore {
  shippingData: ShippingData;
  setShippingData: (data: ShippingData) => void;
}
