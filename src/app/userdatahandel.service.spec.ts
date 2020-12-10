import { TestBed } from '@angular/core/testing';

import { UserdatahandelService } from './userdatahandel.service';

describe('UserdatahandelService', () => {
  let service: UserdatahandelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdatahandelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
