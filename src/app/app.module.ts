import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AssessmentService } from 'src/app/service/assessment.service';
import { HttpClientModule } from '@angular/common/http';
import { GradingComponent } from './templates/lecturer/grading/grading/grading.component';
import { LoginComponent } from './templates/login/login/login.component';
import { AddStudentComponent } from './templates/lecturer/add-student/add-student.component';
import { AdminComponent } from './templates/admin/admin/admin.component';
import { AddLecturerComponent } from './templates/admin/add-lecturer/add-lecturer.component';
import { RouterModule } from '@angular/router'
import { RoutingModule } from './config/routes';
import { AuthGaurd } from 'src/app/config/auth';
import { MainLecturerPageComponent } from './templates/lecturer/main-lecturer-page/main-lecturer-page.component';
import { ReportComponent } from './templates/lecturer/report/report/report.component';
import { FirstAssessmentComponent } from './templates/lecturer/assessments/first-assessment/first-assessment.component';
import { SecondAssessmentComponent } from './templates/lecturer/assessments/second-assessment/second-assessment.component';
import { ThirdAssessmentComponent } from './templates/lecturer/assessments/third-assessment/third-assessment.component';
import { FourthAssessmentComponent } from './templates/lecturer/assessments/fourth-assessment/fourth-assessment.component';
import { FifthAssessmentComponent } from './templates/lecturer/assessments/fifth-assessment/fifth-assessment.component';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent,
    GradingComponent,
    LoginComponent,
    AddStudentComponent,
    AdminComponent,
    AddLecturerComponent,
    MainLecturerPageComponent,
    ReportComponent,
    FirstAssessmentComponent,
    SecondAssessmentComponent,
    ThirdAssessmentComponent,
    FourthAssessmentComponent,
    FifthAssessmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
   // Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [AssessmentService, AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
