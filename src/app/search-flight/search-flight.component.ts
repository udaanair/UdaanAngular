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

  loggedin: boolean=false;
  name: string;
  data: any;
  sp: SearchParameters=new SearchParameters;
  
  constructor(private service: FlightscanService,private router: Router) {

    if(sessionStorage.getItem("username")!=null)
    {
      this.name=sessionStorage.getItem("username");
      this.loggedin=true;
    }
   }

  logout()
  {
    this.loggedin=false;
    sessionStorage.clear();
    this.router.navigate(['searchflight']);
  }



  getFlights(){
    this.service.fetchflights(this.sp).subscribe(
      data=>{
        this.data=data;
      }
    );
  }
  bookingamount:number;
  selectFlight(d:any) {
       let numberOfPassengers =this.sp.numberOfPassengers;
       
        if(this.sp.cabinSelected=="economy")
        {
        this.bookingamount=numberOfPassengers*d.initialEconomyfare;
        }
        else
        {
        this.bookingamount=numberOfPassengers*d.initialBusinessfare;
        }
        sessionStorage.setItem("bookingamount",String(this.bookingamount));
       sessionStorage.setItem('numberOfPassengers', String(numberOfPassengers));
       sessionStorage.setItem('cabinType',this.sp.cabinSelected);
       sessionStorage.setItem('selectedflight',JSON.stringify(d));
       sessionStorage.setItem('searchparam',JSON.stringify(this.sp));
       if(sessionStorage.getItem("username")!=null)
        {
      	  this.router.navigate(['booking']); 
        }
        else
        {
          alert("Register first");
          this.router.navigate(['register']);
        }
    
      
    }
  }


