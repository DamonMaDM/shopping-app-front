import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './auth/loginform/loginform.component';
import { RegisterformComponent } from './auth/registerform/registerform.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CartComponent } from './cart/cart.component';

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
    path: 'product/:id',
    component: ProductdetailsComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
