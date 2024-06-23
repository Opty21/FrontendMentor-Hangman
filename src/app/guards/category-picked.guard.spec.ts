import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { categoryPickedGuard } from './category-picked.guard';

describe('categoryPickedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => categoryPickedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
