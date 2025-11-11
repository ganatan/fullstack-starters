import { TestBed } from '@angular/core/testing';

import { RxObservable } from './rx-observable';

describe('Behavior', () => {
  let service: RxObservable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxObservable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
