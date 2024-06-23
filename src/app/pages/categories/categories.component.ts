import { Component, HostListener } from '@angular/core';
import { GameService } from '../../services/game.service';
import { CardComponent } from '../../features/card/card.component';
import { TitleTextComponent } from '../../features/title-text/title-text.component';
import { ButtonBasicComponent } from '../../features/button-basic/button-basic.component';
import { FirstUpperPipe } from '../../pipes/first-upper.pipe';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CardComponent,TitleTextComponent,ButtonBasicComponent,FirstUpperPipe,CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  constructor(private gameService:GameService,private router:Router){}
  categoryList = Object.keys(this.gameService.gameData)
  currentIndex = -1;
  keyboardControlled = false;
  mousePos:{'X':number,'Y':number} | null = null;

  selectCategory(val:string){
    console.log(val)
    if(this.gameService.changeCategory(val)){
      this.router.navigate(['/game'])
    }
  }
  
  @HostListener('document:mousemove', ['$event']) 
  onMouseMove(e:MouseEvent) {
    if(!this.keyboardControlled) return;
    if(this.mousePos === null){
      this.mousePos = {'X':e.clientX,'Y':e.clientY}
    }
    let dist = Math.sqrt( Math.pow(this.mousePos!.X - e.clientX,2) + Math.pow(this.mousePos!.Y - e.clientY,2))
    if(dist > 50){
      this.keyboardControlled = false;
      this.mousePos = null;
    }
    // console.log(e);
  }

  @HostListener('window:keydown.Enter', ['$event'])
  onEnterPressed(ev: KeyboardEvent) {
    if(this.keyboardControlled) this.selectCategory(this.categoryList[this.currentIndex]);
  }


  @HostListener('window:keydown.ArrowDown', ['$event'])
  @HostListener('window:keydown.ArrowUp', ['$event'])
  @HostListener('window:keydown.w', ['$event'])
  @HostListener('window:keydown.s', ['$event'])
   yNavigation(ev: KeyboardEvent) {
    this.mousePos = null;
    this.keyboardControlled = true;
    if(ev.key === 'w' ||  ev.key === "ArrowUp"){
      this.currentIndex -=1;
    } else{
      this.currentIndex +=1;
    }
    this.currentIndex = Math.max(0, Math.min(this.currentIndex, this.categoryList.length-1))
  }


}
