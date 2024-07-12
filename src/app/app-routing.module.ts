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

const routes: Routes = [
  {
    path: '',
    component: LoginformComponent,
  },
  {
    path: 'login',
    component: LoginformComponent,
  },
  {
    path: 'regiester',
    component: RegisterformComponent,
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
    path: 'admin/home',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
