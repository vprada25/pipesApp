import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './routes/app-router.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
