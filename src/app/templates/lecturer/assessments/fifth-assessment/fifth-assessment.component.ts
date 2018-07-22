import { Component, OnInit } from '@angular/core';
import { Assessment5 } from 'src/app/model/assessment_5';
import { Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Student } from 'src/app/model/student.model';
import { AssessmentService } from 'src/app/service/assessment.service';
import { ResultFunc } from 'rxjs/internal/observable/generate';
import { Results } from 'src/app/model/results';

@Component({
  selector: 'app-fifth-assessment',
  templateUrl: './fifth-assessment.component.html',
  styleUrls: ['./fifth-assessment.component.css']
})
export class FifthAssessmentComponent implements OnInit {
  results: Results = new Results();
  @Input() student: Student = new Student();
  @Input() assessment = null;
  @Input() students = [];
  @Input() optradio = null;

  status: string;
  left: number;
  total: number = 0;
  average4: number = 0;
  comment;
  a5: Assessment5 = new Assessment5();

  constructor(private _AssessmentService: AssessmentService) { }

  ngOnInit() {
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
  }

  // Assessment 5

assess1(e){

  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 8){
       this.a5.t1 = as8;
       let checkIf40 = (this.a5.t1 / 8) * 100;

      if (checkIf40 < 40){
        this.a5.s1 = "Pending";
      } else  {
        this.a5.s1 = "Complete";
      }

       let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
       let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
       let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
       this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
       this.total += this.average4;

     } else {
       this.a5.t1 = 0;
       this.a5.s1 = "0";
       alert("Out of range");
     }
}

assess2(e){

  let as8 = e.target.value;
  
  if (as8 >= 0 && as8 <= 2){
    this.a5.t2 = as8;
    let checkIf40 = (this.a5.t2 / 2) * 100;

      if (checkIf40 < 40){
        this.a5.s2 = "Pending";
      } else {
        this.a5.s2 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t2 = 0;
    this.a5.s2 = "0";
    alert("Out of range");
  }
}

assess3(e){

  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 4){
    this.a5.t3 = as8;

    let checkIf40 = (this.a5.t3 / 4) * 100;

      if (checkIf40 < 40){
        this.a5.s3 = "Pending";
      } else  {
        this.a5.s3 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t3 = 0;
    this.a5.s3 = "0";
    alert("Out of range");
  }
}

assess4(e){

  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 4){
    this.a5.t4 = as8;
    let checkIf40 = (this.a5.t4 / 3) * 100;

      if (checkIf40 < 40){
        this.a5.s4 = "Pending";
      } else  {
        this.a5.s4 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t4 = 0;
    this.a5.s4 = "0";
    alert("Out of range");
  }
}

assess5(e){
  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 2){
    this.a5.t5 = as8;
    let checkIf40 = (this.a5.t5 / 2) * 100;

      if (checkIf40 < 40){
        this.a5.s5 = "Pending";
      } else  {
        this.a5.s5 = "Complete";
      }
    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t5 = 0;
    this.a5.s5 = "0";
    alert("Out of range");
  }
}

assess6(e){

  let as8 = e.target.value;

  if (as8 >= 0 && as8 <= 6){
    this.a5.t6 = as8;
    let checkIf40 = (this.a5.t6 / 6) * 100;

      if (checkIf40 < 40){
        this.a5.s6 = "Pending";
      } else  {
        this.a5.s6 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t6 = 0;
    this.a5.s6 = "0";
    alert("Out of range");
  }
}

assess7(e){

  let as8 = e.target.value;
  
  if (as8 >= 0 && as8 <= 6){
    this.a5.t7 = as8;
    let checkIf40 = (this.a5.t7 / 6) * 100;

      if (checkIf40 < 40){
        this.a5.s7 = "Pending";
      } else  {
        this.a5.s7 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t7 = 0;
    this.a5.s7 = "0";
    alert("Out of range");
  }
}

assess8(e){

  let as8 = e.target.value;
 
  if (as8 >= 0 &&as8 <= 3){
    this.a5.t8 = as8;
    let checkIf40 = (this.a5.t8 / 3) * 100;

      if (checkIf40 < 40){
        this.a5.s8 = "Pending";
      } else  {
        this.a5.s8 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t8 = 0;
    this.a5.s8 = "0";
    alert("Out of range");
  }
}

assess9(e){

  let as8 = e.target.value;
  
  if (as8 >= 0 &&as8 <= 24){
    this.a5.t9 = as8;
    let checkIf40 = (this.a5.t9 / 24) * 100;

      if (checkIf40 < 40){
        this.a5.s9 = "Pending";
      } else  {
        this.a5.s9 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t9 = 0;
    this.a5.s9 = "0";
    alert("Out of range");
  }
}

assess10(e){
  let as8 = e.target.value;
 
  if (as8 >= 0 &&as8 <= 16){
    this.a5.t10 = as8;
    let checkIf40 = (this.a5.t10 / 16) * 100;

      if (checkIf40 < 40){
        this.a5.s10 = "Pending";
      } else  {
        this.a5.s10 = "Complete";
      }
    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t10 = 0;
    this.a5.s10 = "0";
    alert("Out of range");
  }
}

assess11(e){
  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 4){
    this.a5.t11 = as8;
    let checkIf40 = (this.a5.t11 / 4) * 100;

      if (checkIf40 < 40){
        this.a5.s11 = "Pending";
      } else  {
        this.a5.s11 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t11 = 0;
    this.a5.s11 = "0";
    alert("Out of range");
  }
}

assess12(e){
  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 6){
    this.a5.t12 = as8;
    let checkIf40 = (this.a5.t12 / 6) * 100;

      if (checkIf40 < 40){
        this.a5.s12 = "Pending";
      } else  {
        this.a5.s12 = "Complete";
      }
    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t12 = 0;
    this.a5.s12 = "0";
    alert("Out of range");
  }
}

assess13(e){
  let as8 = e.target.value;
  
  if (as8 >= 0 && as8 <= 12){
    this.a5.t13 = as8;
    let checkIf40 = (this.a5.t13 / 12) * 100;

      if (checkIf40 < 40){
        this.a5.s13 = "Pending";
      } else  {
        this.a5.s13 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t13 = 0;
    this.a5.s13 = "0";
    alert("Out of range");
  }
}

assess14(e){
  let as8 = e.target.value;
  
  if (as8 >= 0 && as8 <= 4){
    this.a5.t14 = as8;
    let checkIf40 = (this.a5.t14 / 4) * 100;

      if (checkIf40 < 40){
        this.a5.s14 = "Pending";
      } else  {
        this.a5.s14 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t14 = 0;
    this.a5.s14 = "0";
    alert("Out of range");
  }
}

assess15(e){
  let as8 = e.target.value;
  
  if (as8 >= 0 && as8 <= 5){
    this.a5.t15 = as8;
    let checkIf40 = (this.a5.t15 / 5) * 100;

      if (checkIf40 < 40){
        this.a5.s15 = "Pending";
      } else  {
        this.a5.s15 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;
    
  } else {
    this.a5.t15 = 0;
    this.a5.s15 = "0";
    alert("Out of range");
  }
}

assess16(e){
  let as8 = e.target.value;
  
  if (as8 >= 0 && as8 <= 5){
    this.a5.t16 = as8;
    let checkIf40 = (this.a5.t16 / 5) * 100;

      if (checkIf40 < 40){
        this.a5.s16 = "Pending";
      } else  {
        this.a5.s16 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;

  } else {
    this.a5.t16 = 0;
    this.a5.s16 = "0";
    alert("Out of range");
  }
}

assess81(e){
  let as8 = e.target.value;
 
  if (as8 >= 0 && as8 <= 3){
    this.a5.t17 = as8;
    let checkIf40 = (this.a5.t17 / 3) * 100;

      if (checkIf40 < 40){
        this.a5.s17 = "Pending";
      } else  {
        this.a5.s17 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;
  } else {
    this.a5.t17 = 0;
    this.a5.s17 = "0";
    alert("Out of range");
  }
}

assess82(e){
  let as8 = e.target.value;
  
  if (as8 >= 0 &&as8 <= 3){
    this.a5.t18 = as8;
    let checkIf40 = (this.a5.t18 / 16) * 100;

      if (checkIf40 < 40){
        this.a5.s18 = "Pending";
      } else  {
        this.a5.s18 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;
    
  } else {
    this.a5.t18 = 0;
    this.a5.s18 = "0";
    alert("Out of range");
  }
}

assess83(e){
  let as8 = e.target.value;
  
  if (as8 >= 0 && as8 <= 3){
    this.a5.t19 = as8;
    let checkIf40 = (this.a5.t19 / 16) * 100;

      if (checkIf40 < 40){
        this.a5.s19 = "Pending";
      } else  {
        this.a5.s19 = "Complete";
      }

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15) + Number(this.a5.t16) + Number(this.a5.t17) +  Number(this.a5.t18)  + Number(this.a5.t19);
    this.average4 = (((sum1 + sum2 + sum3) / 110) * 100) * 0.35;
    this.total += this.average4;
  } else {
    this.a5.t19 = 0;
    this.a5.s19 = "0";
    alert("Out of range");
  }
}

submitResult(){
 // this.results.results = this.total;
 // this.results.assessment_Id = this.assessment[0].assessment_Id;
  //this.results.comment = this.comment;
 // this.results.group_Id = Number(this.student.studGroup);

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
