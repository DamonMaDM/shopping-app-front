import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';

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
	productCount: number = 0;
	cartArray: any = [];
	itemsTotalPrice: number = 0;
	currPurchase: number = 0;
	wishList: any = {};
	stockHtmlText: string = '';
  heartIcon = faHeartCirclePlus;
  constructor() { }

  ngOnInit(): void {
  }

  addToCart(): void {
	}

  removeFromCart(): void {
	}

  sendProductDetails(): void {
	}
  addToWishlist(): void {
	}
	removeFromWishlist(): void {
	}
}
