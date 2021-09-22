import { TestBed } from '@angular/core/testing';

import { FullNorthwindCustomersService } from './full-northwind-customers.service';

describe('FullNorthwindCustomersService', () => {
  let service: FullNorthwindCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullNorthwindCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
