import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../interfaces/order';
import { Orderdetail } from '../interfaces/orderdetail';
import { Ordercreationrequest } from '../interfaces/ordercreationrequest';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  getOrders() : Observable<Order[]>{
    return this.http.get<Order[]>(`${this.baseUrl}/orders/all`);
  }

  cancelOrder(orderId: number): Observable<any> {
    return this.http.patch(`${this.baseUrl}/orders/${orderId}/cancel`, {});
  }

  getOrderDetail(orderId: number): Observable<Orderdetail> {
    return this.http.get<Orderdetail>(`${this.baseUrl}/orders/${orderId}`);
  }

  createOrder(order: Ordercreationrequest): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/orders`, order);
  }

  completeOrder(orderId: number) : Observable<any> {
    return this.http.patch(`${this.baseUrl}/orders/${orderId}/complete`, {});
  }

}
