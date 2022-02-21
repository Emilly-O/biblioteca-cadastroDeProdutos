import { TestBed } from '@angular/core/testing';

import { DoceService } from './doce.service';

describe('DoceDService', () => {
  let service: DoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
