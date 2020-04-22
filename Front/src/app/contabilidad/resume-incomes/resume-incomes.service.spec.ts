import { TestBed } from '@angular/core/testing';

import { ResumeIncomesService } from './resume-incomes.service';

describe('ResumeIncomesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResumeIncomesService = TestBed.get(ResumeIncomesService);
    expect(service).toBeTruthy();
  });
});
