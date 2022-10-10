import { TestBed } from '@angular/core/testing';

import { CalcerService } from './calcer.service';

describe('CalcerService', () => {
  let service: CalcerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
