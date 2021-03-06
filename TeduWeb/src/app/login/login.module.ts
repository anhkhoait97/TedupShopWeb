import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
export const routes: Routes = [
  //login/
  { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule { }
