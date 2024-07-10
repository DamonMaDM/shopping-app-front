import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @Input() product: Product = {
		product_id: 0,
    description: '',
		name: '',
		quantity: 0,
		retail_price: 0,
		wholesale_price: 0,
	};
  cartIcon = faCartPlus;
	alreadyInCart: boolean = false;
	productCount: number = 0;
	cartArray: any = [];
	itemsTotalPrice: number = 0;
	currPurchase: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
	}

	removeFromCart(): void {
	}

	removeFromCartToastr(): void {
	}

	addToCartToastr(): void {
	}

}
