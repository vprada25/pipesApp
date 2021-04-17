import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberComponent } from './pages/number/number.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { CommonsComponent } from './pages/commons/commons.component';
import { OrderComponent } from './pages/order/order.component';



@NgModule({
  declarations: [
    NumberComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberComponent,
    NotCommonsComponent,
    CommonsComponent,
    OrderComponent

  ]
})
export class PipesSalesModule { }
