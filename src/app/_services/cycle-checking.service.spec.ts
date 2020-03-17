import { TestBed } from '@angular/core/testing';

import { CycleCheckingService } from './cycle-checking.service';

describe('CycleCheckingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CycleCheckingService = TestBed.get(CycleCheckingService);
    expect(service).toBeTruthy();
  });
});
