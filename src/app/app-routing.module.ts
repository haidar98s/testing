import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
 
const routes: Routes = [
  {
    path: 'members',
    loadChildren: () =>
      import('./tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./users/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'detail1',
    loadChildren: () => import('./users/detail1/detail1.module').then( m => m.Detail1PageModule)
  },
  {
    path: 'detail2',
    loadChildren: () => import('./users/detail2/detail2.module').then( m => m.Detail2PageModule)
  },
  {
    path: 'detail3',
    loadChildren: () => import('./users/detail3/detail3.module').then( m => m.Detail3PageModule)
  },
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}