import { Component, OnInit } from '@angular/core';
import { faRemove } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  wishList: any = {};
	removeIcon = faRemove;
  constructor() { }

  ngOnInit(): void {
  }

  removeFromWishlist(id: number) {
	}
	goToDetails(idNum: number) {
	}
}
