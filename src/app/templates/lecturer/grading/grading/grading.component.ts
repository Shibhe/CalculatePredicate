import { Component, OnInit } from '@angular/core';
import { Student } from '../../../../model/student.model';
import { Assessment1 } from '../../../../model/assessment_1';
import { Assessment2 } from '../../../../model/assessment_2';
import { Assessment3 } from '../../../../model/assessment_3';
import { Assessment4 } from '../../../../model/assessment_4';
import { Assessment5 } from '../../../../model/assessment_5';
import { AssessmentService } from '../../../../service/assessment.service';
import { StudentService } from '../../../../service/student/student.service';
import { HttpErrorResponse } from '@angular/common/http';
//import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-grading',
  templateUrl: './grading.component.html',
  styleUrls: ['./grading.component.css']
})
export class GradingComponent implements OnInit {
  average11: number = 0;
 
  assessSelected: any[] = [];
  student: Student = new Student();
  left: number = 0;
  
  groups: any[] = [];
  group: any[] = [];
  info: any[] = [];

  a1: Assessment1 = new Assessment1();
  a2: Assessment2 = new Assessment2();
  a3: Assessment3 = new Assessment3();
  a4: Assessment4 = new Assessment4();
  a5: Assessment5 = new Assessment5();
  
  optionSelected;
  average: number = 0;
  average2: number = 0;
  average3: number = 0;
  average4: number = 0;
  total: number = 0;
  status: string = null;
  tasks: any[] = [];
  assessment: any[] = [];
  task: any = null;
  optradio: any = null;
  students: any[] = [];

  constructor(private _AssessmentService: AssessmentService,
              private studentService: StudentService) {}
  

  ngOnInit() {

  
    this.task = 0;
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
    // Assessment 2
    this.a2.s1 = "0";
    this.a2.s2 = "0";
    this.a2.s3 = "0";
    this.a2.s4 = "0";
    this.a2.s5 = "0";
    this.a2.s6 = "0";
    this.a2.s7 = "0";
    

    //Assessment 3
    this.a3.s1 = "0";
    this.a3.s2 = "0";
    this.a3.s3 = "0";
    this.a3.s4 = "0";
    this.a3.s5 = "0";
    this.a3.s6 = "0";
    this.a3.s7 = "0";
    this.a3.s8 = "0";
    this.a3.s9 = "0";
    this.a3.s10 = "0";
    this.a3.s11 = "0";
    this.a3.s12 = "0";
    this.a3.s13 = "0";
    this.a3.s14 = "0";
    this.a3.s15 = "0";
    this.a3.s16 = "0";
    this.a3.s17 = "0";
    //Assessment 4
    this.a4.s1 = "0";
    this.a4.s2 = "0";
    this.a4.s3 = "0";
    this.a4.s4 = "0";
    this.a4.s5 = "0";
    this.a4.s6 = "0";
    this.a4.s7 = "0";
    this.a4.s8 = "0";
    this.a4.s9 = "0";
    this.a4.s10 = "0";
    this.a4.s11 = "0";
    this.a4.s12 = "0";
    this.a4.s13 = "0";
    this.a4.s14 = "0";
    this.a4.s15 = "0";
    this.a4.s16 = "0";
    this.a4.s17 = "0";
    
    // Assessment 5
    this.a5.s1 = "0";
    this.a5.s2 = "0";
    this.a5.s3 = "0";
    this.a5.s4 = "0";
    this.a5.s5 = "0";
    this.a5.s6 = "0";
    this.a5.s7 = "0";
    this.a5.s8 = "0";
    this.a5.s9 = "0";
    this.a5.s10 = "0";
    this.a5.s11 = "0";
    this.a5.s12 = "0";
    this.a5.s13 = "0";
    this.a5.s14 = "0";
    this.a5.s15 = "0";
    this.student.studNo = "0";
   

    this.optradio = '1';
    this.task = "0";
    
    this._AssessmentService.getAsses()
                           .subscribe((data) => {
                             this.tasks = data;
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

   this._AssessmentService.getGroups()
                            .subscribe((data) => {
                              this.group = data;
                              console.log(this.groups);
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

    this._AssessmentService.getStudentNoGroup()
                           .subscribe((data) => {
                            this.groups = data;
                            console.log(this.groups);
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

  onChangeObj(val){
    this.info[0] = val;
    this.student.stud_ID = this.info[0].student_Id;
   // this.student.studNo = this.info[0].student_Id;
    this.student.projectName = this.info[0].student_ProjectName;
    this.student.studInitials = this.info[0].student_FName;
    this.student.studSurname = this.info[0].student_LName;
    //this.student.studGroup = this.info[0].group_Name;
  }

  selectedGroup(e){
    console.log(e);
    this.students = [];
    this.studentService.getStudent(e)
                       .subscribe((data) => {
                        if (data.success !== 0){
                          this.students = data;
                          console.log(this.students);
                        } else {
                          alert(data.message);
                        }
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

  onChange(val) {
    this.task = val;
    
    this.total = 0;
    this.left = 0;
   // this.spinnerService.show();
    console.log("Info ",this.task)
   if (this.task == "2"){
     this._AssessmentService.getAssessment2()
                            .subscribe((data) => {
                            //  this.spinnerService.hide();
                              this.assessment = data;
                              console.log(this.assessment);
                            })
   } else if (this.task == "6"){
    this._AssessmentService.getAllAssessment()
    .subscribe((data) => {
      this.assessment = data;
      console.log(this.assessment);
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
   } else {
    this._AssessmentService.getAssessment(this.task)
    .subscribe((data) => {
      this.assessment = data;
      console.log(this.assessment);
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

  // Assessment 1
  ass1(e){
     let as1 = e.target.value;

     if (as1.length == 0){
       this.a1.s1 = "0";
     } else{

     if (as1 >= 0 && as1 <= 3){
       this.a1.t1 = as1;

       this.a1.s1 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;

       this.total = this.average;

       
      } else {
      this.a1.t1 = 0;
      this.a1.s1 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }
  }

  ass2(e){
    let as12 = e.target.value;

    if (as12.length == 0){
      this.a1.s2 = "0";
    } else{
     if (as12 >= 0 && as12 <= 2){
       this.a1.t2 = as12;
       this.a1.s2 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;

       this.total = this.average;

     
      } else {
      this.a1.t2 = 0;
      this.a1.s2 = "0";
       alert("Out of range, it must be between 0 - 2");
     }
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
       this.a1.s3 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;

       this.total = this.average;

     
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
       this.a1.s4 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;
     
       this.total = this.average;

     
      } else {
       this.a1.t4 = 0;
       this.a1.s4 = "0";
       alert("Out of range, it must be between 0 - 2");
     }
    }
  }

  ass5(e){
    let as5 = e.target.value;

    if (as5.length == 0){
      this.a1.s5 = "0";
      // alert("0");
    } else{
     if (as5 >= 0 && as5 <= 3){
       this.a1.t5 = as5;
       this.a1.s5 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;
     
       this.total = this.average;

    
      } else {
       this.a1.t5 = 0;
       this.a1.s5 = "5";
       alert("Out of range, it must be between 0 - 3");
     }
    }
  }

  ass6(e){
    let as6 = e.target.value;

    if (as6.length == 0){
      this.a1.s6 = "0";
      // alert("0");
    } else{
     if (as6 >= 0 && as6 <= 2){
       this.a1.t6 = as6;
       this.a1.s6 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;
     
       this.total = this.average;

     
      } else {
       this.a1.t6 = 0;
       this.a1.s6 = "0";
       alert("Out of range, it must be between 0 - 2");
     }
    }
  }

  ass7(e){
    let as7 = e.target.value;

    if (as7.length == 0){
      this.a1.s7 = "0";
      // alert("0");
    } else{
     if (as7 >= 0 && as7 <= 3){
       this.a1.t7 = as7;
       this.a1.s7 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;
       this.total = this.average;

    
      } else {
       this.a1.t7 = 0;
       this.a1.s7 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }
  }

  ass8(e){
    let as8 = e.target.value;

    if (as8.length == 0){
      this.a1.s8 = "0";
      // alert("0");
    } else{
     if (as8 >= 0 && as8 <= 5){
       this.a1.t8 = as8;
       this.a1.s8 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;
       this.total = this.average;


      } else {
       this.a1.t8 = 0;
       this.a1.s8 = "0";
       alert("Out of range, it must be between 0 - 5");
     }
    }
  }

  ass9(e){
    let as8 = e.target.value;

    if (as8.length == 0){
      this.a1.s9 = "0";
      // alert("0");
    } else{
     if (as8 >= 0 && as8 <= 7){
       this.a1.t9 = as8;
       this.a1.s9 = "Complete";
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) * 10) / 30;
       this.total = this.average;

     

      } else {
       this.a1.t9 = 0;
       this.a1.s9 = "0";
       alert("Out of range, it must be between 0 - 7");
     }
    }
  }

  // Assessment 2
  as1(e){
    let as1 = e.target.value;

    if (as1.length == 0){
      this.a2.s1 = "0";
      // alert("0");
    } else{

    if (as1 == 1){
      this.a2.t1 = as1;

      this.a2.s1 = "Complete";
      this.average11 = ((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) * 15) / 36;     
       this.total = this.average11;

    } else {
     this.a2.t1 = 0;
     this.a2.s1 = "0";
      alert("Out of range");
    }
  }
 }

 as2(e){
   let as12 = e.target.value;

   if (as12.length == 0){
    this.a2.s2 = "0";
    // alert("0");
  } else{
    if (as12 >= 0 && as12 <= 3){
      this.a2.t2 = as12;
      this.a2.s2 = "Complete";
      this.average11 = ((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) * 15) / 36;

      this.total = this.average11;

   
    } else {
     this.a2.t2 = 0;
     this.a2.s2 = "0";
      alert("Out of range, it must be between 0 - 3");
    }
  }
 }

 as3(e){
   let as3 = e.target.value;
   if (as3.length == 0){
    this.a2.s1 = "0";
    // alert("0");
  } else{
    if (as3 >= 0 && as3 <= 2){
      this.a2.t3 = as3;
      this.a2.s3 = "Complete";
      this.average11 = ((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) * 15) / 36;  
          this.total = this.average11;

    
    } else {
     this.a2.t3 = 0;
     this.a2.s3 = "0";
      alert("Out of range, it must be between o - 2");
    }
  }
 }

 as4(e){
   let as4 = e.target.value;

   if (as4.length == 0){
    this.a2.s1 = "0";
    // alert("0");
  } else{
    if (as4 >= 0 && as4 <= 26){
      this.a2.t4 = as4;
      this.a2.s4 = "Complete";
      this.average11 = ((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) * 15) / 36;  
          this.total = this.average11;

    
    } else {
      this.a2.t4 = 0;
      this.a2.s4 = "0";
      alert("Out of range, it must be between 0 - 26");
    }
  }
 }

 as5(e){
   let as5 = e.target.value;

   if (as5.length == 0){
    this.a2.s1 = "0";
    // alert("0");
  } else{
    if (as5 >=0 && as5 <= 2){
      this.a2.t5 = as5;
      this.a2.s5 = "Complete";
      this.average11 = ((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) * 15) / 36;     
       this.total = this.average11;

    
    } else {
      this.a2.t5 = 0;
      this.a2.s5 = "5";
      alert("Out of range");
    }
  }
 }

 as6(e){
   let as6 = e.target.value;

   if (as6.length == 0){
    this.a2.s1 = "0";
    // alert("0");
  } else{
    if (as6 == 1){
      this.a2.t6 = as6;
      this.a2.s6 = "Complete";
      this.average11 = ((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) * 15) / 36;    
        this.total = this.average11;

     
    } else {
      this.a2.t6 = 0;
      this.a2.s6 = "0";
      alert("Out of range");
    }
  }
 }

 as7(e){
   let as7 = e.target.value;
   console.log(as7);
   if (as7.length == 0){
    this.a2.s1 = "0";
    // alert("0");
  } else{
    if (as7 == 1){
      this.a2.t7 = as7;
      this.a2.s7 = "Complete";
      this.average11 = ((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) * 15) / 36; 
         this.total = this.average11;

     

    } else {
      this.a2.t7 = 0;
      this.a2.s7 = "0";
      alert("Out of range");
    }
  }
 }

  // Assessment 3
asse1(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a3.s1 = "0";
    // alert("0");
  } else{
     if (as8 >= 0 && as8 <= 2){
       this.a3.t1 = as8;
       this.a3.s1 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

     } else {
       this.a3.t1 = 0;
       this.a3.s1 = "0";
       alert("Out of range, it must be between 0 - 2");
     }
    }
}

asse2(e){

  let as8 = e.target.value;

  if ( as8 >= 0 && as8.length == 0){
    this.a3.s2 = "0";
    // alert("0");
  } else{
     if (as8 <= 5){
       this.a3.t2 = as8;
       this.a3.s2 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

      
   
     } else {
       this.a3.t2 = 0;
       this.a3.s2 = "0";
       alert("Out of range, it must be between 0 - 5");
     }
    }
}

asse3(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a2.s3 = "0";
    // alert("0");
  } else{
     if (as8 <= 24){
       this.a3.t3 = as8;
       this.a3.s3 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

      
   
     } else {
       this.a3.t3 = 0;
       this.a3.s3 = "0";
       alert("Out of range, it must be 0 - 24");
     }
    }
}

asse4(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a3.s4 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 6){
    this.a3.t4 = as8;
    this.a3.s4 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
    this.total = this.average2;

  

  } else {
    this.a3.t4 = 0;
    this.a3.s4 = "0";
    alert("Out of range, it must be between 0 - 6");
  }
}
}

asse5(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s5 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 5){
    this.a3.t5 = as8;
    this.a3.s5 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
    this.total = this.average2;

   

  } else {
    this.a3.t5 = 0;
    this.a3.s5 = "0";
    alert("Out of range, it must be between 0 - 5");
  }
  }
}

asse6(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s6 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
    this.a3.t6 = as8;
    this.a3.s6 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
    this.total = this.average2;

  
  } else {
    this.a3.t6 = 0;
    this.a3.s6 = "0";
    alert("Out of range, it must be between 0 - 3");
  }
}
}

asse7(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s7 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 10){
    this.a3.t7 = as8;
    this.a3.s7 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

   
  } else {
    this.a3.t7 = 0;
    this.a3.s7 = "0";
    alert("Out of range, it must be between 0 - 10");
  }
}
}

asse8(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s8 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 2){
    this.a3.t8 = as8;
    this.a3.s8 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
    this.total = this.average2;

  

  } else {
    this.a3.t8 = 0;
    this.a3.s8 = "0";
    alert("Out of range, it must be between 0 - 2");
  }
}
}

asse9(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s9 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 4){
    this.a3.t9 = as8;
    this.a3.s9 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

    

  } else {
    this.a3.t9 = 0;
    this.a3.s9 = "0";
    alert("Out of range, it must be between 0 - 4");
  }
}
}

asse10(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s10 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 2){
    this.a3.t10 = as8;
    this.a3.s10 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

     
   
  } else {
    this.a3.t10 = 0;
    this.a3.s10 = "0";
    alert("Out of range, it must be between 0 - 2");
  }
}
}

asse11(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a3.s11 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 8){
    this.a3.t11 = as8;
    this.a3.s11 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

      
  } else {
    this.a3.t11 = 0;
    this.a3.s11 = "0";
    alert("Out of range, it must be between 0 - 8");
  }
}

}

asse12(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s12 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 5){
       this.a3.t12 = as8;
       this.a3.s12 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

       
   
     } else {
       this.a3.t12 = 0;
       this.a3.s12 = "0";
       alert("Out of range, it must be 0 - 5");
     }
    }
}

asse13(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s13 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 3){
    this.a3.t13 = as8;
    this.a3.s13 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

      
   
  } else {
    this.a3.t13 = 0;
    this.a3.s13 = "0";
    alert("Out of range, it must be between 0 - 3");
  }
}

}

asse14(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a3.s14 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 4){
       this.a3.t14 = as8;
       this.a3.s14 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
       this.total = this.average2;

      
     } else {
       this.a3.t14 = 0;
       this.a3.s14 = "0";
       alert("Out of range, it must be between 0 - 4");
     }
    }
}

asse15(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a3.s15 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 10){
    this.a3.t15 = as8;
    this.a3.s15 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
    this.total = this.average2;

  


  } else {
    this.a3.t15 = 0;
    this.a3.s15 = "0";
    alert("Out of range, it must be between 0 - 10");
  }
}
}

asse16(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a3.s16 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 20){
    this.a3.t16 = as8;
    this.a3.s16 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
    this.total = this.average2;

  

  } else {
    this.a3.t16 = 0;
    this.a3.s16 = "0";
    alert("Out of range, it must be between 0 - 20");
  }
}
}

asse17(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a3.s17 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 20){
    this.a3.t17 = as8;
    this.a3.s17 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = ((sum1 + sum2 + sum3) * 20) / 132;
    this.total = this.average2 - 0.2;
    this.average2 = this.total;

    
  } else {
    this.a3.t17 = 0;
    this.a3.s17 = "0";
    alert("Out of range, it must be between 0 - 20");
  }
}
}

// Assessment 4

asses1(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s1 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
       this.a4.t1 = as8;
       this.a4.s1 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

      
     } else {
       this.a4.t1 = 0;
       this.a4.s1 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }
}

asses2(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s2 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 2){
       this.a4.t2 = as8;
       this.a4.s2 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

    
     } else {
       this.a4.t2 = 0;
       this.a4.s2 = "0";
       alert("Out of range, it must be between 0 - 2");
     }
    }
}

asses3(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s3 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
       this.a4.t3 = as8;
       this.a4.s3 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

      
     } else {
       this.a4.t3 = 0;
       this.a4.s3 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }
}

asses4(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s4 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 2){
       this.a4.t4 = as8;
       this.a4.s4 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

      
     } else {
       this.a4.t4 = 0;
       this.a4.s4 = "0";
       alert("Out of range, it must be between 0 - 2");
     }
    }
}

asses5(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a4.s5 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
       this.a4.t5 = as8;
       this.a4.s5 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

      
     } else {
       this.a4.t5 = 0;
       this.a4.s5 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }
}

asses6(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a4.s6 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 4){
       this.a4.t6 = as8;
       this.a4.s6 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

      
     } else {
       this.a4.t6 = 0;
       this.a4.s6 = "0";
       alert("Out of range, it must be between 0 - 4");
     }
    }
}

asses7(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a4.s7 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 5){
    this.a4.t7 = as8;
    this.a4.s7 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
    this.total = this.average3;

  } else {
    this.a4.t7 = 0;
    this.a4.s7 = "0";
    alert("Out of range, it must be between 0  - 5");
  }
}
}

asses8(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a4.s8 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
    this.a4.t8 = as8;
    this.a4.s8 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
    let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
    let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
    this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
    this.total = this.average3;

    
  } else {
    this.a4.t8 = 0;
    this.a4.s8 = "0";
    alert("Out of range, it must be between 0 - 3");
  }
}
}

asses9(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a4.s9 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
       this.a4.t9 = as8;
       this.a4.s9 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

       
     } else {
       this.a4.t9 = 0;
       this.a4.s9 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }
}

asses10(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s1 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 1){
       this.a4.t10 = as8;
       this.a4.s10 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

       
     } else {
       this.a4.t10 = 0;
       this.a4.s10 = "0";
       alert("Out of range");
     }
    }
}

asses11(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s11 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 3){
       this.a4.t11 = as8;
       this.a4.s11 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

       
     } else {
       this.a4.t11 = 0;
       this.a4.s11 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }
}

asses12(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s12 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 6){
    this.a4.t12 = as8;
    this.a4.s12 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
    this.total = this.average3;

   
  } else {
    this.a4.t12 = 0;
    this.a4.s12 = "0";
    alert("Out of range, it must be between 0 - 6");
  }
}
}

asses13(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s13 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 3){
       this.a4.t13 = as8;
       this.a4.s13 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

      
     } else {
       this.a4.t13 = 0;
       this.a4.s13 = "0";
       alert("Out of range, it must be between 0 - 3");
     }
    }

}

asses14(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s14 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 5){
    this.a4.t14 = as8;
    this.a4.s14 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

    
  } else {
    this.a4.t14 = 0;
    this.a4.s14 = "0";
    alert("Out of range, it must be between 0 - 5");
  }
}
}

asses15(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s15 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 4){
       this.a4.t15 = as8;
       this.a4.s15 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

       
      } else {
       this.a4.t15 = 0;
       this.a4.s15 = "0";
       alert("Out of range, it must be between 0 - 4");
     }
    }
}

asses16(e){
  let as8 = e.target.value;

  if (as8.length == 0){
    this.a4.s16 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 20){
       this.a4.t16 = as8;
       this.a4.s16 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3;

      
     } else {
       this.a4.t16 = 0;
       this.a4.s16 = "0";
       alert("Out of range, it must be between 0 - 20");
     }
    }
}

asses17(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a4.s17 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 10){
       this.a4.t17 = as8;
       this.a4.s17 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = ((sum1 + sum2 + sum3) * 22) / 80;
       this.total = this.average3 - 2;
       this.average3 = this.total;

     } else {
       this.a4.t17 = 0;
       this.a4.s17 = "0";
       alert("Out of range, it must be between 0 - 10");
     }
    }
}

// Assessment 5

assess1(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s1 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 8){
       this.a5.t1 = as8;
       this.a5.s1 = "Complete";

       let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
       let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
       let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
       this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
       this.total = this.average4;
     } else {
       this.a5.t1 = 0;
       this.a5.s1 = "0";
       alert("Out of range, it must be between 0 - 8");
     }
    }
}

assess2(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s2 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 2){
    this.a5.t2 = as8;
    this.a5.s2 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
   
  } else {
    this.a5.t2 = 0;
    this.a5.s2 = "0";
    alert("Out of range, it must be between 0 - 2");
  }
}
}

assess3(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s3 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 4){
    this.a5.t3 = as8;
    this.a5.s3 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t3 = 0;
    this.a5.s3 = "0";
    alert("Out of range, it must be between 0 - 4");
  }
}
}

assess4(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a5.s4 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 4){
    this.a5.t4 = as8;
    this.a5.s4 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t4 = 0;
    this.a5.s4 = "0";
    alert("Out of range, it must be between 0 - 4");
  }
}
}

assess5(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s5 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 2){
    this.a5.t5 = as8;
    this.a5.s5 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t5 = 0;
    this.a5.s5 = "0";
    alert("Out of range, it must be between 0 - 2");
  }
}

}

assess6(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s6 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 6){
    this.a5.t6 = as8;
    this.a5.s6 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t6 = 0;
    this.a5.s6 = "0";
    alert("Out of range");
  }
}
}

assess7(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s7 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 6){
    this.a5.t7 = as8;
    this.a5.s7 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t7 = 0;
    this.a5.s7 = "0";
    alert("Out of range");
  }
}
}

assess8(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s8 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 3){
    this.a5.t8 = as8;
    this.a5.s8 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t8 = 0;
    this.a5.s8 = "0";
    alert("Out of range");
  }
}
}

assess9(e){

  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s9 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 24){
    this.a5.t9 = as8;
    this.a5.s9 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t9 = 0;
    this.a5.s9 = "0";
    alert("Out of range");
  }
}
}

assess10(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s10 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 16){
    this.a5.t10 = as8;
    this.a5.s10 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t10 = 0;
    this.a5.s10 = "0";
    alert("Out of range");
  }
}
}

assess11(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s11 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 4){
    this.a5.t11 = as8;
    this.a5.s11 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t11 = 0;
    this.a5.s11 = "0";
    alert("Out of range");
  }
}

}

assess12(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s12 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 6){
    this.a5.t12 = as8;
    this.a5.s12 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t12 = 0;
    this.a5.s12 = "0";
    alert("Out of range");
  }
}

}

assess13(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s13 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 12){
    this.a5.t13 = as8;
    this.a5.s13 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t13 = 0;
    this.a5.s13 = "0";
    alert("Out of range");
  }
  }
}

assess14(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s14 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 4){
    this.a5.t14 = as8;
    this.a5.s14 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t14 = 0;
    this.a5.s14 = "0";
    alert("Out of range");
  }
}
}

assess15(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s15 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 5){
    this.a5.t15 = as8;
    this.a5.s15 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
   
  } else {
    this.a5.t15 = 0;
    this.a5.s15 = "0";
    alert("Out of range");
  }
}
}

assess16(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s16 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 5){
    this.a5.t16 = as8;
    this.a5.s16 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t16 = 0;
    this.a5.s16 = "0";
    alert("Out of range");
  }
}
}

assess81(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s17 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
    this.a5.t17 = as8;
    this.a5.s17 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;

  } else {
    this.a5.t17 = 0;
    this.a5.s17 = "0";
    alert("Out of range");
  }
}
}

assess82(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s18 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 &&as8 <= 3){
    this.a5.t18 = as8;
    this.a5.s18 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t18 = 0;
    this.a5.s18 = "0";
    alert("Out of range");
  }
}
}

assess83(e){
  let as8 = e.target.value;
  if (as8.length == 0){
    this.a5.s19 = "0";
    // alert("0");
  } else{
  if (as8 >= 0 && as8 <= 3){
    this.a5.t19 = as8;
    this.a5.s19 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + Number(this.a5.t8) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + Number(this.a5.t13) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = ((sum1 + sum2 + sum3) * 35) / 120;
    this.total = this.average4;
  } else {
    this.a5.t19 = 0;
    this.a5.s19 = "0";
    alert("Out of range");
  }
}
}

  submitResult(){
  
    if (this.optradio == '2'){
      for (let i = 0; i < this.students.length; i++){
        this._AssessmentService.submitResults(this.total, this.assessment[0].assessment_Id, this.students[i].student_Id, this.student.studGroup)
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
      this._AssessmentService.submitIndResults(this.total, this.assessment[0].assessment_Id, this.student.stud_ID)
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

