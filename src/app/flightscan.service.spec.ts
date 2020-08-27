import { TestBed } from '@angular/core/testing';

import { FlightscanService } from './flightscan.service';

describe('FlightscanService', () => {
  let service: FlightscanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightscanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
