import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostProfitableProducts: Product[] = [];
  mostPopularProducts: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getTopThreeMostProfitableItems().subscribe(
      (data: Product[]) => {
        this.mostProfitableProducts = data;
      },
      error => {
        console.error('Error fetching most profitable products', error);
      }
    );

    this.productService.getTopThreeMostPopularItems().subscribe(
      (data: Product[]) => {
        this.mostPopularProducts = data;
      },
      error => {
        console.error('Error fetching most popular products', error);
      }
    );
  }

}
