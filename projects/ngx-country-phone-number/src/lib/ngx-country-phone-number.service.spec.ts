import { TestBed } from '@angular/core/testing';

import { NgxCountryPhoneNumberService } from './ngx-country-phone-number.service';

describe('NgxCountryPhoneNumberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxCountryPhoneNumberService = TestBed.get(NgxCountryPhoneNumberService);
    expect(service).toBeTruthy();
  });
});
