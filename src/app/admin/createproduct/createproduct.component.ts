import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  constructor(private productService: ProductsService,private router: Router) { }

  ngOnInit(): void {
  }

  fBuilder = new FormBuilder().group({
    name: ['', Validators.required],
    description: [''],
    wholesalePrice: [ , Validators.required],
    retailPrice: [ , Validators.required],
    quantity: [ , Validators.required],
  })

  onSubmit() :void {
    if (this.fBuilder.valid) {
      this.productService.createProduct(this.fBuilder.value).subscribe(
        response => {
          console.log('Product created successfully', response);
          this.router.navigate(['admin/products']); // Navigate to the products list page after successful creation
        },
        error => {
          console.error('Error creating product', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

}
