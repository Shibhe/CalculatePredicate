import { Component, OnInit } from '@angular/core';
import { Assessment1 } from 'src/app/model/assessment_1';
import { Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Student } from 'src/app/model/student.model';
import { AssessmentService } from 'src/app/service/assessment.service';

@Component({
  selector: 'app-first-assessment',
  templateUrl: './first-assessment.component.html',
  styleUrls: ['./first-assessment.component.css']
})
export class FirstAssessmentComponent implements OnInit {
  @Input() student: Student = new Student();
  @Input() assessment = null;
  @Input() students = [];
  @Input() optradio = null;
  
  status: string;
  left: number;
  total: number = 0;
  average: number = 0;
  comment: string = null;
  a1: Assessment1 = new Assessment1();
  
  constructor(private _AssessmentService: AssessmentService) { }

  ngOnInit() {
     // assessment 1
     this.a1.s1 = "0";
     this.a1.s2 = "0";
     this.a1.s3 = "0";
     this.a1.s4 = "0";
     this.a1.s5 = "0";
     this.a1.s6 = "0";
     this.a1.s7 = "0";
     this.a1.s8 = "0";
     this.a1.s9 = "0";
  }

  // Assessment 1
  ass1(e){
    let as1 = e.target.value;

    if (as1.length == 0){
      this.a1.s1 = "0";
    } else{

    if (as1 >= 0 && as1 <= 3){
      this.a1.t1 = as1;

      let checkIf40 = (this.a1.t1 / 3) * 100;

      if (checkIf40 < 40){
        this.a1.s1 = "Pending";
      } else  {
        this.a1.s1 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;

      this.total += this.average;

     } else {
     this.a1.t1 = 0;
     this.a1.s1 = "0";
      alert("Out of range, it must be between 0 - 3");
    }
   }
 }

 ass2(e){
   let as12 = e.target.value;

    if (as12 >= 0 && as12 <= 2){
      this.a1.t2 = as12;

      let checkIf40 = (this.a1.t2 / 2) * 100;

      console.log(checkIf40);

      if (checkIf40 < 40){
        this.a1.s2 = "Pending";
      } else  {
        this.a1.s2 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;

      this.total += this.average;

     } else {
     this.a1.t2 = 0;
     this.a1.s2 = "0";
      alert("Out of range, it must be between 0 - 2");
    }
   
 }

 ass3(e){
   let as3 = e.target.value;
   if (as3.length == 0){
     this.a1.s3 = "0";
     // alert("0");
   } else{
    if (as3 >= 0 && as3 <= 3){
      this.a1.t3 = as3;

      let checkIf40 = (this.a1.t3 / 3) * 100;

      if (checkIf40 < 40){
        this.a1.s3 = "Pending";
      } else  {
        this.a1.s3 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;

      this.total += this.average;
    
     } else {
     this.a1.t3 = 0;
     this.a1.s3 = "0";
      alert("Out of range, it must be between 0 - 3");
    }
   }
 }

 ass4(e){
   let as4 = e.target.value;

   if (as4.length == 0){
     this.a1.s4 = "0";
     // alert("0");
   } else{
    if (as4 >= 0 && as4 <= 2){
      this.a1.t4 = as4;
      
      let checkIf40 = (this.a1.t4 / 2) * 100;

      if (checkIf40 < 40){
        this.a1.s4 = "Pending";
      } else  {
        this.a1.s4 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
    
      this.total += this.average;
    
     } else {
      this.a1.t4 = 0;
      this.a1.s4 = "0";
      alert("Out of range, it must be between 0 - 2");
    }
   }
 }

 ass5(e){
   let as5 = e.target.value;

    if (as5 >= 0 && as5 <= 3){
      this.a1.t5 = as5;

      let checkIf40 = (this.a1.t5 / 3) * 100;

      if (checkIf40 < 40){
        this.a1.s5 = "Pending";
      } else  {
        this.a1.s5 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
    
      this.total += this.average;

     } else {
      this.a1.t5 = 0;
      this.a1.s5 = "5";
      alert("Out of range, it must be between 0 - 3");
    }
   
 }

 ass6(e){
   let as6 = e.target.value;

    if (as6 >= 0 && as6 <= 2){
      this.a1.t6 = as6;

      let checkIf40 = (this.a1.t6 / 2) * 100;

      if (checkIf40 < 40){
        this.a1.s6 = "Pending";
      } else  {
        this.a1.s6 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
    
      this.total += this.average;

     } else {
      this.a1.t6 = 0;
      this.a1.s6 = "0";
      alert("Out of range, it must be between 0 - 2");
    }
   
 }

 ass7(e){
   let as7 = e.target.value;

    if (as7 >= 0 && as7 <= 3){
      this.a1.t7 = as7;

      let checkIf40 = (this.a1.t7 / 3) * 100;

      if (checkIf40 < 40){
        this.a1.s7 = "Pending";
      } else  {
        this.a1.s7 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
      this.total += this.average;
    
     } else {
      this.a1.t7 = 0;
      this.a1.s7 = "0";
      alert("Out of range, it must be between 0 - 3");
    }
   
 }

 ass8(e){
   let as8 = e.target.value;

    if (as8 >= 0 && as8 <= 5){
      this.a1.t8 = as8;
     
      let checkIf40 = (this.a1.t8 / 5) * 100;

      if (checkIf40 < 40){
        this.a1.s8 = "Pending";
      } else  {
        this.a1.s8 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) / 30) * 100) * 0.1;
      this.total += this.average;

     } else {
      this.a1.t8 = 0;
      this.a1.s8 = "0";
      alert("Out of range, it must be between 0 - 5");
    }
   
 }

 ass9(e){
   let as8 = e.target.value;

    if (as8 >= 0 && as8 <= 7){
      this.a1.t9 = as8;
      
      let checkIf40 = (this.a1.t9 / 7) * 100;

      if (checkIf40 < 40){
        this.a1.s9 = "Pending";
      } else  {
        this.a1.s9 = "Complete";
      }

      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) / 30) * 100) * 0.1;
      this.total += this.average;


     } else {
      this.a1.t9 = 0;
      this.a1.s9 = "0";
      alert("Out of range, it must be between 0 - 7");
    }
   
 }

 submitResult(){
  
  if (this.optradio == '2'){
    for (let i = 0; i < this.students.length; i++){
      this._AssessmentService.submitResults(this.total, this.assessment[0].assessment_Id, this.students[i].student_Id, this.student.studGroup,this.comment)
                              .subscribe((data) => {

                                if (data.success == 1){
                                    alert(data.message);
                                  this.students = [];
                                } else {
                                  alert(data.message);
                                }
                                console.log(data);

                                this.student = new Student();
                              },
                              // Handle errors
                              (err: HttpErrorResponse | Error) => {
                               // this.spinnerService.hide();
                              
                              if (err instanceof HttpErrorResponse) {
                                  if (err.status == 200 && err.ok == false){
                                     alert("Something went wrong. Please choose another option");
                                  } else if (err.status == 401){
                                    alert("Server-side error occured. Please check your token");
                                  } else if (err.status == 400){
                                    alert(err.message);
                                  } else if (err.status == 404){
                                   alert(err.message);
                                 }
                                  } else {
                                    console.log("Server-side error occured.");
                                  }
                              });
                      }
  } else if (this.optradio == '1'){
    this._AssessmentService.submitIndResults(this.total, this.assessment[0].assessment_Id, this.student.stud_ID, this.comment)
                          .subscribe((data) => {

                            if (data.success == 1){
                              alert(data.message);
                            } else {
                              alert(data.message);
                            }
                            console.log(data);

                            this.student = new Student();
                          },
                          // Handle errors
                          (err: HttpErrorResponse | Error) => {
                           // this.spinnerService.hide();
                          
                          if (err instanceof HttpErrorResponse) {
                              if (err.status == 200 && err.ok == false){
                                 alert("Something went wrong. Please choose another option");
                              } else if (err.status == 401){
                                alert("Server-side error occured. Please check your token");
                              } else if (err.status == 400){
                                alert(err.message);
                              } else if (err.status == 404){
                               alert(err.message);
                             }
                              } else {
                                console.log("Server-side error occured.");
                              }
                          });
      }
  }



}
