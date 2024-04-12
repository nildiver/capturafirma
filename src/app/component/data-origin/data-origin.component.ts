import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-data-origin',
  templateUrl: './data-origin.component.html',
  styleUrls: ['./data-origin.component.css']
})
export class DataOriginComponent {
  constructor(private fb: FormBuilder) {
  }
  get birthdate(){
    return this.formUser.get('birthdate') as FormControl
  }
  get name() {
    return this.formUser.get('name') as FormControl;
  }
  get firtlastname() {
    return this.formUser.get('firtlastname') as FormControl;
  }
  get seconlastname() {
    return this.formUser.get('seconlastname') as FormControl;
  }
  get idnumber() {
    return this.formUser.get('idnumber') as FormControl;
  }
  get idexame() {
    return this.formUser.get('idexame') as FormControl;
  }
  get idprofessional() {
    return this.formUser.get('idprofessional') as FormControl;
  }
  get flexRadioDefault() {
    return this.formUser.get('flexRadioDefault') as FormControl;
  }
  get flexRadioDefaulttwo() {
    return this.formUser.get('flexRadioDefault') as FormControl;
  }
  get ordeprefix(){
    return this.formUser.get('ordeprefix') as FormControl
  }
  get factorycode(){
    return this.formUser.get('factorycode') as FormControl
  }
  get ordenumber(){
    return this.formUser.get('ordenumber') as FormControl
  }
  get consecutivereference(){
    return this.formUser.get('consecutivereference') as FormControl
  }
  get submissiondate(){
    return this.formUser.get('submissiondate') as FormControl
  }
  get typeid(){
    return this.formUser.get('typeid')as FormControl
  }
  /*
    get email(){
      return this.formUser.get('email') as FormControl;
    }*/
  public formUser: FormGroup = this.fb.group({
    'typeid':['',Validators.required],
    'birthdate':['',Validators.required],
    'name': ['', Validators.required],
    'firtlastname': ['', Validators.required],
    'seconlastname': ['', Validators.required],
    'idnumber': ['', Validators.required],
    'idprofessional': ['', Validators.required],
    'idexame': ['', Validators.required],
    'flexRadioDefault': ['', Validators.required],
    'flexRadioDefaulttwo': ['', Validators.required],
    'ordeprefix':['',Validators.required],
    'factorycode':['',Validators.required],
    'ordenumber':['',Validators.required],
    'consecutivereference':['',Validators.required],
    'submissiondate':['',Validators.required]
    // 'email':['',[Validators.required,Validators.email]]
  });

  procesar() {
    console.log(this.formUser.value)
  }

}