import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketGenerationService {

  constructor(private http:HttpClient) { }
  //add user
  public generateTicket(ticketGenerate:any){
    return this.http.post(`${baseUrl}/bus/save`,ticketGenerate)
  }
  
  //get users
  getBookingList(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${baseUrl}/bus/tDetails`);
  }

  //update tickets
  updateBooking(id: string, value: any): Observable<Object> {
    return this.http.put(`${baseUrl}/bus/update/${id}`, value);
  }
  // Delete ticket by ID
  deleteTicket(ticketId: string): Observable<any> {
    return this.http.delete(`${baseUrl}/bus/${ticketId}`);
  }

  //get ticket by id
  getTicketById(ticketId: string): Observable<Booking> {
    return this.http.get<Booking>(`${baseUrl}/bus/${ticketId}`);
  }

  //update tickets
  ticketReservation(value: any): Observable<Object> {
    return this.http.post(`${baseUrl}/api/ticket-reservations/`, value);
  }

  //get users
  getUserTicketDetails(): Observable<Booking[]> {
    return this.http.get<Booking[]>(`${baseUrl}/api/ticket-reservations/`);
  }
  
  deleteUserTicket(ticketId: string): Observable<any> {
    return this.http.delete(`${baseUrl}/api/ticket-reservations/${ticketId}`);
  }
}
