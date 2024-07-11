export interface Ordercreationrequest {
    order: OrderItem[];
}

export interface OrderItem {
    productId: number;
    quantity: number;
  }