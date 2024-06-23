import { CanActivateFn, Router } from '@angular/router';
import { GameService } from '../services/game.service';
import { inject } from '@angular/core';

export const categoryPickedGuard: CanActivateFn = (route, state) => {
  let gameService = inject(GameService)
  let router = inject(Router)
  if(gameService.currentCategory !== "") return true;
  router.navigate(['/categories'])
  return false;
};
