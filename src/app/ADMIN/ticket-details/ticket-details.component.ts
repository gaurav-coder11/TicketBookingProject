import { Component, OnInit } from '@angular/core';
import { TicketGenerationService } from 'src/app/services/ticket-generation.service'; 
import { Booking } from 'src/app/ticket';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit{
  // ticketDetails: Observable<Booking[]>;
  ticketDetails: Booking[] = [];

  //  ticketDetails: String []=['id','busName','destination','fromDest','toDest','date','price','seats'] ;
  
  constructor(
    private ticketService: TicketGenerationService, 
    private http:HttpClient,
    private router: Router
  ){}
  ngOnInit(): void {
    this.loadData();

    
    this.ticketService.getBookingList().subscribe((data) => {
      this.ticketDetails = data;
    });
  }
  loadData() {
    this.ticketService.getBookingList().subscribe(
      (data) => {
        this.ticketDetails = data;
      },
      (error) => {
        console.error('Error fetching ticket details:', error);
      }
    );
  }
onSubmit(){}

updateTicket(id: string) {
  this.router.navigate(['updateTicket', id]);
}

  deleteTicket(id: string) {
    this.ticketService.deleteTicket(id)
      .subscribe(
        () => {
          console.log('Ticket deleted successfully');
          this.loadData();
        },
        (error) => {
          console.error('Error deleting ticket:', error);
          // Add appropriate error handling, such as showing an alert to the user
        }
      );
  }
}
