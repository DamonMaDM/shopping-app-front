import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  product: Product = {
		productId: 0,
    description: '',
		name: '',
		quantity: 0,
		retailPrice: 0,
		wholesalePrice: 0,
	};
  constructor(private route: ActivatedRoute, private productService: ProductsService) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductdetials(productId).subscribe(
      (data: Product) => {
        this.product = data;
      },
      error => {
        console.error('Error fetching product', error);
      }
    );
  }

}
