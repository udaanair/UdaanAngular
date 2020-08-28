import { Component, OnInit } from '@angular/core';
import { passengerClass } from '../booking/booking.component';
import { Router } from '@angular/router';
import { FlightscanService } from './../flightscan.service';
import { BookingRecord } from './../bookingrecord';
import { CustomerRecord } from '../customerrecord';
import { PnrAfterBooking } from '../pnrafterbooking';
import { SearchParameters } from '../searchparameters';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  loggedin: boolean=false;
  name: string;
  booking: BookingRecord=new BookingRecord();
  customer: CustomerRecord[]=[];

  pnr: PnrAfterBooking=new PnrAfterBooking();

  numberOfPassengers: number;
  s: any;
  selectedSeats: number[]=[];
  
  d: any;
  pass: passengerClass[]=[];
  len: number[]=[];
  
  tf : number;
  sp: SearchParameters=new SearchParameters;

  EachCustomerFare: number;
  totalFare: number;
  fare: number;
  constructor(private service: FlightscanService,private router: Router) {
    if(sessionStorage.getItem("username")!=null)
    {
      this.name=sessionStorage.getItem("username");
      this.loggedin=true;
    }
    this.d= JSON.parse(sessionStorage.getItem('selectedflight'));
    this.selectedSeats = JSON.parse(sessionStorage.getItem("selectedseats"));
    this.pass= JSON.parse(sessionStorage.getItem('passengerlist')); 
    this.numberOfPassengers = Number(sessionStorage.getItem('numberOfPassengers'));

    this.totalFare=Number(sessionStorage.getItem("bookingamount"));
    this.sp= JSON.parse(sessionStorage.getItem('searchparam'));
    this.tf = this.numberOfPassengers * this.totalFare;

    this.booking.cabinClass=sessionStorage.getItem("cabinType");
    //alert(this.booking.cabinClass);

    if(this.booking.cabinClass=="economy")
    {
      this.EachCustomerFare=this.d.initialEconomyfare;
    }
    else
    {
      this.EachCustomerFare=this.d.initialBusinessfare;
    }
    //alert(this.EachCustomerFare);
    this.booking.userId=Number(sessionStorage.getItem("username"));
    //alert(this.booking.userId);
    this.booking.bookingAmount=Number(sessionStorage.getItem("bookingamount"));
   // alert(this.booking.bookingAmount);
    this.booking.flightId=this.d.flightId;
   // alert(this.booking.flightId);

   // alert(this.EachCustomerFare);
    for (let i = 1; i <= this.numberOfPassengers; i++) { 
      this.customer[i-1]=new CustomerRecord();
      this.customer[i-1].bookingFare=this.EachCustomerFare;
     // alert( this.customer[i-1].bookingFare);
      this.customer[i-1].name=this.pass[i].name;
     // alert(this.customer[i-1].name);
      this.customer[i-1].age=this.pass[i].age;
     // alert(this.customer[i-1].age);
      this.customer[i-1].seatNumber=this.selectedSeats[i];
     // alert(this.customer[i-1].seatNumber);
    }

    this.booking.customers=this.customer;
   
    if(sessionStorage.getItem("pnr")=="not set")
    {
    this.service.completeBooking(this.booking).subscribe(
      data=>{
       this.pnr= data;
    alert("your PNR is "+this.pnr.pnrGenerated);
    sessionStorage.setItem("pnr",String(this.pnr.pnrGenerated));
      }
    );
    }
    else{
      this.pnr.pnrGenerated=Number(sessionStorage.getItem("pnr"));
    }
    
    for (let i = 1; i <= this.numberOfPassengers; i++) {   
      this.len.push(i);  }
     // alert(this.pass[2].name);
  }
  logout()
  {
    this.loggedin=false;
    sessionStorage.clear();
    this.router.navigate(['searchflight']);
  }

  ngOnInit(): void {
  }
  

}
