import { TestBed, inject } from '@angular/core/testing';

import { MoisService } from './mois.service';

describe('MonthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoisService]
    });
  });

  it('should ...', inject([MoisService], (service: MoisService) => {
    expect(service).toBeTruthy();
  }));
});
