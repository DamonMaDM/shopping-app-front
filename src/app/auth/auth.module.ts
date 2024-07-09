import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';



@NgModule({
  declarations: [
    LoginformComponent,
    RegisterformComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
