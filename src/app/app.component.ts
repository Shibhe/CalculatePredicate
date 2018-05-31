import { Component } from '@angular/core';
import { Assessment5 } from './model/assessment_5';
import { Assessment4 } from './model/assessment_4';
import { Assessment3 } from './model/assessment_3';
import { Assessment2 } from './model/assessment_2';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Assessment1 } from 'src/app/model/assessment_1';
import { AssessmentService } from 'src/app/service/assessment.service';
import { Student } from 'src/app/model/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  student: Student = new Student();
  left: number = 0;
  

  a1: Assessment1 = new Assessment1();
  a2: Assessment2 = new Assessment2();
  a3: Assessment3 = new Assessment3();
  a4: Assessment4 = new Assessment4();
  a5: Assessment5 = new Assessment5();

  average: number = 0;
  average2: number = 0;
  average3: number = 0;
  average4: number = 0;
  total: number = 8;
  status: string = null;

  assessment: any[] = [];

  constructor(private _AssessmentService: AssessmentService) {}
  

  ngOnInit() {

    if (this.total < 50){
      this.left = 50 - Number(this.total);
    }
    // assessment 1
    this.a1.s1 = "0";
    this.a1.s2 = "0";
    this.a1.s3 = "0";
    this.a1.s4 = "0";
    this.a1.s5 = "0";
    this.a1.s6 = "0";
    this.a1.s7 = "0";
    this.a1.s8 = "0";

    // Assessment 2
    this.a2.t1 = "Complete";
    this.a2.t2 = "Complete";

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

    this._AssessmentService.getAllAssessment()
                           .subscribe((data) => {
                             this.assessment = data;


                             console.log(this.assessment);
                           });
  }

  // Assessment 1
  ass1(e){
     let as1 = e.target.value;

     if (as1 <= 2){
       this.a1.t1 = as1;

       this.a1.s1 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;
       
     } else {
      this.a1.t1 = 0;
      this.a1.s1 = "0";
       alert("Invalid number");
     }
  }

  ass2(e){
    let as12 = e.target.value;

     if (as12 == 0 || as12 == 1){
       this.a1.t2 = as12;
       this.a1.s2 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;

     } else {
      this.a1.t2 = 0;
      this.a1.s2 = "0";
       alert("Invalid number");
     }
  }

  ass3(e){
    let as3 = e.target.value;

     if (as3 == 0 || as3 == 1){
       this.a1.t3 = as3;
       this.a1.s3 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;

     } else {
      this.a1.t3 = 0;
      this.a1.s3 = "0";
       alert("Invalid number");
     }
  }

  ass4(e){
    let as4 = e.target.value;

     if (as4 <= 2){
       this.a1.t4 = as4;
       this.a1.s4 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;
     } else {
       this.a1.t4 = 0;
       this.a1.s4 = "0";
       alert("Invalid number");
     }
  }

  ass5(e){
    let as5 = e.target.value;

     if (as5 <= 3){
       this.a1.t5 = as5;
       this.a1.s5 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;
     } else {
       this.a1.t5 = 0;
       this.a1.s5 = "5";
       alert("Invalid number");
     }
  }

  ass6(e){
    let as6 = e.target.value;

     if (as6 <= 2){
       this.a1.t6 = as6;
       this.a1.s6 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;
     } else {
       this.a1.t6 = 0;
       this.a1.s6 = "0";
       alert("Invalid number");
     }
  }

  ass7(e){
    let as7 = e.target.value;

     if (as7 <= 2){
       this.a1.t7 = as7;
       this.a1.s7 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;
     } else {
       this.a1.t7 = 0;
       this.a1.s7 = "0";
       alert("Invalid number");
     }
  }

  ass8(e){
    let as8 = e.target.value;

     if (as8 <= 2){
       this.a1.t8 = as8;
       this.a1.s8 = "Complete";
       this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)) / 15) * 100) * 0.12;
       this.total += this.average;

       if (this.total < 50){
         this.left = 50 - Number(this.total);
         this.status = "Fail";
       }else {

        if (this.total >= 74){
          this.status = "PD";
        } else {
          this.status = "Pass";
        }
        alert("Passed");
        this.left = 0;
      }

      } else {
       this.a1.t8 = 0;
       this.a1.s8 = "0";
       alert("Invalid number");
     }
  }

  // Assessment 2

  // Assessment 3
asse1(e){

  let as8 = e.target.value;

     if (as8 <= 10){
       this.a3.t1 = as8;
       this.a3.s1 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
       this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

     } else {
       this.a3.t1 = 0;
       this.a3.s1 = "0";
       alert("Invalid number");
     }
}

asse2(e){

  let as8 = e.target.value;

     if (as8 <= 2){
       this.a3.t2 = as8;
       this.a3.s2 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
       this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

     } else {
       this.a3.t2 = 0;
       this.a3.s2 = "0";
       alert("Invalid number");
     }
}

asse3(e){

  let as8 = e.target.value;

     if (as8 <= 7){
       this.a3.t3 = as8;
       this.a3.s3 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
       this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

     } else {
       this.a3.t3 = 0;
       this.a3.s3 = "0";
       alert("Invalid number");
     }
}

asse4(e){

  let as8 = e.target.value;

  if (as8 <= 24){
    this.a3.t4 = as8;
    this.a3.s4 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t4 = 0;
    this.a3.s4 = "0";
    alert("Invalid number");
  }
}

asse5(e){
  let as8 = e.target.value;

  if (as8 <= 6){
    this.a3.t5 = as8;
    this.a3.s5 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t5 = 0;
    this.a3.s5 = "0";
    alert("Invalid number");
  }

}

asse6(e){

  let as8 = e.target.value;

  if (as8 <= 3){
    this.a3.t6 = as8;
    this.a3.s6 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t6 = 0;
    this.a3.s6 = "0";
    alert("Invalid number");
  }
}

asse7(e){

  let as8 = e.target.value;

  if (as8 <= 2){
    this.a3.t7 = as8;
    this.a3.s7 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t7 = 0;
    this.a3.s7 = "0";
    alert("Invalid number");
  }
}

asse8(e){

  let as8 = e.target.value;

  if (as8 <= 2){
    this.a3.t8 = as8;
    this.a3.s8 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t8 = 0;
    this.a3.s8 = "0";
    alert("Invalid number");
  }
}

asse9(e){

  let as8 = e.target.value;

  if (as8 <= 4){
    this.a3.t9 = as8;
    this.a3.s9 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

    

  } else {
    this.a3.t9 = 0;
    this.a3.s9 = "0";
    alert("Invalid number");
  }
}

asse10(e){
  let as8 = e.target.value;

  if (as8 <= 2){
    this.a3.t10 = as8;
    this.a3.s10 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t10 = 0;
    this.a3.s10 = "0";
    alert("Invalid number");
  }
}

asse11(e){
  let as8 = e.target.value;

  if (as8 <= 8){
    this.a3.t11 = as8;
    this.a3.s11 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t11 = 0;
    this.a3.s11 = "0";
    alert("Invalid number");
  }

}

asse12(e){
  let as8 = e.target.value;

     if (as8 <= 5){
       this.a3.t12 = as8;
       this.a3.s12 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
       this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

     } else {
       this.a3.t12 = 0;
       this.a3.s12 = "0";
       alert("Invalid number");
     }

}

asse13(e){
  let as8 = e.target.value;

  if (as8 <= 3){
    this.a3.t13 = as8;
    this.a3.s13 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

  } else {
    this.a3.t13 = 0;
    this.a3.s13 = "0";
    alert("Invalid number");
  }

}

asse14(e){
  let as8 = e.target.value;

     if (as8 <= 2){
       this.a3.t14 = as8;
       this.a3.s14 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
       this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;
       this.total += this.average2;

       if (this.total < 50){
        this.left = 50 - Number(this.total);
        this.status = "Fail";
      }else {

       if (this.total >= 74){
         this.status = "PD";
       } else {
         this.status = "Pass";
       }
       alert("Passed");
       this.left = 0;
     }
     } else {
       this.a3.t14 = 0;
       this.a3.s14 = "0";
       alert("Invalid number");
     }
}

asse15(e){
  let as8 = e.target.value;

  if (as8 <= 10){
    this.a3.t15 = as8;
    this.a3.s15 = "Complete";

    let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
    let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
    let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15);
    this.average2 = (((sum1 + sum2 + sum3) / 78) * 100) * 0.15;

    

  } else {
    this.a3.t15 = 0;
    this.a3.s15 = "0";
    alert("Invalid number");
  }
}

// Assessment 4

asses1(e){

  let as8 = e.target.value;

     if (as8 <= 3){
       this.a4.t1 = as8;
       this.a4.s1 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t1 = 0;
       this.a4.s1 = "0";
       alert("Invalid number");
     }
}

asses2(e){

  let as8 = e.target.value;

     if (as8 <= 2){
       this.a4.t2 = as8;
       this.a4.s2 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t2 = 0;
       this.a4.s2 = "0";
       alert("Invalid number");
     }
}

asses3(e){

  let as8 = e.target.value;

     if (as8 <= 3){
       this.a4.t3 = as8;
       this.a4.s3 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t3 = 0;
       this.a4.s3 = "0";
       alert("Invalid number");
     }
}

asses4(e){

  let as8 = e.target.value;

     if (as8 <= 2){
       this.a4.t4 = as8;
       this.a4.s4 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t4 = 0;
       this.a4.s4 = "0";
       alert("Invalid number");
     }
}

asses5(e){
  let as8 = e.target.value;

     if (as8 <= 2){
       this.a4.t5 = as8;
       this.a4.s5 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t5 = 0;
       this.a4.s5 = "0";
       alert("Invalid number");
     }

}

asses6(e){

  let as8 = e.target.value;

     if (as8 <= 4){
       this.a4.t6 = as8;
       this.a4.s6 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t6 = 0;
       this.a4.s6 = "0";
       alert("Invalid number");
     }
}

asses7(e){

  let as8 = e.target.value;

  if (as8 <= 4){
    this.a4.t7 = as8;
    this.a4.s7 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
    let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
    let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
    this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

  } else {
    this.a4.t7 = 0;
    this.a4.s7 = "0";
    alert("Invalid number");
  }
}

asses8(e){

  let as8 = e.target.value;

  if (as8 <= 2){
    this.a4.t8 = as8;
    this.a4.s8 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
    let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
    let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
    this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

  } else {
    this.a4.t8 = 0;
    this.a4.s8 = "0";
    alert("Invalid number");
  }
}

asses9(e){

  let as8 = e.target.value;

     if (as8 <= 1){
       this.a4.t9 = as8;
       this.a4.s9 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t9 = 0;
       this.a4.s9 = "0";
       alert("Invalid number");
     }
}

asses10(e){
  let as8 = e.target.value;

     if (as8 <= 3){
       this.a4.t10 = as8;
       this.a4.s10 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t10 = 0;
       this.a4.s10 = "0";
       alert("Invalid number");
     }
}

asses11(e){
  let as8 = e.target.value;

     if (as8 <= 4){
       this.a4.t11 = as8;
       this.a4.s11 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t11 = 0;
       this.a4.s11 = "0";
       alert("Invalid number");
     }
}

asses12(e){
  let as8 = e.target.value;

  if (as8 <= 3){
    this.a4.t12 = as8;
    this.a4.s12 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
    let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
    let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
    this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

  } else {
    this.a4.t12 = 0;
    this.a4.s12 = "0";
    alert("Invalid number");
  }
}

asses13(e){
  let as8 = e.target.value;

     if (as8 <= 5){
       this.a4.t13 = as8;
       this.a4.s13 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t13 = 0;
       this.a4.s13 = "0";
       alert("Invalid number");
     }

}

asses14(e){
  let as8 = e.target.value;

  if (as8 <= 4){
    this.a4.t14 = as8;
    this.a4.s14 = "Complete";

    let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
    let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
    let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
    this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

  } else {
    this.a4.t14 = 0;
    this.a4.s14 = "0";
    alert("Invalid number");
  }
}

asses15(e){
  let as8 = e.target.value;

     if (as8 <= 6){
       this.a4.t15 = as8;
       this.a4.s15 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t15 = 0;
       this.a4.s15 = "0";
       alert("Invalid number");
     }
}

asses16(e){
  let as8 = e.target.value;

     if (as8 <= 6){
       this.a4.t16 = as8;
       this.a4.s16 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;

     } else {
       this.a4.t16 = 0;
       this.a4.s16 = "0";
       alert("Invalid number");
     }
}

asses17(e){
  let as8 = e.target.value;

     if (as8 <= 1){
       this.a4.t17 = as8;
       this.a4.s17 = "Complete";

       let sum1 = Number(this.a4.t1) + Number(this.a4.t2) + Number(this.a4.t3) + Number(this.a4.t4) + Number(this.a4.t5);
       let sum2 = Number(this.a4.t6) + Number(this.a4.t7) + Number(this.a4.t8) + Number(this.a4.t9) + Number(this.a4.t10);
       let sum3 = Number(this.a4.t11) + Number(this.a4.t12) + Number(this.a4.t13) + Number(this.a4.t14) + Number(this.a4.t15) + Number(this.a4.t16) + Number(this.a4.t17);
       this.average3 = (((sum1 + sum2 + sum3) / 54) * 100) * 0.22;
       this.total += this.average3;

       if (this.total < 50){
        this.left = 50 - Number(this.total);
        this.status = "Fail";
      }else {

       if (this.total >= 74){
         this.status = "PD";
       } else {
         this.status = "Pass";
       }
       alert("Passed");
       this.left = 0;
     }

     } else {
       this.a4.t17 = 0;
       this.a4.s17 = "0";
       alert("Invalid number");
     }
}

// Assessment 5

assess1(e){

  let as8 = e.target.value;

     if (as8 <= 8){
       this.a5.t1 = as8;
       this.a5.s1 = "Complete";

       let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
       let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
       let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
       this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

     } else {
       this.a5.t1 = 0;
       this.a5.s1 = "0";
       alert("Invalid number");
     }
}

assess2(e){

  let as8 = e.target.value;

  if (as8 <= 2){
    this.a5.t2 = as8;
    this.a5.s2 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t2 = 0;
    this.a5.s2 = "0";
    alert("Invalid number");
  }
}

assess3(e){

  let as8 = e.target.value;

  if (as8 <= 4){
    this.a5.t3 = as8;
    this.a5.s3 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t3 = 0;
    this.a5.s3 = "0";
    alert("Invalid number");
  }
}

assess4(e){

  let as8 = e.target.value;

  if (as8 <= 4){
    this.a5.t4 = as8;
    this.a5.s4 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t4 = 0;
    this.a5.s4 = "0";
    alert("Invalid number");
  }
}

assess5(e){
  let as8 = e.target.value;

  if (as8 <= 2){
    this.a5.t5 = as8;
    this.a5.s5 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t5 = 0;
    this.a5.s5 = "0";
    alert("Invalid number");
  }

}

assess6(e){

  let as8 = e.target.value;

  if (as8 <= 6){
    this.a5.t6 = as8;
    this.a5.s6 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t6 = 0;
    this.a5.s6 = "0";
    alert("Invalid number");
  }
}

assess7(e){

  let as8 = e.target.value;

  if (as8 <= 6){
    this.a5.t7 = as8;
    this.a5.s7 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t7 = 0;
    this.a5.s7 = "0";
    alert("Invalid number");
  }
}

assess8(e){

  let as8 = e.target.value;

  if (as8 <= 3){
    this.a5.t8 = as8;
    this.a5.s8 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t8 = 0;
    this.a5.s8 = "0";
    alert("Invalid number");
  }
}

assess9(e){

  let as8 = e.target.value;

  if (as8 <= 24){
    this.a5.t9 = as8;
    this.a5.s9 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t9 = 0;
    this.a5.s9 = "0";
    alert("Invalid number");
  }
}

assess10(e){
  let as8 = e.target.value;

  if (as8 <= 16){
    this.a5.t10 = as8;
    this.a5.s10 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t10 = 0;
    this.a5.s10 = "0";
    alert("Invalid number");
  }
}

assess11(e){
  let as8 = e.target.value;

  if (as8 <= 4){
    this.a5.t11 = as8;
    this.a5.s11 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t11 = 0;
    this.a5.s11 = "0";
    alert("Invalid number");
  }

}

assess12(e){
  let as8 = e.target.value;

  if (as8 <= 6){
    this.a5.t12 = as8;
    this.a5.s12 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t12 = 0;
    this.a5.s12 = "0";
    alert("Invalid number");
  }

}

assess13(e){
  let as8 = e.target.value;

  if (as8 <= 4){
    this.a5.t13 = as8;
    this.a5.s13 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t13 = 0;
    this.a5.s13 = "0";
    alert("Invalid number");
  }

}

assess14(e){
  let as8 = e.target.value;

  if (as8 <= 5){
    this.a5.t14 = as8;
    this.a5.s14 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;

  } else {
    this.a5.t14 = 0;
    this.a5.s14 = "0";
    alert("Invalid number");
  }
}

assess15(e){
  let as8 = e.target.value;

  if (as8 <= 5){
    this.a5.t15 = as8;
    this.a5.s15 = "Complete";

    let sum1 = Number(this.a5.t1) + Number(this.a5.t2) + Number(this.a5.t3) + Number(this.a5.t4) + Number(this.a5.t5);
    let sum2 = Number(this.a5.t6) + Number(this.a5.t7) + (Number(this.a5.t8) * 4) + Number(this.a5.t9) + Number(this.a5.t10);
    let sum3 = Number(this.a5.t11) + Number(this.a5.t12) + (Number(this.a5.t13) * 4) + Number(this.a5.t14) + Number(this.a5.t15);
    this.average4 = (((sum1 + sum2 + sum3) / 120) * 100) * 0.12;
    this.total += this.average4;

    if (this.total < 50){
      this.left = 50 - Number(this.total);
      this.status = "Fail";
    }else {

     if (this.total >= 74){
       this.status = "PD";
     } else {
       this.status = "Pass";
     }
     alert("Passed");
     this.left = 0;
   }
  } else {
    this.a5.t15 = 0;
    this.a5.s15 = "0";
    alert("Invalid number");
  }
}

    submitResult(){
      this._AssessmentService.submitResults(this.student, this.total, this.status)
                              .subscribe((data) => {

                                if (data.success == 1){
                                  alert(data.message);
                                } else {
                                  alert(data.message);
                                }
                                console.log(data);
                              }, (error) => {
                                console.log(error);
                              })
    }
}
