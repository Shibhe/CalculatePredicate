import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report/report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StudentService } from '../../../../service/student/student.service';
import { ExcelServiceService } from '../../../../service/export/excel-service.service';
import { ExportResults } from '../../../../model/exportResults';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  currentUser: any;
  reportResults: any[] = [];
  updateResults: any[] = [];
  status: any = null;
  show: boolean = false;
  result: any[] = [];
  total: number = 0;
  exportResults: ExportResults = new ExportResults();
  data: any[]   = [];

  constructor(private reportService: ReportService,
              private studentService: StudentService,
              private excelService:ExcelServiceService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    console.log(this.currentUser);
    this.reportService.getReport(this.currentUser.staff_Id)
               .subscribe((data) => {
                 this.updateResults.push(data);
                 this.status = "";

                 for (let i = 0; i < this.updateResults["0"].student_Results.length; i++){
                   this.total = 0;
                   for (let x = 0; x < this.updateResults["0"].student_Results[i].report.length; x++){
                      this.total = this.total + Number(this.updateResults["0"].student_Results[i].report[x].results)
                   }

                  if (this.total == 49){
                     this.total = 50;
                  }

                  console.log(this.total);
                   if (this.total <= 48){
                     this.status = "Fail";
                   } else if (this.total <= 74){
                     this.status = "Pass";
                   } else{
                     this.status = "PD";
                   }

                   this.studentService.updateMarks(this.status, this.total, this.updateResults["0"].student_Results[i].student_Id)
                                      .subscribe((data) => {
                                       console.log(data); 
                                      });
                 }
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
                }
               });


         this.reportService.getReport(this.currentUser.staff_Id)
                           .subscribe((data) => {
                             this.reportResults.push(data);
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
                               }
                           });

  }

  exportPage() {

    for (let x = 0; x < this.reportResults["0"].student_Results.length; x++){
      this.exportResults = {
        "Group":          this.reportResults["0"].student_Results[x].Group_Name,
        "Name":           this.reportResults["0"].student_Results[x].student_FName,
        "Surname":        this.reportResults["0"].student_Results[x].student_LName,
        "Status":         this.reportResults["0"].student_Results[x].student_Status,
        "Marks":          this.reportResults["0"].student_Results[x].student_Marks,
        "Staff_No":       this.currentUser.staff_Number,
        "Student_Number": this.reportResults["0"].student_Results[x].student_Number,
      }

      this.data.push(this.exportResults);
      
    }

    this.excelService.exportAsExcelFile(this.data, "DSO34BT");
    
  }

  printPage(){
    this.show = true;
      setTimeout(() => {
        window.print();
      }, 30)
  }
}
