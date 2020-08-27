import { Component, OnInit } from '@angular/core';
import { addUser } from '../addUser';
import { Router } from '@angular/router';
import { FlightscanService } from './../flightscan.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  user: addUser=new addUser();

  constructor(private service: FlightscanService, private router: Router) { }

  ngOnInit(): void {
  }
  getUser()
  {
    this.service.insertNewUser(this.user).subscribe( data=>{
      alert(JSON.stringify(data));
    }
  );
  }

}