import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ADMIN/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BookingComponent } from './USERS/booking/booking.component';
import { TicketGenerateComponent } from './ADMIN/ticket-generate/ticket-generate.component';
import { TicketDetailsComponent } from './ADMIN/ticket-details/ticket-details.component';
import { UpdateTicketDetailsComponent } from './ADMIN/update-ticket-details/update-ticket-details.component';
import { ReservationComponent } from './USERS/reservation/reservation.component';
import { UserHomeComponent } from './USERS/user-home/user-home.component';
import { UserTicketDetailsComponent } from './USERS/user-ticket-details/user-ticket-details.component';

const routes: Routes = [

  { path: '', redirectTo: 'userHome', pathMatch: 'full' },

  { path:"home", component:HomeComponent, pathMatch:"full",  },

  { path:"userHome", component:UserHomeComponent, pathMatch:"full",  },
  
  { path:"signup", component:SignupComponent, pathMatch:"full", },

  { path:"login", component:LoginComponent, pathMatch:"full",},
  
  { path:"profile", component:ProfileComponent, pathMatch:"full", },

  { path:"booking", component:BookingComponent, pathMatch:"full", },

  { path:"ticketGenerate", component:TicketGenerateComponent, pathMatch:"full", },

  { path:"ticketdetails", component:TicketDetailsComponent, pathMatch:"full", },

  { path:"updateTicket/:id", component:UpdateTicketDetailsComponent, pathMatch:"full", },

  { path:"reservation/:id", component:ReservationComponent, pathMatch:"full", },

  { path:"userTicketDetails", component:UserTicketDetailsComponent, pathMatch:"full", },

  { path:"userHome", component:UserHomeComponent, pathMatch:"full", },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
