import { Component, OnInit } from '@angular/core';
import { Assessment3 } from 'src/app/model/assessment_3';
import { Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Student } from 'src/app/model/student.model';
import { AssessmentService } from 'src/app/service/assessment.service';
import { Results } from 'src/app/model/results';

@Component({
  selector: 'app-third-assessment',
  templateUrl: './third-assessment.component.html',
  styleUrls: ['./third-assessment.component.css']
})
export class ThirdAssessmentComponent implements OnInit {
  results: Results = new Results();
  @Input() student: Student = new Student();
  @Input() assessment = null;
  @Input() students = [];
  @Input() optradio = null;
  
  status: string;
  left: number;
  total: number = 0;
  average2: number = 0;
  comment;
  a3: Assessment3 = new Assessment3();

  constructor(private _AssessmentService: AssessmentService) { }

  ngOnInit() {
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
  }

   // Assessment 3
asse1(e){

  let as8 = e.target.value;


     if (as8 >= 0 && as8 <= 2){
       this.a3.t1 = as8;

       let checkIf40 = (this.a3.t1 / 2) * 100;

      if (checkIf40 < 40){
        this.a3.s1 = "Pending";
      } else  {
        this.a3.s1 = "Complete";
      }

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;
   
     } else {
       this.a3.t1 = 0;
       this.a3.s1 = "0";
       alert("Out of range");
     }
    
}

asse2(e){

  let as8 = e.target.value;

     if (as8 <= 5){
       this.a3.t2 = as8;
       
       let checkIf40 = (this.a3.t2 / 5) * 100;

       if (checkIf40 < 40){
         this.a3.s2 = "Pending";
       } else  {
         this.a3.s2 = "Complete";
       }

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

     } else {
       this.a3.t2 = 0;
       this.a3.s2 = "0";
       alert("Out of range");
     }
}

asse3(e){

  let as8 = e.target.value;

     if (as8 <= 24){
       this.a3.t3 = as8;
       let checkIf40 = (this.a3.t3 / 24) * 100;

       if (checkIf40 < 40){
         this.a3.s3 = "Pending";
       } else  {
         this.a3.s3 = "Complete";
       }

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

   
     } else {
       this.a3.t3 = 0;
       this.a3.s3 = "0";
       alert("Out of range");
     }
    
}

asse4(e){

  let as8 = e.target.value;


  if (as8 >= 0 && as8 <= 6){
    this.a3.t4 = as8;
    let checkIf40 = (this.a3.t4 / 6) * 100;

    if (checkIf40 < 40){
      this.a3.s4 = "Pending";
    } else  {
      this.a3.s4 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
    this.total += this.average2;

  } else {
    this.a3.t4 = 0;
    this.a3.s4 = "0";
    alert("Out of range");
  }
}

asse5(e){
  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 5){
    this.a3.t5 = as8;
    let checkIf40 = (this.a3.t5 / 5) * 100;

    if (checkIf40 < 40){
      this.a3.s5 = "Pending";
    } else  {
      this.a3.s5 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
    this.total += this.average2;


  } else {
    this.a3.t5 = 0;
    this.a3.s5 = "0";
    alert("Out of range");
  }
}

asse6(e){

  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 3){
    this.a3.t6 = as8;
    let checkIf40 = (this.a3.t6 / 3) * 100;

    if (checkIf40 < 40){
      this.a3.s6 = "Pending";
    } else  {
      this.a3.s6 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
    this.total += this.average2;

  } else {
    this.a3.t6 = 0;
    this.a3.s6 = "0";
    alert("Out of range");
  }
}

asse7(e){

  let as8 = e.target.value;

  if (as8 >= 0 &&as8 <= 10){
    this.a3.t7 = as8;
    let checkIf40 = (this.a3.t7 / 3) * 100;

    if (checkIf40 < 40){
      this.a3.s7 = "Pending";
    } else  {
      this.a3.s7 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

  } else {
    this.a3.t7 = 0;
    this.a3.s7 = "0";
    alert("Out of range");
  }
}

asse8(e){

  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 2){
    this.a3.t8 = as8;
    let checkIf40 = (this.a3.t8 / 2) * 100;

    if (checkIf40 < 40){
      this.a3.s8 = "Pending";
    } else  {
      this.a3.s8 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
    this.total += this.average2;

  } else {
    this.a3.t8 = 0;
    this.a3.s8 = "0";
    alert("Out of range");
  }
}

asse9(e){

  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 4){
    this.a3.t9 = as8;
    let checkIf40 = (this.a3.t9 / 4) * 100;

    if (checkIf40 < 40){
      this.a3.s9 = "Pending";
    } else  {
      this.a3.s9 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

  } else {
    this.a3.t9 = 0;
    this.a3.s9 = "0";
    alert("Out of range");
  }
}

asse10(e){
  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 2){
    this.a3.t10 = as8;
    let checkIf40 = (this.a3.t10 / 2) * 100;

    if (checkIf40 < 40){
      this.a3.s10 = "Pending";
    } else  {
      this.a3.s10 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

  } else {
    this.a3.t10 = 0;
    this.a3.s10 = "0";
    alert("Out of range");
  }
}

asse11(e){
  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 8){
    this.a3.t11 = as8;
    let checkIf40 = (this.a3.t11 / 8) * 100;

    if (checkIf40 < 40){
      this.a3.s11 = "Pending";
    } else  {
      this.a3.s11 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

  } else {
    this.a3.t11 = 0;
    this.a3.s11 = "0";
    alert("Out of range");
  }
}

asse12(e){
  let as8 = e.target.value;
 
  if (as8 >= 0 &&as8 <= 5){
       this.a3.t12 = as8;
       let checkIf40 = (this.a3.t12 / 5) * 100;

       if (checkIf40 < 40){
         this.a3.s12 = "Pending";
       } else  {
         this.a3.s12 = "Complete";
       }

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

     } else {
       this.a3.t12 = 0;
       this.a3.s12 = "0";
       alert("Out of range");
     }
}

asse13(e){
  let as8 = e.target.value;
 
  if (as8 >= 0 &&as8 <= 3){
    this.a3.t13 = as8;
    let checkIf40 = (this.a3.t13 / 3) * 100;

    if (checkIf40 < 40){
      this.a3.s13 = "Pending";
    } else  {
      this.a3.s13 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
       this.total += this.average2;

  } else {
    this.a3.t13 = 0;
    this.a3.s13 = "0";
    alert("Out of range");
  }
}

asse14(e){
  let as8 = e.target.value;

  if (as8 >= 0 &&as8 <= 4){
       this.a3.t14 = as8;
       let checkIf40 = (this.a3.t14 / 3) * 100;

       if (checkIf40 < 40){
         this.a3.s14 = "Pending";
       } else  {
         this.a3.s14 = "Complete";
       }

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
       this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;
       this.total += this.average2;

     } else {
       this.a3.t14 = 0;
       this.a3.s14 = "0";
       alert("Out of range");
     }
}

asse15(e){
  let as8 = e.target.value;

  if (as8 >= 0 &&as8 <= 10){
    this.a3.t15 = as8;
    let checkIf40 = (this.a3.t15 / 10) * 100;

    if (checkIf40 < 40){
      this.a3.s15 = "Pending";
    } else  {
      this.a3.s15 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;

    this.total += this.average2;

  } else {
    this.a3.t15 = 0;
    this.a3.s15 = "0";
    alert("Out of range");
  }
}

asse16(e){
  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 20){
    this.a3.t16 = as8;
    let checkIf40 = (this.a3.t16 / 20) * 100;

    if (checkIf40 < 40){
      this.a3.s16 = "Pending";
    } else  {
      this.a3.s16 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
    this.total += this.average2;

  } else {
    this.a3.t16 = 0;
    this.a3.s16 = "0";
    alert("Out of range");
  }
}

asse17(e){
  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 20){
    this.a3.t17 = as8;
    let checkIf40 = (this.a3.t17 / 20) * 100;

    if (checkIf40 < 40){
      this.a3.s17 = "Pending";
    } else  {
      this.a3.s17 = "Complete";
    }

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
    this.total += this.average2;

  } else {
    this.a3.t17 = 0;
    this.a3.s17 = "0";
    alert("Out of range");
  }
}

submitResult(){
  
  //this.results.results = this.total;
  //this.results.assessment_Id = this.assessment[0].assessment_Id;
  //this.results.comment = this.comment;
  //this.results.group_Id = Number(this.student.studGroup);

  if (this.optradio == '2'){
    for (let i = 0; i < this.students.length; i++){

     
      //this.results.student_Id = this.students[i].student_Id;

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

    //this.results.student_Id = Number(this.student.stud_ID);

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
