import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orderdetail/:id', component: OrderdetailsComponent },
  { path: 'products', component: ProductslistComponent },
  { path: 'product/:id', component: ProductdetailsComponent},
  { path: 'createnewproduct', component: CreateproductComponent},
  { path: 'editproduct/:id', component: EditproductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }