import { TestBed } from '@angular/core/testing';

import { BobToursService } from './bob-tours.service';

describe('BobToursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BobToursService = TestBed.get(BobToursService);
    expect(service).toBeTruthy();
  });
});
