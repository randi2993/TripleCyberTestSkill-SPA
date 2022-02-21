import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/models/movies';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  apiUrlImage: string = environment.apiUrlImage;
  vote_max: number = 10;

  constructor(private route: ActivatedRoute, 
    private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId = Number (params['id']);
      this.loadMovie(movieId);
    });
  }

  loadMovie(movieId: number){
    this.movieService.get(movieId).subscribe(result => {
      this.movie = result;
    });
  }

}
