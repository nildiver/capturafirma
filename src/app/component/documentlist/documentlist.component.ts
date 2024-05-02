import { Component,OnInit } from '@angular/core';
import { DocumentlistService } from 'src/app/documentlist.service';
import { persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-documentlist',
  templateUrl: './documentlist.component.html',
  styleUrls: ['./documentlist.component.css']
})
export class DocumentlistComponent {
  public searchtext='';
  public searchkey='';
  public Documenuser?:persona [];
  constructor(private documentlistService:DocumentlistService){

  }
  ngOnInit():void {
    //this.Documenuser=this.documentlistService.search(this.searchtext, this.searchkey);
  }
  search(){
    console.log(this.searchtext, this.searchkey)
    this.Documenuser=this.documentlistService.search(this.searchtext, this.searchkey);
  }

}
