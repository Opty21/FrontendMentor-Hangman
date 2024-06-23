import { Component, EventEmitter, Output } from '@angular/core';
import { GameService } from '../../../services/game.service';
import { FirstUpperPipe } from '../../../pipes/first-upper.pipe';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FirstUpperPipe],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  constructor(protected gameService:GameService){}
  @Output() pauseMenu = new EventEmitter<null>();

}
