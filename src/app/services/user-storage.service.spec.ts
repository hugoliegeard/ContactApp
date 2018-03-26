import { TestBed, inject } from '@angular/core/testing';

import { UserStorageService } from './user-storage.service';

describe('UserStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserStorageService]
    });
  });

  it('should be created', inject([UserStorageService], (service: UserStorageService) => {
    expect(service).toBeTruthy();
  }));
});
