import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';


@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  	products: Product[] = [];
	constructor(private service: ProductsService) {
	}
	ngOnInit(): void {
		this.service.getProducts().subscribe(
			data => {
				this.products = data;
			}
		);
	}
}
