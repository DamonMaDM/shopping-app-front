import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  editProductForm: FormGroup = new FormBuilder().group({
    description: [''],
    quantity: [null, Validators.required],
    retailPrice: [null, Validators.required]
  });
  product: Product | null = null;

  constructor( private productService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const productId = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProductdetials(productId).subscribe(
      product => {
        this.product = product;
        this.editProductForm.patchValue({
          description: product.description,
          quantity: product.quantity,
          retailPrice: product.retailPrice
        });
      },
      error => {
        console.error('Error fetching product', error);
      }
    );
  }

  onSubmit(): void {
    if (this.editProductForm.valid && this.product) {
      const updatedProduct: Partial<Product> = {
        name: this.product.name,
        description: this.editProductForm.value.description,
        quantity: this.editProductForm.value.quantity,
        retailPrice: this.editProductForm.value.retailPrice,
        wholesalePrice: this.product.wholesalePrice,
      };

      this.productService.updateProduct(this.product.productId, updatedProduct).subscribe(
        response => {
          console.log('Product updated successfully', response);
          this.router.navigate(['/admin/products']); // Navigate to the products list page after successful update
        },
        error => {
          console.error('Error updating product', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

}
