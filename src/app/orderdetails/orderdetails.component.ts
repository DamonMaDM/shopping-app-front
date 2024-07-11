import { Component, OnInit } from '@angular/core';
import { Orderdetail } from '../interfaces/orderdetail';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  order: Orderdetail | null = null;
  constructor(private router:Router, private orderService : OrderService, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const orderId = +this.route.snapshot.paramMap.get('id')!;
    this.orderService.getOrderDetail(orderId).subscribe(
      (data: Orderdetail) => {
        this.order = data;
      },
      (error) => {
        console.error('Error fetching order details', error);
      }
    );
  }


  cancelOrder() {
    if (this.order) {
      this.orderService.cancelOrder(this.order.orderId).subscribe(
        () => {
          this.router.navigate(['/orders']); // Redirect to orders list after cancellation
        },
        (error) => {
          console.error('Error cancelling order', error);
        }
      );
    }
  }
}
