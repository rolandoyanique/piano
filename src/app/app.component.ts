import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'piano';
  soundNote(tono:number){
    const audio=new Audio('assets/sonidos/note'+tono+'.wav');
    audio.play();    
  }
}
