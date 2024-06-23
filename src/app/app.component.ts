import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleTextComponent } from './features/title-text/title-text.component';
import { GameService } from './services/game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TitleTextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hangman - Frontend mentor';
}
