import { Component, OnInit } from '@angular/core';
import { Cartitem } from '../interfaces/cartitem';
import { CartService } from '../services/cart.service';
import { OrderItem, Ordercreationrequest } from '../interfaces/ordercreationrequest';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Cartitem[] = [];
	totalPrice: number = 0;
  constructor(private cartService: CartService, private orderService : OrderService, private router : Router) { }

  ngOnInit(): void {
    this.cartService.cartArray.subscribe((arr) => (this.cartItems = arr));
		this.cartService.carttotal.subscribe((val) => (this.totalPrice = val));
  }

  proceedToPay(): void{
    const orderItems: OrderItem[] = this.cartItems.map(item => ({
      productId: item.product_id,
      quantity: item.count
    }));

    const orderRequest: Ordercreationrequest = { order: orderItems };
    this.orderService.createOrder(orderRequest).subscribe(
      response => {
        console.log('Order created successfully', response);
        // Clear the cart after successful order creation
        this.cartService.updateCart([]);
        this.cartService.updateTotalPrice(0);
        this.router.navigate(['/home']); // Redirect to orders list or confirmation page
      },
      error => {
        console.error('Error creating order', error);
      }
    );
  }
}
