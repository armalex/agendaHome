import { TestBed, inject } from '@angular/core/testing';

import { JoursService } from './jours.service';

describe('JoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoursService]
    });
  });

  it('should ...', inject([JoursService], (service: JoursService) => {
    expect(service).toBeTruthy();
  }));
});
