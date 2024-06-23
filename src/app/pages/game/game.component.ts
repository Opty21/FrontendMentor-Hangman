import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { GameService, gameStatusEnum } from '../../services/game.service';
import { CardComponent } from '../../features/card/card.component';
import { LetterBoxComponent } from '../../features/letter-box/letter-box.component';
import { KeyComponent } from '../../features/key/key.component';
import { CommonModule } from '@angular/common';
import { FirstUpperPipe } from '../../pipes/first-upper.pipe';
import { ButtonBasicComponent } from '../../features/button-basic/button-basic.component';
import { AnswerBoardComponent } from '../../features/gameFeatures/answer-board/answer-board.component';
import { TopBarComponent } from '../../features/gameFeatures/top-bar/top-bar.component';
import { GameMenuComponent } from '../../features/game-menu/game-menu.component';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [LetterBoxComponent,KeyComponent,CommonModule,FirstUpperPipe,ButtonBasicComponent,AnswerBoardComponent,TopBarComponent,GameMenuComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent implements OnInit, OnDestroy{
  constructor(public gameService:GameService){}
  allLetters:string[] = []
  showPauseMenu:boolean = false
  
  sub:Subscription | undefined;

  ngOnInit(): void {
    this.gameService.nextGame()
    for(let i = 97;i < 123; i++){
      this.allLetters.push(String.fromCharCode(i))
    }
    this.sub = this.gameService.gameStatus.subscribe((gs:gameStatusEnum)=>{
      if(gs !== gameStatusEnum.inProgress) this.showPauseMenu = true;
    })
  }
 
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }


  @HostListener('window:keydown', ['$event']) onKeyDown(ev: KeyboardEvent) {
    if(ev.key === 'Escape' && this.gameService.gameStatus.getValue() === gameStatusEnum.inProgress){
      this.showPauseMenu = !this.showPauseMenu;
      return;
    }
    if(this.showPauseMenu) return;
    // console.log('keydown', ev);
    if(ev.key.match(/[a-z]/i) && ev.key.length === 1){
      this.gameService.guessLetter(ev.key)
    }
  }
}
