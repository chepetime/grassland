import { TestBed } from '@angular/core/testing';

import { GrasslandLibService } from './grassland-lib.service';

describe('GrasslandLibService', () => {
  let service: GrasslandLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrasslandLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
