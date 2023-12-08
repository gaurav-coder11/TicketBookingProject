import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketGenerationService } from 'src/app/services/ticket-generation.service'; 
import swal from 'sweetalert2';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  ticketId: string;
  ticketDetails: Booking;

  // counter: number = 1;

  // increment() {
  //   if (this.counter < 5) {
  //     this.counter++;
  //   } else {
  //     swal.fire('Counter cannot exceed 5');
  //   }
  // }

  // decrement() {
  //   if (this.counter > 1) {
  //     this.counter--;
  //   } else {
  //     swal.fire('Counter cannot go below 1');
  //   }
  // }
constructor(
  private route: ActivatedRoute,
  private router: Router,
  private tbookService:TicketGenerationService,
  ){}


  ngOnInit() {
    this.ticketDetails = new Booking();
  
    this.ticketId = this.route.snapshot.params['id'];

    this.tbookService.getTicketById(this.ticketId)
      .subscribe(data => {
        console.log(data)
        this.ticketDetails = data;
      }, error => console.log(error));
    
  }
  updateTickets() {
    this.tbookService.ticketReservation(this.ticketDetails)
      .subscribe(data => {
        console.log(data);
        this.ticketDetails = new Booking();
        swal.fire('Ticket Booked Succesfully')
        this.router.navigate(['/userTicketDetails'])
      }, error => console.log(error));
  }
  reservTicket(){

    if(this.ticketDetails.userName ==null || this.ticketDetails.userName ==''){
      swal.fire('please enter your name')
    }
    if(this.ticketDetails.userName ==null || this.ticketDetails.userName ==''){
      swal.fire('please enter mobile number')
    }
    if(this.ticketDetails.userName ==null || this.ticketDetails.userName ==''){
      swal.fire('please enter email')
    }
    this.updateTickets();
  }
}
