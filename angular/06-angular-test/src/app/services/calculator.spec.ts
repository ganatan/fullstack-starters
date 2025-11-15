import { TestBed } from '@angular/core/testing';

import { Calculator } from './calculator';

describe('Calculator', () => {
  let service: Calculator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Calculator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add(2, 3) should return 5', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });

  it('add(-10, 20) should return 10', () => {
    const result = service.add(-10, 20);
    expect(result).toBe(10);
  });

});
