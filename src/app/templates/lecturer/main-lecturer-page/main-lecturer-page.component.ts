import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-lecturer-page',
  templateUrl: './main-lecturer-page.component.html',
  styleUrls: ['./main-lecturer-page.component.css']
})
export class MainLecturerPageComponent implements OnInit {

  currentUser: any = null;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    console.log(this.currentUser);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }


}
