import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { share } from 'rxjs';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductcardComponent } from './productcard/productcard.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductcardComponent,
    ProductdetailsComponent,
    ProductslistComponent,
    WatchlistComponent,
    OrderslistComponent,
    OrderdetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
		FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
