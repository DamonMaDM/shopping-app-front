import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Orderdetail } from 'src/app/interfaces/orderdetail';
import { OrderService } from 'src/app/services/order.service';

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

  orderStatusCanBeChanged() : boolean {
    return this.order?.orderStatus === 'Processing';
  }

  cancelOrder() {
    if (this.order) {
      this.orderService.cancelOrder(this.order.orderId).subscribe(
        () => {
          this.router.navigate(['/admin/home']);
        },
        (error) => {
          console.error('Error cancelling order', error);
        }
      );
    }
  }

  completeOrder(){
    if (this.order) {
      this.orderService.completeOrder(this.order.orderId).subscribe(
        () => {
          this.router.navigate(['/admin/home']);
        },
        (error) => {
          console.error('Error completing order', error);
        }
      );
    }
  }

}
