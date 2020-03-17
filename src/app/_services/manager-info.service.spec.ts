import { TestBed } from '@angular/core/testing';

import { ManagerInfoService } from './manager-info.service';

describe('ManagerInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerInfoService = TestBed.get(ManagerInfoService);
    expect(service).toBeTruthy();
  });
});
