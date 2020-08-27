import { Component, OnInit } from '@angular/core';
import { addNewFlight } from './../addnewflight';
import { Router } from '@angular/router';
import { FlightscanService } from './../flightscan.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  newflight: addNewFlight=new addNewFlight();
  name: string;
  constructor(private service: FlightscanService, private router: Router) {
    if(sessionStorage.getItem("adminname")!=null)
    {
      this.name=sessionStorage.getItem("adminname");
    }
    else{
      alert("admin login first");
      this.router.navigate(['adminlogin']);
    }
   }

  ngOnInit(): void {
  }

  getFlights()
  {
    this.service.insertNewFlight(this.newflight).subscribe( data=>{
      alert(JSON.stringify(data));
    }
  );
  }

  logout()
  {
    sessionStorage.setItem("adminname",null);
    this.router.navigate(['searchflight']);
  }

  showordelete()
  {
    this.router.navigate(['showandcancel']);
  }
}
