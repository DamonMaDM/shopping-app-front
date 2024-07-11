import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cartitem } from '../interfaces/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartContainer = new BehaviorSubject<Cartitem[]>([]);
	cartArray:Observable<Cartitem[]> = this.cartContainer.asObservable();

  private carttotalPrice = new BehaviorSubject<number>(0);
	carttotal:Observable<number> = this.carttotalPrice.asObservable();

  constructor() { }

  updateCart(updatedArray: Cartitem[]) {
		this.cartContainer.next(updatedArray);
	}

	getItems() {
		return this.cartArray;
	}

	updateTotalPrice(updatedPrice: number) {
		this.carttotalPrice.next(updatedPrice);
	}
}
