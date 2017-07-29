import { TestBed, inject } from '@angular/core/testing';

import { FirebaseSchoolService } from './firebase-school.service';

describe('FirebaseSchoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseSchoolService]
    });
  });

  it('should be created', inject([FirebaseSchoolService], (service: FirebaseSchoolService) => {
    expect(service).toBeTruthy();
  }));
});
