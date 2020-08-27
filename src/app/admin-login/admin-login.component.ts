import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from '../adminlogin';
import { AdminLoginResult } from '../adminloginresult';
import { FlightscanService } from '../flightscan.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

admin: AdminLogin=new AdminLogin();
loginresult: AdminLoginResult=new AdminLoginResult();
  constructor(private service: FlightscanService,private router: Router) { }

  ngOnInit(): void {
  }

  addFlights()
  {

    this.service.adminLoginVerification(this.admin).subscribe(
      data=>{
        this.loginresult=data;
        if(this.loginresult.status=="Wrong credentials")
        {
          alert("Wrong credentials, try again.")
        }
        else{
          sessionStorage.setItem("adminname",this.loginresult.name);
          this.router.navigate(['addflight']);
        }
      }
    );
    
  }

 
}
