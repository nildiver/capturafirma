import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DataOriginComponent } from './component/data-origin/data-origin.component';
import { ProfessionalComponent } from './component/professional/professional.component';
import { IdsComponent } from './component/ids/ids.component';
import { ConsentComponent } from './component/consent/consent.component';
import { ExamTemplateComponent } from './component/exam-template/exam-template.component';
import { TemplateComponent } from './component/template/template.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { RoutingModule } from './routing/routing.module';
import { TutorComponent } from './component/tutor/tutor.component';
import { FilterComponent } from './component/filter/filter.component';
import { ProfessionalService } from './professional.service';
import { DataService } from './data.service';
import { DocumentlistComponent } from './component/documentlist/documentlist.component';
import { AnimationComponent } from './component/animation/animation.component';
//import { MatButtonModule}from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    DataOriginComponent,
    ProfessionalComponent,
    IdsComponent,
    ConsentComponent,
    ExamTemplateComponent,
    TemplateComponent,
    TutorComponent,
    FilterComponent,
    DocumentlistComponent,
    AnimationComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
   
  ],
  providers: [ProfessionalService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
