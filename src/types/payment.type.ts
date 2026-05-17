export interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardHolder: string;
}

export interface PaymentStore {
  paymentData: PaymentData;
  setPaymentData: (data: PaymentData) => void;
}
