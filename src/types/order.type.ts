export interface Order {
  id: number | string;
  title: string;
  image: string;
  progress: string;
}

export interface OrderStore {
  orders: Order[];

  addOrder: (order: Order) => void;

  removeOrder: (id: number | string) => void;

  clearOrders: () => void;
}
