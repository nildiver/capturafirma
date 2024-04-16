import { Injectable } from '@angular/core';
import {persona} from './interfaces/persona'

@Injectable({
  providedIn: 'root'
})
export class DocumentlistService {
  //constructor() { }

  private Documenuser: persona[]=[{"idnumber":1,"nombre":"cosme","firtlastname":"julanito","seconlastname":"simpson","idexame":1,"sexo":"M","descritionexam":"se practico una estrequiotomia y una colonoscopia profunda" },
  {"idnumber":2,"nombre":"melisa","firtlastname":"pelaes","seconlastname":"ramires","idexame":2,"sexo":"F","descritionexam":"la description on the exam for user name" },
  {"idnumber":3,"nombre":"willi","firtlastname":"caro","seconlastname":"taborda","idexame":3,"sexo":"M","descritionexam":"la description on the exam for user name" },
  {"idnumber":4,"nombre":"sara","firtlastname":"mesa","seconlastname":"perz","idexame":4,"sexo":"F","descritionexam":"la description on the exam for user name" }]
  private data:persona[]= this.Documenuser;
  search(searchtext:string, key:string): persona[]{
    if(searchtext==='')
      return this.data=this.Documenuser
    else
    switch (key) {
      case"ocupacion":
        return this.data=this.Documenuser.filter((registro:any)=>registro.idnumber==searchtext);
      case "priape":
        return this.data= this.Documenuser.filter((registro:any)=>registro.firtlastname.toLowerCase()==searchtext.toLowerCase());
      case "sexo":
        return this.data= this.Documenuser.filter((registro: any)=>registro.sexo==searchtext);
      case "name":
        return this.data= this.Documenuser.filter((registro: any)=>registro.nombre==searchtext);

      default:
        return this.data=this.Documenuser
    }
      
  }
}

