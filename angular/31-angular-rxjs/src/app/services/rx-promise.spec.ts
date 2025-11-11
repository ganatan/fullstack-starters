import { TestBed } from '@angular/core/testing';

import { RxPromise } from './rx-promise';

describe('Behavior', () => {
  let service: RxPromise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxPromise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
