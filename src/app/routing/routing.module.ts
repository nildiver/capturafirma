import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DataOriginComponent } from '../component/data-origin/data-origin.component';
import { ConsentComponent } from '../component/consent/consent.component';
import { ProfessionalComponent } from '../component/professional/professional.component';
import { ExamTemplateComponent } from '../component/exam-template/exam-template.component';
import { IdsComponent } from '../component/ids/ids.component';
import { TemplateComponent } from '../component/template/template.component';
import { TutorComponent } from '../component/tutor/tutor.component';
import { FilterComponent } from '../component/filter/filter.component';
import { DocumentlistComponent } from '../component/documentlist/documentlist.component';

const routes:Routes=[
  { 
    path:'',
    redirectTo:'/data-origin',
    pathMatch:'full'
  },
  {
    path:'data-origin',
      component: DataOriginComponent
  },
  { 
    path:'consent',
    component: ConsentComponent
   },
   {
     path:'professional',
     component: ProfessionalComponent
   },
   {
    path:'exam-template',
    component: ExamTemplateComponent
  },
  {
    path:'ids',
    component: IdsComponent
  },
  {
    path:'template',
    component: TemplateComponent
  },
  {
    path:'tutor',
    component:TutorComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },
  {
    path:'ducumentlist',
    component:DocumentlistComponent
  }
  
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class RoutingModule { }
