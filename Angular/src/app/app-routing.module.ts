import { ProfileComponent } from './pages/profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RankingComponent } from './pages/ranking/ranking.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game-page', component: GamePageComponent },
  { path: 'review-page', component: ReviewPageComponent },
  { path: 'main-page', component: MainPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
