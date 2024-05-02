import { Component,OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  //metadatos para animacion de componente
  animations:[
    trigger('animaciones',[
      state('active',style({
        transform:'translateX(10px)'
      })),
      state('inactive',style({
        transform:'translateX(80px)'
      })),
      state('sube',style({transform:'translateY(-10px)'})),
      state('baja',style({transform:'translateY(40px)'})),
      transition('inactive<=>active',animate('1000ms ease')),
      transition('sube<=>baja',animate('1000ms ease-in')),
    ])
  ]
})
export class AnimationComponent {
  state:string='inactive';
  
  ngOnInit() {
    setInterval(()=>{
      if(this.state=='active'){
        this.state='inactive';
      }else{
        this.state='active'
      }
    },1000);
 
  }
  subir(){
   this.state='sube'
  }
  bajar(){
    this.state='baja';
  }

}
