import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
cimport { SharedModule } from './shared/shared.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
