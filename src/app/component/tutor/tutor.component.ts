import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {

  constructor(private fb:FormBuilder){

  }
  get name(){
    return this.formUser.get('name')as FormControl
  }
  get firtlastname(){
    return this.formUser.get('firtlastname')as FormControl
  }
  get seconlastname(){
    return this.formUser.get('seconlastname')as FormControl
  }
 
  get idnumber(){
    return this.formUser.get('idnumber')as FormControl
  }
  get typeid(){
    return this.formUser.get('typeid')as FormControl
  }
  public formUser:FormGroup =this.fb.group({
    'name':['',Validators.required],
    'firtlastname':['',Validators.required],
    'seconlastname':['',Validators.required],
    'idnumber':['',Validators.required],
    'typeid':['',Validators.required]

  })
  procesar(){
    console.log(this.formUser.value)
  }
}
