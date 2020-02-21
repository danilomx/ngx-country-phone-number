import { NgModule } from '@angular/core';
import { NgxCountryPhoneNumberComponent } from './ngx-country-phone-number.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppPhoneValidateDirective } from './phone-number-validator';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [NgxCountryPhoneNumberComponent, AppPhoneValidateDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(options)
  ],
  // providers: [
  //   {
  //     provide: NG_VALIDATORS,
  //     useExisting: AppPhoneValidateDirective,
  //     multi: true
  //   }
  // ],
  exports: [NgxCountryPhoneNumberComponent]
})
export class NgxCountryPhoneNumberModule { }
