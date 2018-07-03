import { Component, OnInit } from '@angular/core';
import { Assessment4 } from 'src/app/model/assessment_4';

@Component({
  selector: 'app-fourth-assessment',
  templateUrl: './fourth-assessment.component.html',
  styleUrls: ['./fourth-assessment.component.css']
})
export class FourthAssessmentComponent implements OnInit {
  status: string;
  left: number;
  total: number = 0;
  average3: number = 0;

  a4: Assessment4 = new Assessment4();
  constructor() { }

  ngOnInit() {
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
    this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
    this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
    this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
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
    this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
    this.total += this.average3;

   
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
       this.total += this.average3;

     
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
       this.total += this.average3;

      
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
       this.average3 = (((sum1 + sum2 + sum3) / 80) * 100) * 0.22;
       this.total += this.average3;

      

     } else {
       this.a4.t17 = 0;
       this.a4.s17 = "0";
       alert("Out of range, it must be between 0 - 10");
     }
    }
}


}
