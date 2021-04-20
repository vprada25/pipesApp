import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumberComponent } from './pages/number/number.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { OrderComponent } from './pages/order/order.component';
import { CommonsComponent } from './pages/commons/commons.component';



@NgModule({
  declarations: [
    NumberComponent,
    NotCommonsComponent,
    OrderComponent,
    CommonsComponent
  ],
  exports: [
    NumberComponent,
    NotCommonsComponent,
    OrderComponent,
    CommonsComponent
    
  ],
  imports: [
    CommonModule,
    PrimeNgModule
    
  ]
})
export class PipesSalesModule { }
