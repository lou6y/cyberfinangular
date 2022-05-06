import { TestBed } from '@angular/core/testing';

import { JoBListService } from './jo-blist.service';

describe('JoBListService', () => {
  let service: JoBListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JoBListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
