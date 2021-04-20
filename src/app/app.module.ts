import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es-CO';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { LOCALE_ID, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './routes/app-router.module';
import { PipesSalesModule } from './pipes-sales/pipesSales.module';

registerLocaleData(localeEs);

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
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
