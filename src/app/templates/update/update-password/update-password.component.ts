import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../service/login/login.service';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  password: any = null;
  currentUser: any = null;

  constructor(private login: LoginService) { }

  ngOnInit() {
     this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  updatePassword() {
    this.login.updatePassword(this.password, this.currentUser.staff_Id)
              .subscribe((data) => {
                if (data.success == 1){
                  alert(data.message);
                  this.password = null;
                } else if (data.success == 0) {
                  alert(data.message);
                }
              })
  }

}
