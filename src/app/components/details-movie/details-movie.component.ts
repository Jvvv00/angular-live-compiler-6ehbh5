import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-movie',
  templateUrl: './details-movie.component.html',
  styleUrls: ['./details-movie.component.css']
})
export class DetailsMovieComponent implements OnInit {

  similarMovies: any[]=[];
  constructor(private httpClient: HttpClient) {
   }

  ngOnInit() {
    this.loadSimilarMovies();
  }

  loadSimilarMovies(){
    this.httpClient
      .get('assets/data/similarMovies.json')
      .subscribe((data: any) => {
        this.similarMovies = data;
      });
  }

}