import { TestBed } from '@angular/core/testing';

import { Rx } from './rx';

describe('Behavior', () => {
  let service: Rx;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rx);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
