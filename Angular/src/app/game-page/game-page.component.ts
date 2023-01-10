import { UserLocalSt } from '../../models/user';
import { AuthService } from 'src/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MovieRootObject } from 'src/models/movies';
import { MovieAPIService } from 'src/services/movie-api.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { ScoreInfo, User } from 'src/models/user';


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {

  constructor(private http: HttpClient, protected MovieServ: MovieAPIService, private router: Router, protected authServ: AuthService) { }
  currentUser: Partial<UserLocalSt> = this.authServ.getCurrentUser();

  ngOnInit(): void {
    this.MovieServ.rating;
     console.log(this.MovieServ.userNameLogged)
 
    const attributes = ['revenue', 'release_date', 'popularity'];
    this.MovieServ.attribute = attributes[Math.floor(Math.random() * attributes.length)];
    console.log(this.MovieServ.attribute);
    for (let i = 0; i < 10; i++) {
      this.getRandomMovie(this.MovieServ.attribute);
    }
    console.log(this.movie + " " + this.MovieServ.attribute)
  }

  movie: MovieRootObject[] = [];   //array su questo component

  getRandomMovie(attributeS: any) {
    const latestId = 30000;
    const randomId = Math.round(Math.random() * latestId);
    this.http.get<MovieRootObject>(`https://api.themoviedb.org/3/movie/${randomId}?api_key=3949444e64e7a9355250d3b1b5c59bf1&language=it-it`)
      .subscribe({next: (res) => {
          console.log('ID trovato', randomId);

          if (res.poster_path) {
            this.movie.push(res); 
            this.MovieServ.orderedMoviz.push(res);
            this.MovieServ.orderedMoviz.sort((a: any, b: any) =>
              a[attributeS] > b[attributeS] ? 1 : b[attributeS] > a[attributeS] ? -1 : 0)
          } else {
            console.log('Film senza poster');
            this.getRandomMovie(attributeS);
          }
        },
        error: () => {
          console.log('ID non esistente, retry!', randomId);
          this.getRandomMovie(attributeS);
        },
      });
  }


  drop(event: CdkDragDrop<{ title: string; poster: string }[]>) {
    moveItemInArray(this.movie, event.previousIndex, event.currentIndex);
  }

  checkResult() {
    console.log(this.MovieServ.userNameLogged)

    this.router.navigate(['/review-page']);
    for (let i = 0; i < 10; i++) {
      if (this.movie[i] === this.MovieServ.orderedMoviz[i]) {
        this.MovieServ.rating = this.MovieServ.rating + 10;
      }
    }

    let scoreComp: ScoreInfo = {
      userId: this.authServ.getCurrentUser().id,
      userName: this.authServ.getCurrentUser().username,
      score: this.MovieServ.rating

    }

    this.http.post<ScoreInfo>(`http://localhost:4567/score`, scoreComp).subscribe(() => { console.log(scoreComp + 'HA FUNZIONATO') })
  }
}


