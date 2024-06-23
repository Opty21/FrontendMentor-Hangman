import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { gameStatusEnum } from '../../services/game.service';

@Component({
  selector: 'app-letter-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './letter-box.component.html',
  styleUrl: './letter-box.component.scss'
})
export class LetterBoxComponent {
  @Input() solved = false;
  @Input({required:true}) gameStatus!:gameStatusEnum
  gs = gameStatusEnum;
}
