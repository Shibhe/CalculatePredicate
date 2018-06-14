import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from "../templates/login/login/login.component";
import { AdminComponent } from "../templates/admin/admin/admin.component";
import { AuthGaurd } from "src/app/config/auth";
import { GradingComponent } from "../templates/lecturer/grading/grading/grading.component";
import { AddLecturerComponent } from "../templates/admin/add-lecturer/add-lecturer.component";
import { AddStudentComponent } from "../templates/lecturer/add-student/add-student.component";
import { MainLecturerPageComponent } from "../templates/lecturer/main-lecturer-page/main-lecturer-page.component";
import { ReportComponent } from "src/app/templates/lecturer/report/report/report.component";

const appRouter: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path: 'home', component: LoginComponent }
    ,
   {
     path: 'user/lecturer-dashboard/report',
     component: ReportComponent
   },
    { path: 'user/admin-dashboard', component: AdminComponent, canActivate: [ AuthGaurd ], 
            children: 
            [
              {
                path: 'user/lecturer-dashboard/add-student',
                component: AddStudentComponent
              }
          ]
        
    },
    { path: 'user/lecturer-dashboard', component: MainLecturerPageComponent, canActivate: [ AuthGaurd ], children: [{
              path: 'user/admin-dashboard/add-lecture',
              component: AddLecturerComponent
    }] },
   
]
  
@NgModule({
    imports: [RouterModule.forRoot(appRouter, { enableTracing: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
  })

  export class RoutingModule{

  }