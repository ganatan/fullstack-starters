import { TestBed } from '@angular/core/testing';

import { Behavior } from './behavior';

describe('Behavior', () => {
  let service: Behavior;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Behavior);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
