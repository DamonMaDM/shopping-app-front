import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  getOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/orders/all`);
  }

  cancelOrder(orderId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/orders/${orderId}/cancel`);
  }
}
