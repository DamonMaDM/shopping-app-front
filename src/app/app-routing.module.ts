import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './auth/loginform/loginform.component';
import { RegisterformComponent } from './auth/registerform/registerform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductslistComponent } from './productslist/productslist.component';
import { HomeComponent } from './home/home.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginregisterGuard } from './guards/loginregister.guard';
import { WatchlistComponent } from './watchlist/watchlist.component';

const routes: Routes = [
  {
    path: '',
    component: LoginformComponent,
    canActivate: [LoginregisterGuard],
  },
  {
    path: 'login',
    component: LoginformComponent,
    canActivate: [LoginregisterGuard],

  },
  {
    path: 'register',
    component: RegisterformComponent,
    canActivate: [LoginregisterGuard],

  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: ProductslistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    component: ProductdetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'order-detail/:id',
    component: OrderdetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'watchlist',
    component: WatchlistComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  },
  {
    path: '**',
    component: LoginformComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
