import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../../service/student/student.service';
import { Student } from '../../../model/student.model';
import { AssessmentService } from '../../../service/assessment.service';

@Component({
  selector: 'app-main-lecturer-page',
  templateUrl: './main-lecturer-page.component.html',
  styleUrls: ['./main-lecturer-page.component.css']
})
export class MainLecturerPageComponent implements OnInit {

  groups: any;
  rep: number;
  currentUser: any = null;
  student: Student = new Student();

  constructor(private router: Router, private _StudentService: StudentService, 
              private _AssessmentService: AssessmentService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    console.log(this.currentUser);
    this.rep = 0;
    this._AssessmentService.getGroups()
                            .subscribe((data) => {
                              this.groups = data;
                              console.log(this.groups);
                            })
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }

  AddStudentInfo(){

    this.student.stuffNo = this.currentUser.staff_Id;
    this.student.student_Status = "Pending";

    this._StudentService.addStudent(this.student)
                     .subscribe((data) => {
                      if (data.success == 1){
                        alert(data.message);
                        this.student = new Student();
                      } else if (data.success == 0) {
                        alert(data.message);
                      } else {
                        alert("User already exists");
                      }
                     })
  }

  onChangeObj(e){
    console.log(e);
    this.student.studGroup = e;
  }

  generateReport(){
    this.router.navigate(['user/lecturer-dashboard/report']);
   this.rep = 1;
  }
}
