import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  onEdit(productId: number): void {
    this.router.navigate(['/admin/editproduct', productId]);
  }

  onView(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  onCreateNewProduct(): void {
    this.router.navigate(['/createnewproduct']);
  }
}
