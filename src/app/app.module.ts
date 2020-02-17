import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxCountryPhoneNumberModule } from '../../projects/ngx-country-phone-number/src/lib/ngx-country-phone-number.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxCountryPhoneNumberModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
