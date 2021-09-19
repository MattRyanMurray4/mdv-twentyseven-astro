import { TestBed } from '@angular/core/testing';

import { CosmonautsService } from './cosmonauts.service';

describe('CosmonautsService', () => {
  let service: CosmonautsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CosmonautsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
