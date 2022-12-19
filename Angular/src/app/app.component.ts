import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieRootObject } from 'models/movies';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'TNVLezioni';

  
  ngOnInit(): void {

  }


  constructor(private http: HttpClient) {}
} 


