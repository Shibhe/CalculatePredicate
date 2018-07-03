import { Component, OnInit } from '@angular/core';
import { Assessment2 } from 'src/app/model/assessment_2';

@Component({
  selector: 'app-second-assessment',
  templateUrl: './second-assessment.component.html',
  styleUrls: ['./second-assessment.component.css']
})
export class SecondAssessmentComponent implements OnInit {

  status: string;
  left: number;
  total: number = 0;
  average11: number = 0;

  a2: Assessment2 = new Assessment2();

  constructor() { }

  ngOnInit() {
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
      this.average11 = (((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7))/ 36) * 100) * 0.15;
      this.total += this.average11;

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
      this.average11 = (((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7))/ 36) * 100) * 0.15;

      this.total += this.average11;

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
      this.average11 = (((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7))/ 36) * 100) * 0.15;

      this.total += this.average11;

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
      this.average11 = (((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7))/ 36) * 100) * 0.15;
      this.total += this.average11;

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
      this.average11 = (((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7))/ 36) * 100) * 0.15;
      this.total += this.average11;

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
      this.average11 = (((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7))/ 36) * 100) * 0.15;
      this.total += this.average11;

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
      this.a2.t6 = 0;
      this.a2.s6 = "0";
      alert("Out of range");
    }
  }
 }

 as7(e){
   let as7 = e.target.value;
   if (as7.length == 0){
    this.a2.s1 = "0";
    // alert("0");
  } else{
    if (as7 == 1){
      this.a2.t7 = as7;
      this.a2.s7 = "Complete";
      this.average11 = (((Number(this.a2.t1) + Number(this.a2.t2) + Number(this.a2.t3) + Number(this.a2.t4) + Number(this.a2.t5) + Number(this.a2.t6) + Number(this.a2.t7)) / 36) * 100) * 0.15;
      this.total += this.average11;

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
      this.a2.t7 = 0;
      this.a2.s7 = "0";
      alert("Out of range");
    }
  }
 }


}
