import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.css']
})
export class DetailsReviewsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  movieRates:any[]=[];

  ngOnInit() {
    this.loadSimilarMovies();
  }

  loadSimilarMovies(){
    this.httpClient
      .get('assets/data/movieRates.json')
      .subscribe((data: any) => {
        this.movieRates = data;
      });
  }

}