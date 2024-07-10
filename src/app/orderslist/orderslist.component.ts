import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderslist',
  templateUrl: './orderslist.component.html',
  styleUrls: ['./orderslist.component.css']
})
export class OrderslistComponent implements OnInit {
  orders = [
    { id: 1, datePlaced: new Date(2023, 6, 25), status: 'Shipped' },
    { id: 2, datePlaced: new Date(2023, 6, 26), status: 'Pending' },
    { id: 3, datePlaced: new Date(2023, 6, 27), status: 'Cancelled' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  cancelOrder(id: number): void {
    console.log('Cancelling order', id);
    // Add logic to cancel the order
  }
}
