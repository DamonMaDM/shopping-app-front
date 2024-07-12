import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit {

  orders: Order[] = [];
  constructor(private orderService:OrderService, private router:Router) { }

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
        this.router.navigate(['admin/home']);
      },
      (error) => {
        console.error('Error cancelling order', error);
      }
    );
  }

  completeOrder(id: number){
    this.orderService.completeOrder(id).subscribe(
      () => {
        this.router.navigate(['admin/home']);
      },
      (error) => {
        console.error('Error Completing order', error);
      }
    );
  }

}
