import { Component, OnInit } from '@angular/core';
import { FlightscanService } from '../flightscan.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-flight',
  templateUrl: './cancel-flight.component.html',
  styleUrls: ['./cancel-flight.component.css']
})
export class CancelFlightComponent implements OnInit {

  name: string;
  data: any;
  constructor(private service: FlightscanService,private router: Router) { 
    if(sessionStorage.getItem("adminname")!=null)
    {
      this.name=sessionStorage.getItem("adminname");
    }
    else{
      alert("admin login first");
      this.router.navigate(['adminlogin']);
    }
    this.service.fetchAllFlights().subscribe(
      data => {
        this.data = data;
      }
    );

  }

  ngOnInit(): void {
  }

  logout()
  {
    sessionStorage.setItem("adminname",null);
    this.router.navigate(['searchflight']);
  }

  addflight()
  {
    this.router.navigate(['addflight']);
  }

  deleteFlight(d: any)
  {

  }
}
