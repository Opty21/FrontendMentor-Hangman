import { Component, HostListener } from '@angular/core';
import { TitleTextComponent } from '../../features/title-text/title-text.component';
import { CardComponent } from '../../features/card/card.component';
import { ButtonBasicComponent } from '../../features/button-basic/button-basic.component';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [TitleTextComponent,CardComponent,ButtonBasicComponent],
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.scss'
})
export class HowToPlayComponent {
  constructor(private router:Router){}

  @HostListener('window:keydown.Escape', ['$event']) 
  @HostListener('window:keydown.Enter', ['$event']) 
  onReturn(){
    this.router.navigate(['/']);
  }
}
