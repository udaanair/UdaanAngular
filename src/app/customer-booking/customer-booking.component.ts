import { Component, OnInit } from '@angular/core';
import { passengerClass } from '../booking/booking.component';
import { FlightscanService } from './../flightscan.service';
import { Router } from '@angular/router';
import { SeatsAvailable } from './../seatsavailable';
import { AvailableSeats } from '../availableseats';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit {
 
  totalfare: number;
  pass: passengerClass[]=[];
  sa: SeatsAvailable= new SeatsAvailable();
  dis: boolean[]=[];
  d:any;
  ab: AvailableSeats= new AvailableSeats();
  numberOfPassengers: number;
 // seats: string;
  constructor(private service: FlightscanService,private router: Router) {
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
   // alert(this.sa.cabinClass);
    //alert(this.sa.flightNumber);
    this.service.fetchAvailableSeats(this.sa).subscribe(
      data=>{
        //this.a=data["availableSeats"];
        //alert(data);
        this.ab=data;

        //alert(this.ab.availableSeats);
        //this.a=this.ab.availableSeats;
        //alert(Object.values(data)[0]);
        //this.data=JSON.stringify(data);
        //this.seats=Object.values(data)[0];
        alert(this.ab.availableSeats.length);
        for(let i=0;i<this.ab.availableSeats.length;i++)
         {
            this.dis[this.ab.availableSeats[i]]=false;
        }
      }
    );

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