import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { OrdercardComponent } from './ordercard/ordercard.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderslistComponent } from './orderslist/orderslist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductcardComponent,
    ProductdetailsComponent,
    ProductslistComponent,
    WatchlistComponent,
    OrdercardComponent,
    OrderdetailsComponent,
    OrderslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
