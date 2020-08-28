import { SearchParameters } from './searchparameters';
import { SeatsAvailable } from './seatsavailable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailableSeats } from './availableseats';
import { BookingRecord } from './bookingrecord';
import { PnrAfterBooking } from './pnrafterbooking';
import { addNewFlight } from './addnewflight';
import { AdminLogin } from './adminlogin';
import { AdminLoginResult } from './adminloginresult';
import { addUser } from './addUser';
import { IdForFlightCancel } from './idForFlightCancel';
import { UserLogin } from './userlogin';
import { UserLoginResult } from './userloginresult';

@Injectable({
  providedIn: 'root'
})
export class FlightscanService {

  constructor(private http: HttpClient) { }

  fetchflights(sp: SearchParameters){
      const url="http://localhost:8080/getFlights.api";
      return this.http.post<SearchParameters>(url,sp);
  }

  fetchAvailableSeats(sa: SeatsAvailable):Observable<AvailableSeats>
  {
    const url="http://localhost:8080/availableseats.api";
    return this.http.post<AvailableSeats>(url,sa);
  }

  completeBooking(br: BookingRecord):Observable<PnrAfterBooking>
  {
    const url="http://localhost:8080/addBooking.api";
    return this.http.post<PnrAfterBooking>(url,br);
  }

  insertNewFlight(anf: addNewFlight)
  {
    const url="http://localhost:8080/addflight.api";
    return this.http.post(url,anf);
  }

  adminLoginVerification(al: AdminLogin):Observable<AdminLoginResult>
  {
    const url="http://localhost:8080/adminLogin.api";
    return this.http.post<AdminLoginResult>(url,al);
  }

  userLoginVerification(al: UserLogin):Observable<UserLoginResult>
  {
    const url="http://localhost:8080/userLogin.api";
    return this.http.post<UserLoginResult>(url,al);
  }

  fetchAllFlights()
  {
    return this.http.get("http://localhost:8080/fetchFlights.api");
  }

  insertNewUser(au: addUser)
  {
    const url="http://localhost:8080/addUser.api";
    return this.http.post(url,au);
  }

  cancelflight(iffc: IdForFlightCancel)
  {
    const url="http://localhost:8080/cancelFlight.api";
    return this.http.post(url,iffc);
  }
}
