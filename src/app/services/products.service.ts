import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Createproduct } from '../interfaces/createproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products/all`)
      .pipe(
        catchError(error => {
          return throwError('Failed to fetch products');
        })
      );
	}
	
	getProductdetials(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
	}

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/products`, product);
  }

  updateProduct(id: number, product: Partial<Product>): Observable<any> {
    return this.http.patch(`${this.baseUrl}/products/${id}`, product);
  }

  getTopThreeMostProfitableItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/profit/3`);
  } 

  getTopThreeMostPopularItems(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/popular/3`);
  }
}
