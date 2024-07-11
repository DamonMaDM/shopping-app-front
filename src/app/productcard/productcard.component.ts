import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Cartitem } from '../interfaces/cartitem';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input() product: Product = {
    product_id: 0,
    description: '',
    name: '',
    quantity: 0,
    retail_price: 0,
    wholesale_price: 0,
  };
  alreadyInCart: boolean = false;
	inWishlist: boolean = false;
	cartArray: Cartitem[] = [];
	wishList: any = {};
	stockHtmlText: string = '';
  heartIcon = faHeartCirclePlus;
  constructor(private router: Router, private cartService:CartService) { }

  ngOnInit(): void {
		this.cartService.cartArray.subscribe((arr: any) => (this.cartArray = arr));
    if (this.cartArray.some((item: any) => item.id === this.product.product_id)) {
			console.log('incart from product');
			this.alreadyInCart = true;
		}
  }

  addToCart(): void {
    this.alreadyInCart = true;
    const newCartItem: Cartitem = {
      product_id: this.product.product_id,
      name: this.product.name,
      count: 1,
      price: this.product.retail_price,
      max: this.product.quantity
    };
    this.cartArray.push(newCartItem);
    this.cartService.updateCart(this.cartArray);
    this.updateTotalPrice();
  }

  private updateTotalPrice(): void {
    const totalPrice = this.cartArray.reduce((total, item) => total + (item.price * item.count), 0);
    this.cartService.updateTotalPrice(totalPrice);
  }

  removeFromCart(): void {
    this.alreadyInCart = false;
    this.cartArray = this.cartArray.filter((item: Cartitem) => item.product_id !== this.product.product_id);
		this.cartService.updateCart(this.cartArray);
    this.updateTotalPrice();
  }

  sendProductDetails(): void {
    this.router.navigate(['product', this.product.product_id]);
	}
  addToWishlist(): void {
	}
	removeFromWishlist(): void {
	}
}
