import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  fanFavoriteMovies: any[] = [];

  topMovies: any[] = [];

  ngOnInit() {
    this.getFanFavoriteMovies();
    this.getTopMovies();
  }

  getFanFavoriteMovies() {
    this.httpClient.get<any[]>('assets/data/fanFavoriteMovies.json').subscribe({
      next: (data: any[]) => {
        this.fanFavoriteMovies = data;
      },
      error: (error) => {
        console.log('Error loading fan favorite movie', error);
      },
    });
  }

  getTopMovies() {
    this.httpClient.get<any[]>('assets/data/topMovies.json').subscribe({
      next: (data: any[]) => {
        this.topMovies = data;
      },
      error: (error) => {
        console.log('Error loading top movie', error);
      },
    });
  }
}
