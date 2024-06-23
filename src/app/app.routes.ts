import { Routes } from '@angular/router';
import { HowToPlayComponent } from './pages/how-to-play/how-to-play.component';
import { MainMenuComponent } from './pages/main-menu/main-menu.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { GameComponent } from './pages/game/game.component';
import { categoryPickedGuard } from './guards/category-picked.guard';

export const routes: Routes = [
{path:'',component:MainMenuComponent},
{path:'rules',component:HowToPlayComponent},
{path:'categories',component:CategoriesComponent},
{path:'game',component:GameComponent,canActivate:[categoryPickedGuard] }
];
