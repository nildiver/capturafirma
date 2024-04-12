import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ids',
  templateUrl: './ids.component.html',
  styleUrls: ['./ids.component.css']
})
export class IdsComponent {
  constructor(private fb:FormBuilder){

  }
  get datexam(){
    return this.formUser.get('datexam') as FormControl
  }
  get namexam(){
    return this.formUser.get('namexam') as FormControl
  }
 
  get idexam(){
    return this.formUser.get('idexam') as FormControl
  }
  get flexRadioDefaulttwo(){
    return this.formUser.get('flexRadioDefaulttwo')as FormControl
  }
  get typereference(){
    return this.formUser.get('typereference')as FormControl
  }
  get descriptionexam(){
    return this.formUser.get('descriptionexam')as FormControl
  }

  public formUser:FormGroup = this.fb.group({
    'datexam':['',Validators.required],
    'namexam':['',Validators.required],
    'idexam':['',Validators.required],
    'flexRadioDefaulttwo':['',Validators.required],
    'typereference':['',Validators.required],
    'descriptionexam':['',Validators.required]
  })
  procesar(){
    console.log(this.formUser.value)
  }

}
