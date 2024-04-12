import { Component, OnInit } from '@angular/core';
import { HealthProfessional } from 'src/app/interfaces/healthProfessional';
import { ProfessionalService } from 'src/app/professional.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  public searchtext='';
  public searchkey='';
  public Profesionalsalud?: HealthProfessional[];
  constructor (private professionalService: ProfessionalService){
  }
  ngOnInit():void {
    this.Profesionalsalud=this.professionalService.search(this.searchtext, this.searchkey);
  }
  search(){
    this.Profesionalsalud=this.professionalService.search(this.searchtext, this.searchkey);
  }


}

