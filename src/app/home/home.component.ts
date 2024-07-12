import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mostFrequentProducts: Product[] = [];
  mostRecentProducts: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getTopThreeMostFrequentItems().subscribe(
      (data: Product[]) => {
        this.mostFrequentProducts = data;
      },
      error => {
        console.error('Error fetching most frequent products', error);
      }
    );

    this.productService.getTopThreeMostRecentItems().subscribe(
      (data: Product[]) => {
        this.mostRecentProducts = data;
      },
      error => {
        console.error('Error fetching most recent products', error);
      }
    );
  }

}
