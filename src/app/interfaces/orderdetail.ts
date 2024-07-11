export interface Orderdetail {
    orderId: number;
    datePlaced: Date;
    orderStatus: string;
    userName: string;
    userId: number;
    items: Item[];
}

export interface Item {
    itemId: number;
    purchasedPrice: number;
    quantity: number;
    wholesalePrice: number;
    itemName: string;
    productId: number;
  }
