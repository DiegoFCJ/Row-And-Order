import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieRootObject } from 'models/movies';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  // movie: MovieRootObject[] = [];

  orderedMoviz: MovieRootObject[] = [];
  rating: number = 0;
  userNameLogged: string = '';

  constructor(private http: HttpClient) {}

  getRandomMoviee(url: any) {
    return this.http.get<MovieRootObject>(url);
  }
}
