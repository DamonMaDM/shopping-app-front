import { Component, OnInit } from '@angular/core';
import { Cartitem } from '../interfaces/cartitem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Cartitem[] = [];
	totalPrice: number = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartArray.subscribe((arr) => (this.cartItems = arr));
		this.cartService.carttotal.subscribe((val) => (this.totalPrice = val));
  }
}
