import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerBookingComponent } from './customer-booking/customer-booking.component';
import { BookingComponent } from './booking/booking.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketComponent } from './ticket/ticket.component';
import { CancelFlightComponent } from './cancel-flight/cancel-flight.component';

const routes: Routes = [
  {path:'', redirectTo:'/searchflight', pathMatch:'full'},
  {path:'searchflight', component: SearchFlightComponent},
  {path:'login', component: UserLoginComponent},
  {path:'register', component: UserRegistrationComponent},
  {path:'adminlogin', component: AdminLoginComponent},
  {path:'customerbooking', component: CustomerBookingComponent},
  {path:'booking', component: BookingComponent},
  {path:'addflight', component: AddFlightComponent},
  {path:'ticket', component: TicketComponent},
  {path:'payment', component: PaymentComponent},
  {path:'showandcancel', component: CancelFlightComponent},
  {path: '**', component: SearchFlightComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
