import { Component, Input, OnInit } from '@angular/core';
import { Cartitem } from '../interfaces/cartitem';
import { faMinusCircle, faPlusCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cartitem',
  templateUrl: './cartitem.component.html',
  styleUrls: ['./cartitem.component.css']
})
export class CartitemComponent implements OnInit {
  trashIcon = faTrash;
  decIcon = faMinusCircle;
  incIcon = faPlusCircle;
  @Input() item: Cartitem = {
		product_id: 0,
		name: '',
		count: 0,
		price: 0,
    	max: 0
	};
  cartArray: Cartitem[] = [];
  itemsTotalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
	this.cartService.cartArray.subscribe((arr) => (this.cartArray = arr));
	this.cartService.carttotal.subscribe((total) => this.itemsTotalPrice = total);
  }

  increaseCounter() {
	if (this.item.max === this.item.count) return;
	this.item.count += 1;
	this.cartService.carttotal.subscribe((val) => (this.itemsTotalPrice = val));
	this.itemsTotalPrice += +this.item.price;
	this.cartService.updateTotalPrice(this.itemsTotalPrice);
	const existingCartItem = this.cartArray.find(item => item.product_id === this.item.product_id);
    console.log(existingCartItem?.count);
  }


  decreaseCounter() {
	if (this.item.count === 1) return;
	this.item.count -= 1;
	this.cartService.carttotal.subscribe((val) => (this.itemsTotalPrice = val));
	this.itemsTotalPrice -= +this.item.price;
	this.cartService.updateTotalPrice(this.itemsTotalPrice);
    const existingCartItem = this.cartArray.find(item => item.product_id === this.item.product_id);
    console.log(existingCartItem?.count);
  }

  sendCartUpdate() {
		this.cartArray = this.cartArray.filter((item: Cartitem) => item.product_id !== this.item.product_id);
		this.cartService.updateCart(this.cartArray);
		this.itemsTotalPrice -= this.item.price * this.item.count;
		this.cartService.updateTotalPrice(this.itemsTotalPrice);
	}

  stockToastr() {
	alert('out of stock');
  }

	limitToastr() {
		alert('no less than 1');
	}

}
