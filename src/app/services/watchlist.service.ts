import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Watchlist } from '../interfaces/watchlist';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  private watchlistContainer = new BehaviorSubject<Watchlist[]>([]);
  watchlistArray:Observable<Watchlist[]> = this.watchlistContainer.asObservable();

  private baseUrl = 'http://localhost:8080';
  constructor(private http:HttpClient) { }

  getWatchlist() : Observable<Watchlist[]>{
      return this.http.get<Watchlist[]>(`${this.baseUrl}/watchlist/products/all`);
  } 

  loadWatchlist(): void {
    this.getWatchlist().subscribe(
      (data: Watchlist[]) => {
        this.watchlistContainer.next(data);
      },
      (error) => {
        console.error('Error fetching watchlist', error);
      }
    );
  }

  addWatchlist(id : number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/watchlist/product/` + id,{});
  }

  removeWatchlist(id:number) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/watchlist/product/`+id);
  }

}
