import { Component, OnInit } from '@angular/core';
import { passengerClass } from '../booking/booking.component';
import { FlightscanService } from './../flightscan.service';
import { Router } from '@angular/router';
import { SeatsAvailable } from './../seatsavailable';
import { AvailableSeats } from '../availableseats';
import { SearchParameters } from '../searchparameters';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit {
 
  loggedin: boolean=false;
  name: string;
  totalfare: number;
  pass: passengerClass[]=[];
  sa: SeatsAvailable= new SeatsAvailable();
  dis: boolean[]=[];
  d:any;
  ab: AvailableSeats= new AvailableSeats();
  numberOfPassengers: number;
  sp: SearchParameters=new SearchParameters;
  fare: number;
  tf: number;
  len: number[]=[];
 
  constructor(private service: FlightscanService,private router: Router) {
    if(sessionStorage.getItem("username")!=null)
    {
      this.name=sessionStorage.getItem("username");
      this.loggedin=true;
    }
    sessionStorage.setItem("pnr","not set");
    this.totalfare=Number(sessionStorage.getItem("bookingamount"));
    for(let i=1;i<=60;i++)
    {
      this.dis[i]=true;
    }
    this.numberOfPassengers = Number(sessionStorage.getItem('numberOfPassengers'));
    this.d= JSON.parse(sessionStorage.getItem('selectedflight'));
    this.sa.cabinClass=sessionStorage.getItem("cabinType");
    this.sa.flightNumber=this.d.flightId;
    this.pass= JSON.parse(sessionStorage.getItem('passengerlist')); 
    this.sp= JSON.parse(sessionStorage.getItem('searchparam'));
    for (let i = 1; i <= this.numberOfPassengers; i++) {   
      this.len.push(i);  }
    
    
    this.fare = Number(sessionStorage.getItem('bookingamount'));
    this.numberOfPassengers = Number(sessionStorage.getItem('numberOfPassengers'));
    this.tf = this.numberOfPassengers * this.fare;
   
    this.service.fetchAvailableSeats(this.sa).subscribe(
      data=>{
        
        this.ab=data;

        for(let i=0;i<this.ab.availableSeats.length;i++)
         {
            this.dis[this.ab.availableSeats[i]]=false;
        }
      }
    );

   }

   logout()
  {
    this.loggedin=false;
    sessionStorage.clear();
    this.router.navigate(['searchflight']);
  }

   selectedSeats: number[]=[this.numberOfPassengers];
   abc:number;
   counter: number=0;
   check: number=1;
   generateticket(abc)
    {
      this.check=1;
      for(let i=0;i<this.selectedSeats.length;i++)
      {
        if(this.selectedSeats[i]==abc)
        {
          alert("You cannot select same seat twice.");
          this.check=0;
        }
      }
      if(this.check==1)
      {
      ++this.counter;
      if(this.counter<=this.numberOfPassengers)
      {
       
        this.selectedSeats.push(abc);
     
        alert("Seat " +abc+" Selected");
      }
      else if(this.counter>this.numberOfPassengers)
      {
       
       --this.counter;
        alert("Cannot Select More Seats");
      }
    }
    }
    resetFunction()
    {
      //this.counter=0;
      while(this.counter!=0){

      this.selectedSeats.pop();
        --this.counter;
    }
    }
    goToTicket()
    {
      if(this.counter==this.numberOfPassengers)
      {
      sessionStorage.setItem('selectedseats',JSON.stringify(this.selectedSeats));
      this.router.navigate(['payment']); 
      }
      else
      {
        alert("select "+(this.numberOfPassengers-this.counter)+" more seat/seats.");
      }
    }

  ngOnInit(): void {
  }

}