import { Component, OnInit } from '@angular/core';
import { TicketGenerationService } from 'src/app/services/ticket-generation.service'; 
import { Booking } from 'src/app/ticket';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-ticket-details',
  templateUrl: './user-ticket-details.component.html',
  styleUrls: ['./user-ticket-details.component.css']
})
export class UserTicketDetailsComponent implements OnInit{
  ticketDetails: Booking[] = [];
  constructor(
    private ticketService: TicketGenerationService, 
  ){}
  ngOnInit(): void {

    this.loadData();
    this.ticketService.getUserTicketDetails().subscribe((data) => {
      this.ticketDetails = data;
    });

  }

  loadData() {
    this.ticketService.getUserTicketDetails().subscribe(
      (data) => {
        this.ticketDetails = data;
      },
      (error) => {
        console.error('Error fetching ticket details:', error);
      }
    );
  }

  deleteTicket(id: string) {
    this.ticketService.deleteUserTicket(id)
      .subscribe(
        () => {
          console.log('Ticket deleted successfully');
          Swal.fire('Ticket Cancle Successfully')
          this.loadData();
        },
        (error) => {
          console.error('Error deleting ticket:', error);
          // Add appropriate error handling, such as showing an alert to the user
        }
      );
  }

}
