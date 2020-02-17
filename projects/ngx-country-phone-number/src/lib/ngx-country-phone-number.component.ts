import { Component, OnInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: "ngx-country-phone-number",
  templateUrl: './ngx-country-phone-number.component.html',
  styleUrls: ['./ngx-country-phone-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxCountryPhoneNumberComponent),
      multi: true
    }
  ]
})
export class NgxCountryPhoneNumberComponent
  implements ControlValueAccessor, OnInit {
  public allCountries = [
    {
      name: 'Costa Rica',
      iso: 'CR',
      code: 506
    },
    {
      name: 'Nicaragua',
      iso: 'NI',
      code: 505
    },
    {
      name: 'Costa Rica',
      iso: 'CR',
      code: 506
    },
    {
      name: 'Nicaragua',
      iso: 'NI',
      code: 505
    },
    {
      name: 'Costa Rica',
      iso: 'CR',
      code: 506
    },
    {
      name: 'Nicaragua',
      iso: 'NI',
      code: 505
    },
    {
      name: 'Costa Rica',
      iso: 'CR',
      code: 506
    },
    {
      name: 'Nicaragua',
      iso: 'NI',
      code: 505
    }
  ];

  writeValue(obj: any): void {
    //throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    //throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    //throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    //throw new Error('Method not implemented.');
  }

  constructor() {}

  ngOnInit() {}
}
