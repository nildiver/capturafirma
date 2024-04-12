import { Injectable } from '@angular/core';
import { HealthProfessional } from './interfaces/healthProfessional';

//import { ProfessionalService } from './professional.service';
@Injectable({
  providedIn: 'root'
})
export class ProfessionalService {
  private Profesionalsalud: HealthProfessional[] = [{"conpro":1,"nombre":"Kat","priape":"Casham","segape":"Finlason","ocupacion":"cirujano","sexo":"F"},
  {"conpro":2,"nombre":"Eolande","priape":"Scimonelli","segape":"Antyshev","ocupacion":"ortopedista","sexo":"F"},
  {"conpro":3,"nombre":"Padgett","priape":"Derrett","segape":"Vlasenkov","ocupacion":"ginecologo","sexo":"M"},
  {"conpro":4,"nombre":"Marget","priape":"McJarrow","segape":"Pogosian","ocupacion":"optolmologo","sexo":"F"},
  {"conpro":5,"nombre":"Valerie","priape":"Birdwhistell","segape":"Beardsley","ocupacion":"inyectologia","sexo":"F"},
  {"conpro":6,"nombre":"Tabbatha","priape":"Viel","segape":"Smallman","ocupacion":"psicologo","sexo":"F"},
  {"conpro":7,"nombre":"Lamont","priape":"Munroe","segape":"Tabor","ocupacion":"dietista","sexo":"M"},
  {"conpro":8,"nombre":"Seward","priape":"Pitcaithly","segape":"Carradice","ocupacion":"ortopedico","sexo":"M"},
  {"conpro":9,"nombre":"Amerigo","priape":"Jouhan","segape":"Siege","ocupacion":"neurocirujano","sexo":"M"},
  {"conpro":10,"nombre":"Sal","priape":"McIlmurray","segape":"Mapston","ocupacion":"cadiologo","sexo":"F"},
  {"conpro":11,"nombre":"Hildagard","priape":"Cottis","segape":"Mathiasen","ocupacion":"dermatologo","sexo":"F"},
  {"conpro":12,"nombre":"Dalia","priape":"Hercules","segape":"Davydzenko","ocupacion":"pediatra","sexo":"F"},
  {"conpro":13,"nombre":"Selie","priape":"Burgane","segape":"Plan","ocupacion":"medico general","sexo":"F"},
  {"conpro":14,"nombre":"Sandor","priape":"Bremley","segape":"Ciobutaru","ocupacion":"ginecostetra","sexo":"M"},
  {"conpro":15,"nombre":"Sidonia","priape":"McLenaghan","segape":"Daniel","ocupacion":"odontologo","sexo":"F"},
  {"conpro":16,"nombre":"Dot","priape":"Kitto","segape":"Rebanks","ocupacion":"terapeuta","sexo":"F"},
  {"conpro":17,"nombre":"Kurt","priape":"Snare","segape":"Gaskell","ocupacion":"programador","sexo":"M"},
  {"conpro":18,"nombre":"Ingamar","priape":"Edwick","segape":"Jacquemy","ocupacion":"mesero","sexo":"M"},
  {"conpro":19,"nombre":"Annice","priape":"Midford","segape":"Fullard","ocupacion":"mago","sexo":"F"},
  {"conpro":20,"nombre":"Nannie","priape":"Edgerton","segape":"Vallentin","ocupacion":"bailarin","sexo":"F"},
  {"conpro":21,"nombre":"Nilton","priape":"Caro","segape":"Taborda","ocupacion":"programador","sexo":"M"}]

  private data:HealthProfessional[]= this.Profesionalsalud;
  search(searchtext:string, key:string): HealthProfessional[]{
    if(searchtext==='')
      return this.data=this.Profesionalsalud
    else
    switch (key) {
      case"ocupacion":
        return this.data=this.Profesionalsalud.filter((registro:any)=>registro.ocupacion==searchtext);
      case "priape":
        return this.data= this.Profesionalsalud.filter((registro:any)=>registro.priape.toLowerCase()==searchtext.toLowerCase());
      case "sexo":
        return this.data= this.Profesionalsalud.filter((registro: any)=>registro.sexo==searchtext);
      case "name":
        return this.data= this.Profesionalsalud.filter((registro: any)=>registro.nombre==searchtext);

      default:
        return this.data=this.Profesionalsalud
    }
      
  }
}
