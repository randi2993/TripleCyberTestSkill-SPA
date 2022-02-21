import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { MoviePaginator } from 'src/app/models/movie-paginator';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Randi Ortiz';
  date = '21-02-2022';
  moviesPaginator: MoviePaginator;
  apiUrlImage: string = environment.apiUrlImage;
  vote_max: number = 10;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies(1);
  }

  loadMovies(page: number) {
    this.movieService.getAll(page).subscribe(result => {
      this.moviesPaginator = result;
    }, (error: Error) => {
      console.log(error.message);
    });
  }

  changePage(event: PageEvent) {
    console.log(event);
    let currentPage = event.pageIndex + 1;
    this.loadMovies(currentPage);
  }

  showMovieDetail(movieId: number){
    debugger
  }
}
