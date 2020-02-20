import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngxcountryphonenumber';
  formGroup: FormGroup;
  telefono = {
    idCountry: null,
    number: null
  };
  countryList =  [
    {
      id: 1,
      name: 'Costa Rica',
      iso: 'CR',
      code: 506,
      mask: '00-000-00',
      icon: 'iti__flag iti__us'
    },
    {
      id: 2,
      name: 'Nicaragua',
      iso: 'NI',
      code: 505,
      mask: '0000-0000',
      icon: 'iti__flag iti__ni'
    },
    {
      id: 3,
      name: 'Panama',
      iso: 'NI',
      code: 505,
      mask: '00000000',
      icon: 'iti__flag iti__pa'
    }
  ];
  ngOnInit() {
    this.formGroup = new FormGroup({
      // pn: new FormControl(null, {
      //   validators: [Validators.required]
      // }),
      pn1: new FormControl(this.telefono, {
        validators: [Validators.required]
      })
    });

    // this.formGroup.patchValue(
    //   {
    //     pn:
    //     {
    //       idCountry: 2,
    //       number: '85728298'
    //     },
    //     pn1:
    //     {
    //       idCountry: 1,
    //       number: '85728298'
    //     }
    // });

    // this.telefono = {
    //   idCountry: 1,
    //   number: '111111'
    // };

    // this.formGroup.patchValue(
    //   {
    //     pn1: this.telefono
    // });

  }

  guardar() {
    const FORMULARIO: any = this.formGroup;
    console.log(FORMULARIO.value);
  }
}
