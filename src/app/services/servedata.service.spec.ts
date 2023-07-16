import { TestBed } from '@angular/core/testing';

import { ServeDataService } from './servedata.service';

describe('MockupService', () => {
  let service: ServeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
