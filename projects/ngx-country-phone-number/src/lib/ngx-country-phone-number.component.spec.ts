import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCountryPhoneNumberComponent } from './ngx-country-phone-number.component';

describe('NgxCountryPhoneNumberComponent', () => {
  let component: NgxCountryPhoneNumberComponent;
  let fixture: ComponentFixture<NgxCountryPhoneNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxCountryPhoneNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCountryPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
