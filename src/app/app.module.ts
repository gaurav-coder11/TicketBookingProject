import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './ADMIN/home/home.component';
import { MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './pages/signup/signup.component';
import { MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileComponent } from './pages/profile/profile.component';
import { BookingComponent } from './USERS/booking/booking.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { TicketGenerateComponent } from './ADMIN/ticket-generate/ticket-generate.component';
import { TicketDetailsComponent } from './ADMIN/ticket-details/ticket-details.component';
import {MatTableModule} from '@angular/material/table';
import { UpdateTicketDetailsComponent } from './ADMIN/update-ticket-details/update-ticket-details.component';
import { ReservationComponent } from './USERS/reservation/reservation.component';
import { UserHeaderComponent } from './Components/user-header/user-header.component';
import { UserHomeComponent } from './USERS/user-home/user-home.component';
import { UserTicketDetailsComponent } from './USERS/user-ticket-details/user-ticket-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ProfileComponent,
    BookingComponent,
    TicketGenerateComponent,
    TicketDetailsComponent,
    UpdateTicketDetailsComponent,
    ReservationComponent,
    UserHeaderComponent,
    UserHomeComponent,
    UserTicketDetailsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
