import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl, NG_VALIDATORS } from '@angular/forms';
import { CountryModel } from './country.model';
import { PhoneNumberModel } from './phone-number.model';
import { noop } from 'rxjs';
import * as StringMask from 'string-mask';
import extractNumbers from './only-numbers';
import { phoneNumberValidator } from './ngx-country-phone-number.validator';
// import RandExp from './randexp';

declare var $: any;
@Component({
  selector: "ngx-country-phone-number",
  templateUrl: './ngx-country-phone-number.component.html',
  styleUrls: ['./ngx-country-phone-number.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxCountryPhoneNumberComponent),
      multi: true
    },
    // {
    //   provide: NG_VALIDATORS,
    //   useValue: phoneNumberValidator,
    //   multi: true,
    //    deps: [[new Optional(), Location]]
    // }
  ]
})
export class NgxCountryPhoneNumberComponent implements OnInit {
  @Input() maxLength = 8;
  @Input() countryList: Array<CountryModel>;
  @Input() placeholder = '';
  @Input() placeholderSearch = 'Search';
  @Input() selectedCountry: CountryModel = null;
  @Input() phoneValidation = true;
  @Input() id = 'phone';
  value = '';
  countrySearchText = '';
  phoneNumber: PhoneNumberModel;
  defaultCountryList: Array<CountryModel>;
  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  public ngControl: NgControl;

  constructor() {}

  ngOnInit() {
    this.defaultCountryList = this.countryList;
  }

  writeValue(newPhoneModel: any) {
    if (!newPhoneModel) {
      return;
    }

    if (newPhoneModel.idCountry) {
      this.phoneNumber = newPhoneModel;
      this.value = newPhoneModel.number;
      this.selectedCountry = this.countryList.find(
        item => item.id === newPhoneModel.idCountry
      );
      const formatter = new StringMask(this.selectedCountry.mask);
      this.value = formatter.apply(this.phoneNumber.number).toString(); // +55 (31) 2222-2222
      this.maxLength = this.selectedCountry.mask.length;
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

  onPhoneNumberChange(newValue) {
    this.value = newValue;
    this.phoneNumberValue();
  }

  phoneNumberValue() {
    try {
      if (this.selectedCountry && this.value) {
        this.phoneNumber = {
          idCountry: this.selectedCountry.id,
          number: this.value
        };

        const formatter = new StringMask(this.selectedCountry.mask);
        this.value = formatter.apply(
          extractNumbers(this.phoneNumber.number, null)
        );
        this.maxLength = this.selectedCountry.mask.length;
      } else {
        this.phoneNumber = null;
      }
      this.onChange(this.phoneNumber);
    } catch (error) {}
  }

  onCountrySelect(event: any, country: CountryModel): void {
    this.selectedCountry = country;
    this.placeholder = country.mask;
    this.phoneNumberValue();
  }

  searchCountry() {
    if (this.countrySearchText && this.defaultCountryList) {
      this.countryList = this.defaultCountryList.filter(
        item =>
          item.name
            .toString()
            .toLowerCase()
            .startsWith(this.countrySearchText.toLowerCase()) ||
          item.name
            .toString()
            .toLowerCase()
            .endsWith(this.countrySearchText.toLowerCase()) ||
          item.name
            .toString()
            .toLowerCase()
            .includes(this.countrySearchText.toLowerCase()) ||
          item.code
            .toString()
            .toLowerCase()
            .startsWith(this.countrySearchText.toLowerCase()) ||
          item.code
            .toString()
            .toLowerCase()
            .endsWith(this.countrySearchText.toLowerCase()) ||
          item.code
            .toString()
            .toLowerCase()
            .includes(this.countrySearchText.toLowerCase()) ||
          item.iso
            .toString()
            .toLowerCase()
            .startsWith(this.countrySearchText.toLowerCase()) ||
          item.iso
            .toString()
            .toLowerCase()
            .endsWith(this.countrySearchText.toLowerCase()) ||
          item.iso
            .toString()
            .toLowerCase()
            .includes(this.countrySearchText.toLowerCase())
      );
    } else {
      this.countryList = this.defaultCountryList;
    }
  }

  onInputKeyPress(event: KeyboardEvent): void {
    const allowedChars = /[0-9]/;
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
      event.preventDefault();
    }
  }
}
