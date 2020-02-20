import { NgModule } from '@angular/core';
import { NgxCountryPhoneNumberComponent } from './ngx-country-phone-number.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import {IMaskModule} from 'angular-imask';
=======
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;
>>>>>>> 31e29f8f68939b7c3f4e6cd3491c593aac0d5309

@NgModule({
  declarations: [NgxCountryPhoneNumberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    IMaskModule
=======
    NgxMaskModule.forRoot(options)
>>>>>>> 31e29f8f68939b7c3f4e6cd3491c593aac0d5309
  ],
  exports: [NgxCountryPhoneNumberComponent]
})
export class NgxCountryPhoneNumberModule { }
