import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../userlogin';
import { FlightscanService } from '../flightscan.service';
import { Router } from '@angular/router';
import { UserLoginResult } from '../userloginresult';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: UserLogin=new UserLogin();
  loginresult: UserLoginResult=new UserLoginResult();
  constructor(private service: FlightscanService,private router: Router) { }


  ngOnInit(): void {
    
  }

  logincheck()
  {
    this.service.userLoginVerification(this.user).subscribe(
      data=>{
        this.loginresult=data;
        if(this.loginresult.status=="Wrong credentials")
        {
          alert("Wrong credentials, try again.")
        }
        else{
          sessionStorage.setItem("username",this.loginresult.name);
          sessionStorage.setItem("userid",String(this.loginresult.userName));
          this.router.navigate(['booking']);
        }
      }
    );
  }

}
