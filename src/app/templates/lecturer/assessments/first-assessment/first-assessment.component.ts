import { Component, OnInit } from '@angular/core';
import { Assessment1 } from 'src/app/model/assessment_1';

@Component({
  selector: 'app-first-assessment',
  templateUrl: './first-assessment.component.html',
  styleUrls: ['./first-assessment.component.css']
})
export class FirstAssessmentComponent implements OnInit {
  status: string;
  left: number;
  total: number = 0;
  average: number = 0;

  a1: Assessment1 = new Assessment1();
  
  constructor() { }

  ngOnInit() {
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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;

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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;

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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;

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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
    
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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
    
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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
    
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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8)+ Number(this.a1.t9)) / 30) * 100) * 0.1;
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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) / 30) * 100) * 0.1;
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
      this.average = (((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4) + Number(this.a1.t5) + Number(this.a1.t6) + Number(this.a1.t7) + Number(this.a1.t8) + Number(this.a1.t9)) / 30) * 100) * 0.1;
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
      this.a1.t9 = 0;
      this.a1.s9 = "0";
      alert("Out of range, it must be between 0 - 7");
    }
   }
 }


}
