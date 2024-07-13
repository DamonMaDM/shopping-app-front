import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { faHeartCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Cartitem } from '../interfaces/cartitem';
import { CartService } from '../services/cart.service';
import { Watchlist } from '../interfaces/watchlist';
import { WatchlistService } from '../services/watchlist.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input() product: Product = {
    productId: 0,
    description: '',
    name: '',
    quantity: 0,
    retailPrice: 0,
    wholesalePrice: 0,
  };
  alreadyInCart: boolean = false;
	inWishlist: boolean = false;
	cartArray: Cartitem[] = [];
	wishList: Watchlist[] = [];
	stockHtmlText: string = '';
  heartIcon = faHeartCirclePlus;
  constructor(private router: Router, private cartService:CartService, private watchlistService : WatchlistService) { }

  ngOnInit(): void {
		this.cartService.cartArray.subscribe((arr) => (this.cartArray = arr));
    if (this.cartArray.some((item: Cartitem) => item.product_id === this.product.productId)) {
			console.log('incart from product');
			this.alreadyInCart = true;
		}

    this.watchlistService.watchlistArray.subscribe((arr) =>(this.wishList = arr));
    if(this.wishList.some((item:Watchlist) => item.productId === this.product.productId)){
      this.inWishlist = true;
    }
  }

  addToCart(): void {
    this.alreadyInCart = true;
    const newCartItem: Cartitem = {
      product_id: this.product.productId,
      name: this.product.name,
      count: 1,
      price: this.product.retailPrice,
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
    this.cartArray = this.cartArray.filter((item: Cartitem) => item.product_id !== this.product.productId);
		this.cartService.updateCart(this.cartArray);
    this.updateTotalPrice();
  }

  sendProductDetails(): void {
    this.router.navigate(['/product', this.product.productId]);
	}

  addToWishlist(): void {
    console.log('add');
    this.watchlistService.addWatchlist(this.product.productId);
	}

	removeFromWishlist(): void {
    console.log('remove');
    if(this.inWishlist){
      this.watchlistService.removeWatchlist(this.product.productId);
    }
	}
}
