import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketGenerateComponent } from './ticket-generate.component';

describe('TicketGenerateComponent', () => {
  let component: TicketGenerateComponent;
  let fixture: ComponentFixture<TicketGenerateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketGenerateComponent]
    });
    fixture = TestBed.createComponent(TicketGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
