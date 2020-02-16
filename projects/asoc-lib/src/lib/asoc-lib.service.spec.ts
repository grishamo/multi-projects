import { TestBed } from '@angular/core/testing';

import { AsocLibService } from './asoc-lib.service';

describe('AsocLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AsocLibService = TestBed.get(AsocLibService);
    expect(service).toBeTruthy();
  });
});
