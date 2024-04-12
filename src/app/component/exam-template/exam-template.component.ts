import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-exam-template',
  templateUrl: './exam-template.component.html',
  styleUrls: ['./exam-template.component.css']
})
export class ExamTemplateComponent  {
  constructor (private fb:FormBuilder){ }

  get name(){
    return this.formUser.get('name') as FormControl;
  }

  get firtslastname(){
    return this.formUser.get('firtslastname')as FormControl;
  }
  get seconlastname(){
    return this.formUser.get('seconlastname')as FormControl;
  }

  get examname(){
    return this.formUser.get('examname')as FormControl;
  }

  get idprofessional(){
    return this.formUser.get('dprofessional')as FormControl;
  }
  get idexam(){
    return this.formUser.get('idexam')as FormControl;
  }
  get sexo(){
    return this.formUser.get('sexo')as FormControl;
  }
  get nameprofessional(){
    return this.formUser.get('nameprofessional') as FormControl;
  }

  get firtslastnameprofessinal(){
    return this.formUser.get('firtslastnameprofessinal')as FormControl;
  }

  
  get seconlastnameprofessinal(){
    return this.formUser.get(' seconlastnameprofessinal')as FormControl;
  }
  
  get registrynumber (){
    return this.formUser.get('registrynumber')as FormControl;
  }
  get occupation (){
    return this.formUser.get('occupation')as FormControl;
  }
   
  get productcode (){
    return this.formUser.get('productcode')as FormControl;
  }
  formUser: FormGroup =this.fb.group({
    'name':['',Validators.required],
     'firtslastname':['',Validators.required],
     'seconlastname':['',Validators.required],
     'idprofessional':['',Validators.required],
     'idexam':['',Validators.required],
     'examname':['',Validators.required],
     'sexo':['',Validators.required],
     'nameprofessional':['',Validators.required],
     'firtslastnameprofessinal':['',Validators.required],
     ' seconlastnameprofessinal':['',Validators.required],
     'occupation':['',Validators.required],
     'registrynumber':['',Validators.required],
     'productcode':['',Validators.required],
    
  })

  procesar(){
    console.log(this.formUser.value)
  }

}
