import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumberComponent } from './pages/number/number.component';
import { NotCommonsComponent } from './pages/not-commons/not-commons.component';
import { OrderComponent } from './pages/order/order.component';
import { BasicComponent } from './pages/commons/basic.components';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    NumberComponent,
    NotCommonsComponent,
    OrderComponent,
    BasicComponent
  ],
  exports: [
    NumberComponent,
    NotCommonsComponent,
    OrderComponent,
    BasicComponent
    
  ],
  imports: [
    CommonModule,
    PrimeNgModule
    
  ]
})
export class PipesSalesModule { }
