import { TestBed } from '@angular/core/testing';

import { ownerService } from './owner.service';

describe('ownerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ownerService = TestBed.get(ownerService);
    expect(service).toBeTruthy();
  });
});
