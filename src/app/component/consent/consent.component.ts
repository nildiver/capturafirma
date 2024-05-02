import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-consent',
  templateUrl: './consent.component.html',
  styleUrls: ['./consent.component.css']
})
export class ConsentComponent implements OnInit, AfterViewInit {
  @ViewChild('canvasRef', { static: false })
  canvasRef!: ElementRef;

  public width: number = 500;
  public height: number = 450;

  private cx!: CanvasRenderingContext2D;

  private points: Array<any> = [];

  public isAvailabe: boolean = false;
  private mouseup: boolean = false;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove = (e: any) => {
    if (e.target.id === 'canvasId' && (this.isAvailabe)) {
      this.write(e);
    }
  }
  @HostListener('document:mousedown', ['$event'])
  onMouseDown = (e: any) => {
    if (e.target.id === 'canvasId') {
      this.isAvailabe = true;
      const canvasEl = this.canvasRef.nativeElement;
      const rect = canvasEl.getBoundingClientRect();
      const prevPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
      this.points.push(prevPos);
    }
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseUp = (e: any) => {
    if (e.target.id === 'canvasId') {
      this.isAvailabe = false;
    }
  }
// @HostListener('document:mouseup', ['$event'])
// onMouseUp = (e: any) => {
//   if (e.target.id === 'canvasId' && (this.isAvailabe)) {
//     this.write(e);
//   }
// }

// @HostListener('click', ['$event'])
// onClick = (e: any) => {
//   if (e.target.id === 'canvasId') {
//     this.isAvailabe = !this.isAvailabe;
//   }
// }
constructor() { }

ngOnInit(): void {
}
ngAfterViewInit(): void {

  this.render();
}

  private render() {
  const canvasEl = this.canvasRef.nativeElement;
  this.cx = canvasEl.getContext('2d');
  canvasEl.width = this.width;
  canvasEl.height = this.height;

  this.cx.lineWidth = 3;
  this.cx.lineCap = 'round';
  this.cx.strokeStyle = '#000';

}
  private write(res: { clientX: number; clientY: number; }) {
  const canvasEl = this.canvasRef.nativeElement;
  const rect = canvasEl.getBoundingClientRect();
  const prevPos = {
    x: res.clientX - rect.left,
    y: res.clientY - rect.top,
  }
  this.writeSingle(prevPos);
}

  private writeSingle(prevPos: { x: number; y: number; }, emit: boolean = true) {
  this.points.push(prevPos);
  if (this.points.length > 3) {
    const prevPost = this.points[this.points.length - 1];
    const currentPost = this.points[this.points.length - 2];

    this.drawOnCanvas(prevPost, currentPost);

  }
}

  private drawOnCanvas(prevPos: any, currentPost: any) {
  if (!this.cx) return;
  this.cx.beginPath();

  if (prevPos) {
    this.cx.moveTo(prevPos.x, prevPos.y);

    this.cx.lineTo(currentPost.x, currentPost.y);
    this.cx.stroke();
  }
}


  public clearZone = () => {
  this.points = [];
  this.cx.clearRect(0, 0, this.width, this.height);
}
public captureimage = () =>{
  const canvasEl = this.canvasRef.nativeElement;
  this.cx = canvasEl.getContext('2d');
  canvasEl.width = this.width;
  canvasEl.height = this.height;
const img=document.getElementById("mifirma");
canvasEl.fillStyle="red";
//canvasEl.filltext("utilizando canvas",10,50);
canvasEl.drawImage(img,10,80);

}


public guardarcanvas (){
  const canvasEl = this.canvasRef.nativeElement;
  const cxt = canvasEl.getContext('2d');
  const img =document.getElementById("mifirma");
   const imgen=cxt.toDataURL("image/jpg").replace("image/jpg","image/octet-stream");
   window.location.href=imgen;
  
}
}
