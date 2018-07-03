import { Component, OnInit } from '@angular/core';
import { Assessment3 } from 'src/app/model/assessment_3';

@Component({
  selector: 'app-third-assessment',
  templateUrl: './third-assessment.component.html',
  styleUrls: ['./third-assessment.component.css']
})
export class ThirdAssessmentComponent implements OnInit {
  status: string;
  left: number;
  total: number = 0;
  average2: number = 0;

  a3: Assessment3 = new Assessment3();
  constructor() { }

  ngOnInit() {
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.a3.t2 = 0;
       this.a3.s2 = "0";
       alert("Out of range, it must be between 0 - 5");
     }
    }
}

asse3(e){

  let as8 = e.target.value;

  if (as8.length == 0){
    this.a3.s3 = "0";
    // alert("0");
  } else{
     if (as8 <= 24){
       this.a3.t3 = as8;
       this.a3.s3 = "Complete";

       let sum1 = Number(this.a3.t1) + Number(this.a3.t2) + Number(this.a3.t3) + Number(this.a3.t4) + Number(this.a3.t5);
       let sum2 = Number(this.a3.t6) + Number(this.a3.t7) + Number(this.a3.t8) + Number(this.a3.t9) + Number(this.a3.t10);
       let sum3 = Number(this.a3.t11) + Number(this.a3.t12) + Number(this.a3.t13) + Number(this.a3.t14) + Number(this.a3.t15) + Number(this.a3.t16) + Number(this.a3.t17);
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
       this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;

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
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
    this.average2 = (((sum1 + sum2 + sum3) / 132) * 100) * 0.20;
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
    this.a3.t17 = 0;
    this.a3.s17 = "0";
    alert("Out of range, it must be between 0 - 20");
  }
}
}


}
