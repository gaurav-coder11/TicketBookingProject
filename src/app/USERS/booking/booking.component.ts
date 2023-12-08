import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TicketGenerationService } from 'src/app/services/ticket-generation.service'; 
import { Booking } from 'src/app/ticket';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  ticketDetails: Booking[] = [];

  searchText = ''; // Property to store the search text
  items: any[] = []; // Your data array

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

  get filteredItems(): any[] {
    return this.items.filter(item =>
      // Add your custom search logic here, for example:
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  bookYourTickets(id: string) {
  this.router.navigate(['reservation', id]);
}

}
