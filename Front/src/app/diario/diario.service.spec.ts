import { TestBed } from '@angular/core/testing';

import { DiarioService } from './diario.service';

describe('DiarioService', () => {
  let service: DiarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
