import { TestBed } from '@angular/core/testing';

import { Medias } from './medias';

describe('Medias', () => {
  let service: Medias;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medias);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
