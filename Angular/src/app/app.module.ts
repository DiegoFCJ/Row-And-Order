import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ReviewPageComponent } from './pages/review-page/review-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { RankingComponent } from './pages/ranking/ranking.component';

import { HeroComponent } from './components/hero/hero.component';
import { NavBeforeLogComponent } from './components/navbars/navbar-before-log/nav-before-log.component';
import { NavAfterLogComponent } from './components/navbars/nav-after-log/nav-after-log.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ButtonComponent } from './components/button/button.component';
import { LogRegPageComponent } from './log-reg-page/log-reg-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GamePageComponent,
    ReviewPageComponent,
    LoginComponent,
    RegisterComponent,
    RankingComponent,
    NavBeforeLogComponent,
    HeroComponent,
    NavAfterLogComponent,
    LogoutComponent,
    ProfileComponent,
    ButtonComponent,
    LogRegPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    DragDropModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    NgbRatingModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
