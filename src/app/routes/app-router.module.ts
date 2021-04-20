import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from '../pipes-sales/pages/commons/basic.components';
import { NotCommonsComponent } from '../pipes-sales/pages/not-commons/not-commons.component';
import { NumberComponent } from '../pipes-sales/pages/number/number.component';
import { OrderComponent } from '../pipes-sales/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full'
  },
  {
    path: 'number',
    component: NumberComponent

  },
  {
    path: 'notCommons',
    component: NotCommonsComponent

  },
  {
    path: 'order',
    component: OrderComponent

  },
  {
    path: '**',
    redirectTo: ''

  }

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
