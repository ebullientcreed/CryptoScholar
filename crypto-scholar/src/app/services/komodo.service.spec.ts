import { TestBed } from '@angular/core/testing';

import { KomodoService } from './komodo.service';

describe('KomodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KomodoService = TestBed.get(KomodoService);
    expect(service).toBeTruthy();
  });
});
