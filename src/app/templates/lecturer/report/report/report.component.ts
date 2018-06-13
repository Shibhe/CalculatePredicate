import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report/report.service';

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
               }, (error) => {
                 console.log(error)
               })
  }

  printPage(){
    this.show = true;
      setTimeout(() => {
        window.print();
      }, 30)
  }

}
