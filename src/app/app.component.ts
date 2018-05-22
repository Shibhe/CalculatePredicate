import { Component } from '@angular/core';
import { Assessment1 } from './model/assessment_1';
import { Assessment17 } from './model/assessment_17';
import { Assessment16 } from './model/assessment_16';
import { Assessment15 } from './model/assessment_15';
import { Assessment14 } from './model/assessment_14';
import { Assessment13 } from './model/assessment_13';
import { Assessment12 } from './model/assessment_12';
import { Assessment11 } from './model/assessment_11';
import { Assessment9 } from './model/assessment_9';
import { Assessment10 } from './model/assessment_10';
import { Assessment8 } from './model/assessment_8';
import { Assessment7 } from './model/assessment_7';
import { Assessment6 } from './model/assessment_6';
import { Assessment5 } from './model/assessment_5';
import { Assessment4 } from './model/assessment_4';
import { Assessment3 } from './model/assessment_3';
import { Assessment2 } from './model/assessment_2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  a1: Assessment1 = new Assessment1();
  a2: Assessment2 = new Assessment2();
  a3: Assessment3 = new Assessment3();
  a4: Assessment4 = new Assessment4();
  a5: Assessment5 = new Assessment5();
  a6: Assessment6 = new Assessment6();
  a7: Assessment7 = new Assessment8();
  a8: Assessment8 = new Assessment8();
  a9: Assessment9 = new Assessment9();
  a10: Assessment10 = new Assessment10();
  a11: Assessment11 = new Assessment11();
  a12: Assessment12 = new Assessment12();
  a13: Assessment13 = new Assessment13();
  a14: Assessment14 = new Assessment14();
  a15: Assessment15 = new Assessment15();
  a16: Assessment16 = new Assessment16();
  a17: Assessment17 = new Assessment17();

  constructor() {}
  average: number = 0;

  ass1(e){
     let as1 = e.target.value;

     if (as1 <= 2){
       this.a1.t1 = as1;
     } else {
      this.a1.t1 = null;
       alert("Invalid number");
     }
  }

  ass2(e){
    let as12 = e.target.value;

     if (as12 == 0 || as12 == 1){
       this.a1.t2 = as12;
     } else {
      this.a1.t2 = null;
       alert("Invalid number");
     }
  }

  ass3(e){
    let as3 = e.target.value;

     if (as3 == 0 || as3 == 1){
       this.a1.t3 = as3;
     } else {
      this.a1.t3 = null;
       alert("Invalid number");
     }
  }

  ass4(e){
    let as4 = e.target.value;

     if (as4 <= 2){
       this.a1.t4 = as4;
       this.average = ((Number(this.a1.t1) + Number(this.a1.t2) + Number(this.a1.t3) + Number(this.a1.t4)) / 12) / 0.12;
     } else {
       this.a1.t4 = null;
       alert("Invalid number");
     }
  }
}
