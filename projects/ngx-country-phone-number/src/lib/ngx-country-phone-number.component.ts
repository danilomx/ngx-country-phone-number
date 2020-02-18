import {
  Component,
  OnInit,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges,
  OnChanges,
  Output,
  Injector
} from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  NgControl
} from "@angular/forms";
import { CountryModel } from "./country.model";
import { PhoneNumberModel } from "./phoneNumber.model";
import { noop } from "rxjs";

@Component({
  selector: "ngx-country-phone-number",
  templateUrl: "./ngx-country-phone-number.component.html",
  styleUrls: ["./ngx-country-phone-number.component.scss"],
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
  phoneNumber: PhoneNumberModel;
  selectedCountry: CountryModel;
  value = "";
  mask = "(000) 000-0000";
  private onTouched: () => void = noop;
  private onChange: (_: any) => void = noop;

  public ngControl: NgControl;

  constructor(
    private inj: Injector,
    private host: ElementRef<HTMLInputElement>
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: deprecation
    this.ngControl = this.inj.get(NgControl);
  }

  writeValue(newPhoneModel: any) {
    if (newPhoneModel) {
      this.phoneNumber = newPhoneModel;
      this.value = newPhoneModel.number;

      this.selectedCountry = this.countryList.find(item=>item.id === newPhoneModel.idCountry)
      this.mask = this.selectedCountry.mask;
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

  onPhoneNumberChange() {
    this.phoneNumberValue();
  }

  phoneNumberValue() {
    try {
      if (this.selectedCountry && this.value) {
        this.phoneNumber = {
          idCountry: this.selectedCountry.id,
          number: this.value
        }
      } else {
        this.phoneNumber = null;
      }
      this.onChange(this.phoneNumber);
    } catch (error) {}
  }

  onCountrySelect(country: CountryModel): void {
    this.selectedCountry = country;

    this.mask = country.mask;
    this.phoneNumberValue();
  }

  onInputKeyPress(event: KeyboardEvent): void {
    const allowedChars = /[0-9\+\-\ ]/;
    const allowedCtrlChars = /[axcv]/; // Allows copy-pasting
    const allowedOtherKeys = [
      "ArrowLeft",
      "ArrowUp",
      "ArrowRight",
      "ArrowDown",
      "Home",
      "End",
      "Insert",
      "Delete",
      "Backspace"
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
