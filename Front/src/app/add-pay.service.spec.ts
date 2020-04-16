import { TestBed } from '@angular/core/testing';

import { AddPayService } from './add-pay.service';

describe('AddPayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddPayService = TestBed.get(AddPayService);
    expect(service).toBeTruthy();
  });
});
