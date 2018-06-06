import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login/login.service';
import { Stuff } from '../../../model/stuff.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  stuff: Stuff = new Stuff();

  constructor(private login: LoginService,
              private router: Router) { }

  ngOnInit() {
  }

  isLogged(){
      let stuffNo = this.stuff.Stuff_No;
      let password = this.stuff.Password;

      this.login.userLogin(stuffNo, password)
                .subscribe((data) => {
                  if (data.success == 1){
                    this.setIsLogged(JSON.stringify(data));
                    this.login.isAuthenticated = true;
                   if (data.role_Name == "Admin"){
                      this.router.navigate(['/user/admin-dashboard']);
                   } else if (data.role_Name == "Lecturer"){
                      this.router.navigate(['/user/lecturer-dashboard']);
                   } else {
                     alert("Unauthorized");
                   }
                    
                  } else {
                    alert("Invalid login details");
                  }
                },
              (error) => {

              })
  }

  setIsLogged(val): any{
    return sessionStorage.setItem("currentUser", val);
  }

}
