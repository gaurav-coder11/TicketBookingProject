import { TestBed } from '@angular/core/testing';

import { TicketGenerationService } from './ticket-generation.service';

describe('TicketGenerationService', () => {
  let service: TicketGenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketGenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
