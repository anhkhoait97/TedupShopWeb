import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module'
import { mainRoutes } from './main.routes';
@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
