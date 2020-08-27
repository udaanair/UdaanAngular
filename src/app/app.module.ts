import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { CancelFlightComponent } from './cancel-flight/cancel-flight.component';

@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    SeatSelectionComponent,
    SearchFlightComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    CustomerBookingComponent,
    AddFlightComponent,
    PaymentComponent,
    TicketComponent,
    CancelFlightComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
