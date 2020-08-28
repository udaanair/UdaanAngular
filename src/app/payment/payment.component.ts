import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParameters } from '../searchparameters';
import { passengerClass } from '../booking/booking.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  numberOfPassengers: number;
  flightNumber: String;
  d:any;
  Np: number[]=[]; 
  fare: number;
  tf : number;
  sp: SearchParameters=new SearchParameters;
  pass: passengerClass[]=[];
  len: number[]=[];
  selectedSeats: number[]=[];
  constructor(private router: Router) { 

    this.d= JSON.parse(sessionStorage.getItem('selectedflight'));
    this.sp= JSON.parse(sessionStorage.getItem('searchparam'));
    this.selectedSeats = JSON.parse(sessionStorage.getItem("selectedseats"));
    this.fare = Number(sessionStorage.getItem('bookingamount'));
    
    //this.flightNumber= String(sessionStorage.getItem('flightNumber'));
    this.numberOfPassengers = Number(sessionStorage.getItem('numberOfPassengers'));
    this.tf = this.numberOfPassengers * this.fare;
    this.pass= JSON.parse(sessionStorage.getItem('passengerlist')); 
 
    for (let i = 1; i <= this.numberOfPassengers; i++) {   
      this.len.push(i);  }
    
  }

  ngOnInit(): void {
  }

  ticket()
  {
    this.router.navigate(['ticket']); 
  }
}
