import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Movies } from './services/movies';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgFor, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  moviesSubscribe: string[] = [];
  movies$: Observable<string[]> | undefined;

  constructor(private movies: Movies) {}

  ngOnInit(): void {
    this.loadSubscribe();
    this.loadAsync();
  }

  loadSubscribe(): void {
    this.movies.getMovies().subscribe(data => {
      this.moviesSubscribe = data;
    });
  }

  loadAsync(): void {
    this.movies$ = this.movies.getMovies();
  }
}
