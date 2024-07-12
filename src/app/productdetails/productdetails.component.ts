import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Cartitem } from '../interfaces/cartitem';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: Product = {
		product_id: 0,
    description: '',
		name: '',
		quantity: 0,
		retail_price: 0,
		wholesale_price: 0,
	};
  cartIcon = faCartPlus;
	alreadyInCart: boolean = false;
	cartArray: Cartitem[] = [];
  constructor(
    private router: Router, 
    private cartService:CartService, 
    private route: ActivatedRoute, 
    private productService : ProductsService) { 
    const params = this.route.snapshot.params;
		this.product.product_id = params['id'];
  }

  ngOnInit(): void {
    this.productService.getProductdetials(this.product.product_id).subscribe((data: any) => {
			this.product = data;
		});

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

}
