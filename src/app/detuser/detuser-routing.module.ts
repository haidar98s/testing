import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetuserPage } from './detuser.page';

const routes: Routes = [
  {
    path: '',
    component: DetuserPage
  },

  {
    path: '',
    component: DetuserPage,
    children: [
      {
        path: 'detail',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../users/detail/detail.module').then(m => m.DetailPageModule)
          }
        ]
      },
      {
        path: 'detail1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../users/detail1/detail1.module').then(m => m.Detail1PageModule)
          }
        ]
      },
      {
        path: 'detail2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../users/detail2/detail2.module').then(m => m.Detail2PageModule)
          }
        ]
      },
      {
        path: 'detail3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../users/detail3/detail3.module').then(m => m.Detail3PageModule)
          }
        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetuserPageRoutingModule {}
