import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketDetailsComponent } from './user-ticket-details.component';

describe('UserTicketDetailsComponent', () => {
  let component: UserTicketDetailsComponent;
  let fixture: ComponentFixture<UserTicketDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserTicketDetailsComponent]
    });
    fixture = TestBed.createComponent(UserTicketDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
