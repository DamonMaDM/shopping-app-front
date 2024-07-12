import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './auth/loginform/loginform.component';
import { RegisterformComponent } from './auth/registerform/registerform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminModule } from './admin/admin.module';
import { ProductslistComponent } from './productslist/productslist.component';

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
    component: OrderslistComponent,
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
    canActivate: [AuthGuard],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
