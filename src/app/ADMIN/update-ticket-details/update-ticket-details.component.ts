import { Component , OnInit} from '@angular/core';
import { Booking } from 'src/app/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketGenerationService } from 'src/app/services/ticket-generation.service'; 
import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-ticket-details',
  templateUrl: './update-ticket-details.component.html',
  styleUrls: ['./update-ticket-details.component.css']
})
export class UpdateTicketDetailsComponent implements OnInit{
  ticketId: string;
  ticketDetails: Booking;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ticketService: TicketGenerationService) { }
  
  ngOnInit() {
    this.ticketDetails = new Booking();
  
    this.ticketId = this.route.snapshot.params['id'];

    this.ticketService.getTicketById(this.ticketId)
      .subscribe(data => {
        console.log(data)
        this.ticketDetails = data;
      }, error => console.log(error));
    
  }
  updateTickets() {
    this.ticketService.updateBooking(this.ticketId, this.ticketDetails)
      .subscribe(data => {
        console.log(data);
        this.ticketDetails = new Booking();
        Swal.fire('Ticket Updated Succesfully')
      }, error => console.log(error));
  }
  
  updateTicket(){
    this.updateTickets();
    this.router.navigate(['/ticketdetails'])
  }
  gotoDetails() {
    this.router.navigate(['/ticketdetails']);
  }
}
