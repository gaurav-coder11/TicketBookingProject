import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TicketGenerationService } from 'src/app/services/ticket-generation.service'; 
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-generate',
  templateUrl: './ticket-generate.component.html',
  styleUrls: ['./ticket-generate.component.css']
})
export class TicketGenerateComponent implements OnInit{
  public ticketGenerate: any = {
    busName: '',
    destination: '',
    fromDest: '',
    toDest: '',
    date: '',
    price: '',
    seats: '',
  };

  constructor(
    private ticketService: TicketGenerationService, 
    private _skackbar: MatSnackBar ,private router:Router){}
  ngOnInit(): void {}

ticketGeneration(){
  console.log(this.ticketGenerate);

  if (this.ticketGenerate.busName == '' || this.ticketGenerate.busName == null) {
    this._skackbar.open('busname are required !!', '', { duration: 2000 });
    return;
  }
  if (this.ticketGenerate.destination == '' || this.ticketGenerate.destination == null) {
    this._skackbar.open('destination are required !!', '', { duration: 2000 });
    return;
  }
  if (this.ticketGenerate.fromDest == '' || this.ticketGenerate.fromDest == null) {
    this._skackbar.open('from destination are required !!', '', { duration: 2000 });
    return;
  }
  if (this.ticketGenerate.toDest == '' || this.ticketGenerate.toDest == null) {
    this._skackbar.open('to destination are required !!', '', { duration: 2000 });
    return;
  }
  if (this.ticketGenerate.price == '' || this.ticketGenerate.price == null) {
    this._skackbar.open('price are required !!', '', { duration: 2000 });
    return;
  }
  if (this.ticketGenerate.seats == '' || this.ticketGenerate.seats == null) {
    this._skackbar.open('seats are required !!', '', { duration: 2000 });
    return;
  }

      // send data to backend
    this.ticketService.generateTicket(this.ticketGenerate).subscribe(
      (data) => {
        // success
        console.log(data);
        swal.fire('successfully Register','',);
        this.router.navigate(['/ticketdetails'])
      },
      (error) => {
        // error
        console.log(error);
        swal.fire('Something went wrong');
      }
    );   
  }

}
