import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AssessmentService } from 'src/app/service/assessment.service';
import { HttpClientModule } from '@angular/common/http';
// import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   // Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [AssessmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
