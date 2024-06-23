import { Component, HostListener } from '@angular/core';
import { ButtonBasicComponent } from '../../features/button-basic/button-basic.component';
import { CardComponent } from '../../features/card/card.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [ButtonBasicComponent,CardComponent,RouterLink],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
constructor(private router:Router){}


@HostListener('window:keydown.Enter', ['$event']) onKeyDown(ev: KeyboardEvent) {
  this.router.navigate(['/categories']);
}
}
