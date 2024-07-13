import { Component, OnInit } from '@angular/core';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import { Watchlist } from '../interfaces/watchlist';
import { WatchlistService } from '../services/watchlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist: Watchlist[] = [];
	removeIcon = faRemove;
  constructor(private watchlistService: WatchlistService, private router: Router) { }

  ngOnInit(): void {
    this.loadWatchlist();
  }

  loadWatchlist(): void {
    this.watchlistService.getWatchlist().subscribe(
      (data: Watchlist[]) => {
        this.watchlist = data;
      },
      (error) => {
        console.error('Error fetching watchlist', error);
      }
    );
  }

  removeFromWishlist(id: number): void {
    this.watchlistService.removeWatchlist(id).subscribe(
      () => {
        this.loadWatchlist(); // Reload the watchlist after removal
      },
      (error) => {
        console.error('Error removing item from watchlist', error);
      }
    );
  }

	goToDetails(id: number) {
    this.router.navigate(['/product', id]);
	}
}
