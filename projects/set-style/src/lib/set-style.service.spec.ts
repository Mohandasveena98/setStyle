import { TestBed } from '@angular/core/testing';

import { SetStyleService } from './set-style.service';

describe('SetStyleService', () => {
  let service: SetStyleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetStyleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
