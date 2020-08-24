//Import thư viện routes để sử dụng được định tuyến
import { Routes } from '@angular/router'

export const appRoutes: Routes = [
    //pathMatch = full, thì khi nhập đủ tên route trên url mới định tuyến đúng
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)}
]