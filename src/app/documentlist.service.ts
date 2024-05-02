import { Injectable } from '@angular/core';
import { persona } from './interfaces/persona';


@Injectable({
  providedIn: 'root'
})
export class DocumentlistService {
  //constructor() { }

  private Documenuser: persona[]=[{"idnumber":1,"name":"cosme","firtlastname":"julanito","seconlastname":"simpson","idexame":1,"sexo":"M","ordeprefix":44,"occupation":"ginecologo","idprofessional":4,"examcode":4,"typeexam":"ginecologia general mista" },
  {"idnumber":3,"name":"willi","firtlastname":"caro","seconlastname":"taborda","idexame":3,"sexo":"M","ordeprefix":33,"occupation":"pediatra","idprofessional":3,"examcode":3,"typeexam":"control general del bebe"},
  {"idnumber":2,"name":"melisa","firtlastname":"pelaes","seconlastname":"ramires","idexame":2,"sexo":"F","ordeprefix":22,"occupation":"odontologo","idprofessional":2,"examcode":2,"typeexam":"retenedores y molduras de dientes"},
  {"idnumber":4,"name":"sara","firtlastname":"mesa","seconlastname":"perz","idexame":4,"sexo":"F" ,"ordeprefix":11,"occupation":"cirujano","idprofessional":1,"examcode":1,"typeexam":"neurocirujia del epitteto derecho "},
  {"idnumber":5,"name":"yamile","firtlastname":"caro","seconlastname":"taborda","idexame":5,"sexo":"F" ,"ordeprefix":55,"occupation":"ortopedista","idprofessional":5,"examcode":5,"typeexam":"ortopedia general de dos rangos"},
  {"idnumber":6,"name":"sacarias","firtlastname":"piedras","seconlastname":"de la quebrada","idexame":6,"sexo":"M" ,"ordeprefix":66,"occupation":"otorrinolarinologo","idprofessional":6,"examcode":6,"typeexam":"ipoacausia mista bilateral"},
  {"idnumber":7,"name":"martha","firtlastname":"gaviria","seconlastname":"gomez","idexame":7,"sexo":"F" ,"ordeprefix":77,"occupation":"dermatologo","idprofessional":7,"examcode":7,"typeexam":"Impétigo superficial "},
  {"idnumber":8,"name":"aldolfo","firtlastname":"benistes","seconlastname":"ya","idexame":8,"sexo":"M" ,"ordeprefix":88,"occupation":"medico general","idprofessional":8,"examcode":8,"typeexam":"examen de sangre y toma de orina"},
  {"idnumber":9,"name":"marcos","firtlastname":"fiera","seconlastname":"contante","idexame":9,"sexo":"M" ,"ordeprefix":99,"occupation":"forence","idprofessional":9,"examcode":9,"typeexam":""},
  {"idnumber":10,"name":"sandra","firtlastname":"levis","seconlastname":"peres","idexame":10,"sexo":"F" ,"ordeprefix":100,"occupation":"cardilogo","idprofessional":10,"examcode":10,"typeexam":"cardio terapia en el ventriculo derecho"},
  {"idnumber":11,"name":"calos","firtlastname":"daveiva","seconlastname":"mora","idexame":11,"sexo":"M" ,"ordeprefix":111,"occupation":"uncologo","idprofessional":11,"examcode":11,"typeexam":"cancer de mamas dual"},
  {"idnumber":12,"name":"ppe","firtlastname":"guardiola","seconlastname":"sanches","idexame":12,"sexo":"M" ,"ordeprefix":222,"occupation":"oftalmologo","idprofessional":12,"examcode":12,"typeexam":"Astigmatismo degenerativo cronico"},
  {"idnumber":13,"name":"mery","firtlastname":"casa","seconlastname":"lopes","idexame":13,"sexo":"F" ,"ordeprefix":22,"occupation":"odontologo","idprofessional":2,"examcode":2,"typeexam":"caries e implante dental"},
  {"idnumber":14,"name":"lety","firtlastname":"meneces","seconlastname":"calpes","idexame":14,"sexo":"F" ,"ordeprefix":33,"occupation":"pediatra","idprofessional":3,"examcode":3,"typeexam":""},
  {"idnumber":15,"name":"sandra","firtlastname":"vivaldi","seconlastname":"escosr","idexame":15,"sexo":"F" ,"ordeprefix":77,"occupation":"dermatologo","idprofessional":7,"examcode":7,"typeexam":"eccema cronica degerativa cronica"},
]
  private data:persona[]= this.Documenuser;
  search(searchtext:string, key:string): persona[]{
    if(searchtext==='')
      return this.data=this.Documenuser
    else
    switch (key) {
      case"idnumber":
      return this.data=this.Documenuser.filter((registro:any)=>registro.idnumber==searchtext);
      case"occupation":
      return this.data= this.Documenuser.filter((registro:any)=>registro.occupation.toLowerCase()==searchtext.toLowerCase());
      case "firtlastname":
        return this.data= this.Documenuser.filter((registro:any)=>registro.firtlastname.toLowerCase()==searchtext.toLowerCase());
      case "sexo":
        return this.data= this.Documenuser.filter((registro:any)=>registro.sexo.toLowerCase()==searchtext.toLowerCase());
      case "name":
        return this.data= this.Documenuser.filter((registro:any)=>registro.name.toLowerCase()==searchtext.toLowerCase());
      case "idexame":
        return this.data= this.Documenuser.filter((registro:any)=>registro.idexame==searchtext);
      case "ordeprefix":
        return this.data= this.Documenuser.filter((registro:any)=>registro.ordeprefix==searchtext);   
      case "idprofessional":
          return this.data= this.Documenuser.filter((registro:any)=>registro.idprofessional==searchtext);   
      case "examcode":
          return this.data= this.Documenuser.filter((registro:any)=>registro.examcode==searchtext);      
      case "typeexam":
        return this.data= this.Documenuser.filter((registro:any)=>registro.typeexam.toLowerCase()==searchtext.toLowerCase());      
      
      default:
        return this.data=this.Documenuser
    }
      
  }
}

