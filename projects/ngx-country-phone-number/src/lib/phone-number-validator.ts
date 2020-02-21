import { Directive } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[phoneValidateDirective]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppPhoneValidateDirective,
    multi: true
  }]
})
export class AppPhoneValidateDirective implements Validator {
  validate(control: AbstractControl): {[key: string]: any} | null {

    // console.log(document
    //   .getElementById('phone'));
      console.log('---------------', control.parent)
    // const isCheckValidation = Boolean(document
    //   .getElementById('phone')
    //   .getAttribute('validation'));
    console.log('**********************', control)
    if (control.value && control.value.length !== 10) {
      return { phoneNumberInvalid: true }; // return object if the validation is not passed.
    }
    return null; // return null if validation is passed.
  }
}