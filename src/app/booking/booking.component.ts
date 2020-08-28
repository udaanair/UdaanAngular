import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchParameters } from '../searchparameters';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  loggedin: boolean=false;
  name:string;
  numberOfPassengers: number;
  flightNumber: String;
  d:any;
  Np: number[]=[]; 
  fare: number;
  tf : number;
  url: string='/seatselection';
  sp: SearchParameters=new SearchParameters;
  constructor(private router: Router) {

    if(sessionStorage.getItem("username")!=null)
    {
      this.name=sessionStorage.getItem("username");
      this.loggedin=true;
    }

    this.d= JSON.parse(sessionStorage.getItem('selectedflight'));
    this.sp= JSON.parse(sessionStorage.getItem('searchparam'));
  
    this.fare = Number(sessionStorage.getItem('bookingamount'));

    //this.flightNumber= String(sessionStorage.getItem('flightNumber'));
    this.numberOfPassengers = Number(sessionStorage.getItem('numberOfPassengers'));
    this.tf = this.numberOfPassengers * this.fare;
    for (let i = 1; i <= this.numberOfPassengers; i++) {   
      this.Np.push(i);  
      this.passengerList[i]=new passengerClass();
       }
   }
   
   passengerList: passengerClass[]=[];

   logout()
   {
     this.loggedin=false;
     sessionStorage.clear();
     this.router.navigate(['searchflight']);
   }

   passenger(){
       //  this.data.getFlights.
      // alert(this.passengerList[2].name);
       sessionStorage.setItem('passengerlist',JSON.stringify(this.passengerList));
        
    //this.router.navigate(['booking']);
    this.router.navigate(['customerbooking']); 
   }

  ngOnInit(): void {
    
  }
  
  

}
export class passengerClass{
  name: string;
  age: number;
 /*constructor(name: string, age:Number) 
    {     this.name=name;
           this.age=age;
    }
*/
}
