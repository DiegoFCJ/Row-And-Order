import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReviewPageComponent } from './game-page/review-page/review-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RankingComponent } from './ranking/ranking.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game-page', component: GamePageComponent },
  { path: 'review-page', component: ReviewPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ranking', component: RankingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
