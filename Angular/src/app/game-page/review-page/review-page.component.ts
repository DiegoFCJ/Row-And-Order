import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MovieData } from 'models/movieData';
import { MovieRootObject } from 'models/movies';
import { Router } from '@angular/router';
import { MovieAPIService } from 'src/services/movie-api.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss'],
  providers: [NgbModalConfig, NgbModal],
})
export class ReviewPageComponent implements OnInit, OnChanges {

  currentRate= 2;
  
  movieID = 0;
  isHide = true;

/*   onFavouriteSubmite(numID: number) {
    this.isHide = false;
    this.movieID = numID;
  } */
  

  constructor(config: NgbModalConfig, private modalService: NgbModal, protected MovieServ: MovieAPIService, private http: HttpClient, private router: Router) { 
    config.backdrop = 'static';
		config.keyboard = false;
  }

  open(content: any, numID:number) {
		this.modalService.open(content);
    this.movieID = numID;
	}
  
  ngOnChanges(changes: SimpleChanges): void {
    
  } 

  ngOnInit(): void {
    console.log(this.MovieServ.orderedMoviz)
    console.log(this.MovieServ.rating)
  }


  onSubmit(e: NgForm) {

  let dbComp: MovieData = {

    comment: e.form.value.comment,
    rating: e.form.value.rating,
    movieId: this.movieID,
    userId: 3
  }

  console.log(dbComp)

  this.http
      .post<MovieData>('http://localhost:5268/reviews', dbComp)
      .subscribe((dat) => {}); 
  }

}
