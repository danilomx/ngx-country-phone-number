import { FormControl } from '@angular/forms';

export const phoneNumberValidator = (control: FormControl) => {
  //   console.log(control);
  //   console.log(document.getElementById('phone'))
  //   console.log(document.getElementById('phone').getAttribute("ng-reflect-phone-validation"));
  const isCheckValidation = Boolean(document
    .getElementById('phone')
    .getAttribute('validation'));
 const error = { validatePhoneNumber: { valid: false } };
  console.log(isCheckValidation);
  if (isCheckValidation === true) {

    if (control.value) {

        console.log('------------');
        return error;
    }
    //     const isRequired = control.errors && control.errors.required === true;
    //    
    //     let number: lpn.PhoneNumber;
    //     try {
    //       number = lpn.PhoneNumberUtil.getInstance().parse(
    //         control.value.number,
    //         control.value.countryCode
    //       );
    //     } catch (e) {
    //       if (isRequired === true) {
    //         return error;
    //       }
    //     }
    //     if (control.value) {
    //       if (!number) {
    //         return error;
    //       } else {
    //         if (
    //           !lpn.PhoneNumberUtil.getInstance().isValidNumberForRegion(
    //             number,
    //             control.value.countryCode
    //           )
    //         ) {
    //           return error;
    //         }
    //       }
    //     }
  } else if (isCheckValidation === false) {
    control.clearValidators();
  }
  return false;
};
