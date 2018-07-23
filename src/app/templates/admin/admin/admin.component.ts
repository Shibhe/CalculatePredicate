import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../service/student/student.service';
import { StuffService } from '../../../service/stuff/stuff.service';
import { Stuff } from '../../../model/stuff.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentUser: any = null;
  stuff: Stuff = new Stuff();

  constructor(private router: Router, private _stuffService: StuffService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

  AddLecturerInfo(){
    this._stuffService.addLecturer(this.stuff)
                     .subscribe((data) => {
                      if (data.success == 1){
                        alert(data.message);
                        this.stuff = new Stuff();
                      } else if (data.success == 0) {
                        alert(data.message);
                      } else {
                        alert("User already exists");
                      }
                     })
  }

}
