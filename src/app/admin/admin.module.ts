import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';



@NgModule({
  declarations: [
    CreateproductComponent,
    EditproductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
