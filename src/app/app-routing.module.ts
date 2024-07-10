import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginformComponent } from './auth/loginform/loginform.component';

const routes: Routes = [
  {
    path: '',
    component: LoginformComponent,
  },
  {
    path: 'login',
    component: LoginformComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
