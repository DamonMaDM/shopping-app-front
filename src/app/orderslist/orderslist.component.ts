import { Component, OnInit } from '@angular/core';
import { Order } from '../interfaces/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error fetching orders', error);
      }
    );
  }

  cancelOrder(id: number): void {
    this.orderService.cancelOrder(id).subscribe(
      () => {
        this.orders = this.orders.filter(order => order.orderId !== id);
      },
      (error) => {
        console.error('Error cancelling order', error);
      }
    );
  }
}
