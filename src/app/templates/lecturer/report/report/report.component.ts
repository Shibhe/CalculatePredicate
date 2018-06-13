import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report/report.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  currentUser: any;
  reportResults: any[] = [];
  show: boolean = false;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    this.reportService.getReport()
               .subscribe((data) => {
                 this.reportResults.push(data);
                 console.log(this.reportResults);
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

  printPage(){
    this.show = true;
      setTimeout(() => {
        window.print();
      }, 30)
  }

}
