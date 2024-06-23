import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameService, gameStatusEnum } from '../../../services/game.service';
import { LetterBoxComponent } from '../../letter-box/letter-box.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-answer-board',
  standalone: true,
  imports: [LetterBoxComponent],
  templateUrl: './answer-board.component.html',
  styleUrl: './answer-board.component.scss'
})
export class AnswerBoardComponent implements OnInit, OnDestroy{
  constructor(protected gameService:GameService){}

  gameStatus!:gameStatusEnum

  sub:Subscription | undefined

  ngOnInit(): void {
    this.sub = this.gameService.gameStatus.subscribe((gs:gameStatusEnum)=>{
      this.gameStatus = gs;
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
