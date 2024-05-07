import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit {
  
  movieId = '';

  stars=[];
  genres=[];
  directors=[];

  constructor(private _activedRouted: ActivatedRoute, private httpClient: HttpClient){
    this._activedRouted.params.subscribe((p)=>{
      this.movieId=p["id"];
    })
  }

  ngOnChanges() {
    console.log('ngOnChanges is called.');
  }
  
    ngOnInit() {
      this.loadMovieSummary();
    }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit is called');
  }
  
ngAfterViewInit(): void {
  console.log('ngAfterViewInit is called');
}

loadMovieSummary(){
  this.httpClient.get('assets/data/movieSummary.json').subscribe((data:any)=>{
    this.stars=data.stars;
    this.genres=data.genres;
    this.directors=data.directors;
  })
}


}