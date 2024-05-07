import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movieTitle = "";
  searchResults:any[]=[];

  constructor(private _activedRouted: ActivatedRoute,
    private httpClient: HttpClient) {
    this._activedRouted.params.subscribe((p) => {
    });
  }

  ngOnInit() {
    this.searchMovies();
  }

  searchMovies(){
    this.httpClient
      .get('assets/data/movieSearch.json')
      .subscribe((data: any) => {
        this.searchResults = data;
      });
  }
}
