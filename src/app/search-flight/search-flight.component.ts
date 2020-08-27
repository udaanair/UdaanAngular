import { Component, OnInit } from '@angular/core';
import { SearchParameters } from './../searchparameters';
import { FlightscanService } from './../flightscan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent{

  data: any;
  sp: SearchParameters=new SearchParameters;
  
  constructor(private service: FlightscanService,private router: Router) { }

  getFlights(){
    this.service.fetchflights(this.sp).subscribe(
      data=>{
        this.data=data;
      }
    );
  }
  bookingamount:number;
  selectFlight(d:any) {
        //  this.data.getFlights.
        alert(d.flightNumber);
       let numberOfPassengers =this.sp.numberOfPassengers;
        //let customerName = data.name;
        //let obj = {id : customerId, name : customerName};
        if(this.sp.cabinSelected=="economy")
        {
        this.bookingamount=numberOfPassengers*d.initialEconomyfare;
        }
        else
        {
        this.bookingamount=numberOfPassengers*d.initialBusinessfare;
        }
        alert(this.bookingamount);
        sessionStorage.setItem("bookingamount",String(this.bookingamount));
       sessionStorage.setItem('numberOfPassengers', String(numberOfPassengers));
       sessionStorage.setItem('cabinType',this.sp.cabinSelected);
     //  sessionStorage.setItem('flightNumber',this.data[1]);
       sessionStorage.setItem('selectedflight',JSON.stringify(d));
        
    this.router.navigate(['booking']); 
      
    }
  }


