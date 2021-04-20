import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './routes/app-router.module';
import { PipesSalesModule } from './pipes-sales/pipesSales.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    PipesSalesModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
