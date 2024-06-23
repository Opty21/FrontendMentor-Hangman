import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { TitleTextComponent } from '../title-text/title-text.component';
import { ButtonBasicComponent } from '../button-basic/button-basic.component';
import { RouterLink } from '@angular/router';
import { GameService, gameStatusEnum } from '../../services/game.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-menu',
  standalone: true,
  imports: [CardComponent,TitleTextComponent,ButtonBasicComponent, RouterLink,CommonModule],
  templateUrl: './game-menu.component.html',
  styleUrl: './game-menu.component.scss'
})
export class GameMenuComponent implements OnInit, OnDestroy{
  constructor(public gameService:GameService){}
  @Output() pauseMenu = new EventEmitter<null>()
  titleText=""
  gs = gameStatusEnum;
  status:gameStatusEnum | undefined;
  sub: Subscription | undefined;
  
  ngOnInit(): void {
    this.sub = this.gameService.gameStatus.subscribe((gs:gameStatusEnum)=>{
      this.status = gs;
      if(gs === gameStatusEnum.inProgress) this.titleText = "Pause Menu"
      else if (gs === gameStatusEnum.win) this.titleText = "Congratulations!"
      else this.titleText = "You Lost"
    })
  }
  
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
