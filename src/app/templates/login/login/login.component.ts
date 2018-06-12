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
                   if (data.role_Desc == "Admin"){
                      this.router.navigate(['/user/admin-dashboard']);
                   } else if (data.role_Desc == "Lecturer"){
                      this.router.navigate(['/user/lecturer-dashboard']);
                   } else {
                     alert("Unauthorized");
                   }
                    
                  } else {
                    alert(data.message);
                  }
                },
              (error) => {
                console.log(error)
              })
  }

  setIsLogged(val): any{
    return sessionStorage.setItem("currentUser", val);
  }

}
