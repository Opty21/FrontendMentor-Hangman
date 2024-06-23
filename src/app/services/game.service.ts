import { Injectable, OnInit } from '@angular/core';
import categories from '../../assets/gameData';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
    constructor() { }
    private _currentCategory:string = ""
    get currentCategory() { return this._currentCategory}

    currentWord:string = ""
    guessedLetters = new Set<string>()
    maxHealth:number = 8
    currentHealth:number = this.maxHealth
    gameData = categories;

    gameStatus: BehaviorSubject<gameStatusEnum> = new BehaviorSubject<gameStatusEnum>(gameStatusEnum.inProgress);


  
  public changeCategory(val:string):boolean{
    if(Object.keys(this.gameData).includes(val)){
      this._currentCategory = val;
      return true
    }
    return false
  }

  public guessLetter(val:string){
    if(this.gameStatus.getValue() !== gameStatusEnum.inProgress) return;
    val = val.toUpperCase();
    if(this.guessedLetters.has(val)) return;
    this.guessedLetters.add(val);
    if(!this.currentWord.includes(val)) this.currentHealth -= 1;
    // console.log(this.currentHealth)

    //END GAME LOGIC
    if(this.currentHealth === 0) {
      this.gameStatus.next(gameStatusEnum.lose)
    } else{
      let temp = new Set<string>();
      for(let l of this.currentWord.toLowerCase().replaceAll(' ','')){
        temp.add(l);
      }
      // console.log(temp.size, this.guessedLetters.size - (this.maxHealth - this.currentHealth));
      if(temp.size === this.guessedLetters.size - (this.maxHealth - this.currentHealth)){
        this.gameStatus.next(gameStatusEnum.win)
      }
    }
  }

  public nextGame(){
    let temp = this.gameData[this._currentCategory]
    this.currentWord = temp[Math.floor(Math.random() * temp.length)].toUpperCase()
    this.guessedLetters.clear()
    this.currentHealth = this.maxHealth;
    this.gameStatus.next(gameStatusEnum.inProgress)
    // console.log(this.currentWord )
  }
  
}

export enum gameStatusEnum{
  inProgress,win,lose
}