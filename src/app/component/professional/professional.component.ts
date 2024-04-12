import { Component } from '@angular/core';
import { FormGroup,FormControl,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalComponent {
  constructor (private fb:FormBuilder){ }

  get name(){
    return this.formUser.get('name') as FormControl;
  }
  get firtslastname(){
    return this.formUser.get('firtslastname') as FormControl;
  }
  get seconlastname(){
    return this.formUser.get('seconlastname')as FormControl
  }
  get idprofessional(){
    return this.formUser.get('idprofessional') as FormControl
  }
  get idexam(){
    return this.formUser.get('idexam') as FormControl
  }
  get examname(){
    return this.formUser.get('examname')as FormControl
  }
  get sexo(){
    return this.formUser.get('sexo')as FormControl
  }
  get occupation (){
      return this.formUser.get('occupation')as FormControl
  }
  get registrynumber(){
    return this.formUser.get('registrynumber')as FormControl
  }
  get productcode(){
    return this.formUser.get('productcode')as FormControl
  }
  get flexRadioDefaulttwo(){
    return this.formUser.get('flexRadioDefaulttwo')as FormControl
  }

  formUser: FormGroup =this.fb.group({
    'name':['',Validators.required],
    'firtslastname':['',Validators.required],
    'seconlastname':['',Validators.required],
    'idprofessional':['',Validators.required],
    'idexam':['',Validators.required],
    'examname':['',Validators.required],
    'sexo':['',Validators.required],
    'occupation':['',Validators.required],
    'registrynumber':['',Validators.required],
    'productcode':['',Validators.required],
    'flexRadioDefaulttwo':['',Validators.required]
  })
  procesar(){
    console.log(this.formUser.value)
  }
}
