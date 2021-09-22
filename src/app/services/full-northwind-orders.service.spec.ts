import { TestBed } from '@angular/core/testing';

import { FullNorthwindOrdersService } from './full-northwind-orders.service';

describe('FullNorthwindOrdersService', () => {
  let service: FullNorthwindOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FullNorthwindOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
