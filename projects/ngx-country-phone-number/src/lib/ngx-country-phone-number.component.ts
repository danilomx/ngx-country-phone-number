import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';
import { CountryModel } from './country.model';
import { PhoneNumberModel } from './phoneNumber.model';
import { noop } from 'rxjs';

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
  @Input() maxLength = 8;
  @Input() countryList: Array<CountryModel>;
  phone: PhoneNumberModel;

  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  public ngControl: NgControl;

  writeValue(newPhoneModel: any) {
    if (newPhoneModel) {
      this.phone = newPhoneModel;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  inputBlur($event) {
    this.onTouched();
  }
  constructor() {}

  ngOnInit() {}

  onChanged($event) {
   console.log($event);
  }

  public onCountrySelect(country: CountryModel): void {
    console.log(country);
  }

  public onInputKeyPress(event: KeyboardEvent): void {
    const allowedChars = /[0-9\+\-\ ]/;
    const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
    const allowedOtherKeys = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'Home',
      'End',
      'Insert',
      'Delete',
      'Backspace'
    ];

    if (
      !allowedChars.test(event.key) &&
      !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
      !allowedOtherKeys.includes(event.key)
    ) {

      console.log()
      event.preventDefault();
    }
  }
}
