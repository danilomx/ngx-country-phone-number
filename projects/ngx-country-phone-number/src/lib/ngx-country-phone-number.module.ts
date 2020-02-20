import { NgModule } from '@angular/core';
import { NgxCountryPhoneNumberComponent } from './ngx-country-phone-number.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [NgxCountryPhoneNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [NgxCountryPhoneNumberComponent]
})
export class NgxCountryPhoneNumberModule { }
