import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  order: any;
  constructor() { }

  ngOnInit(): void {
  }


  cancelOrder() {
    console.log('Cancelling order', this.order.id);
    // Implement cancellation logic here
  }
}
