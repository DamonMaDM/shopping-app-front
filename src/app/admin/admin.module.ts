import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { OrderslistComponent } from './orderslist/orderslist.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { ProductslistComponent } from './productslist/productslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { HomeComponent } from './home/home.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateproductComponent,
    EditproductComponent,
    OrderslistComponent,
    OrderdetailsComponent,
    ProductslistComponent,
    ProductdetailsComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
