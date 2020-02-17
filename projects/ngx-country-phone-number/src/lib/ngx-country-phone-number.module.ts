import { NgModule } from '@angular/core';
import { NgxCountryPhoneNumberComponent } from './ngx-country-phone-number.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxCountryPhoneNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [NgxCountryPhoneNumberComponent]
})
export class NgxCountryPhoneNumberModule { }
