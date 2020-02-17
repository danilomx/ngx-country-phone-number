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
      code: 506
    },
    {
      id: 2,
      name: 'Nicaragua',
      iso: 'NI',
      code: 505
    }
  ];
  ngOnInit() {
    this.formGroup = new FormGroup({
      FileUp: new FormControl(null, {
        validators: [Validators.required]
      })
    });

  }

  guardar() {
    const FORMULARIO: any = this.formGroup;
    console.log(FORMULARIO.value);
  }
}
