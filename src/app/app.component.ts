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

  countryList =  [
    {
      id: 1,
      name: 'Costa Rica',
      iso: 'CR',
      code: 506,
<<<<<<< HEAD
      mask: '00-0000-0000'
=======
      mask: '00-000-00'
>>>>>>> 31e29f8f68939b7c3f4e6cd3491c593aac0d5309
    },
    {
      id: 2,
      name: 'Nicaragua',
      iso: 'NI',
      code: 505,
      mask: '0000-0000'
    }
  ];
  ngOnInit() {
    this.formGroup = new FormGroup({
      pn: new FormControl(null, {
        validators: [Validators.required]
      }),
      pn1: new FormControl(null, {
        validators: [Validators.required]
      })
    });

<<<<<<< HEAD
    // this.formGroup.patchValue({ pn:  {
    //   idCountry: 2,
    //   number: 85728298
    // }});
=======
    this.formGroup.patchValue({ pn:
    {
      idCountry: 2,
      number: '85728298'
    }
    });
    
>>>>>>> 31e29f8f68939b7c3f4e6cd3491c593aac0d5309
  }

  guardar() {
    const FORMULARIO: any = this.formGroup;
    console.log(FORMULARIO.value);
  }
}
