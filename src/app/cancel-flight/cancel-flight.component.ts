import { Component, OnInit } from '@angular/core';
import { FlightscanService } from '../flightscan.service';
import { Router } from '@angular/router';
import { IdForFlightCancel } from '../idForFlightCancel';

@Component({
  selector: 'app-cancel-flight',
  templateUrl: './cancel-flight.component.html',
  styleUrls: ['./cancel-flight.component.css']
})
export class CancelFlightComponent implements OnInit {

  name: string;
  data: any;
  id: IdForFlightCancel=new IdForFlightCancel();
  constructor(private service: FlightscanService,private router: Router) { 
  }

  ngOnInit(): void {
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

  logout()
  {
    sessionStorage.removeItem("adminname");
    this.router.navigate(['searchflight']);
  }

  addflight()
  {
    this.router.navigate(['addflight']);
  }

  deleteFlight(d: any)
  {
    this.id.flightId=d.flightId;
    this.service.cancelflight(this.id).subscribe(
      data => {
        alert(JSON.stringify(data));
        this.service.fetchAllFlights().subscribe(
          data => {
            this.data = data;
          }
        );
      }
    );
  }
}
