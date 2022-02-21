import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movie } from '../models/movies';
import { environment } from 'src/environments/environment';
import { MoviePaginator } from '../models/movie-paginator';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  // https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US
  getAll(page: number): Observable<MoviePaginator>{
    const url = `${environment.apiUrl}top_rated?api_key=${environment.apiKey}&language=en-US&page=${page}`;
    return this.httpClient.get<MoviePaginator>(url);
  }

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
  // Request the API again to find the details, just in case if were changes...
  get(id: number): Observable<Movie>{
    const url = `${environment.apiUrl}${id}?api_key=${environment.apiKey}&language=en-US`;
    return this.httpClient.get<Movie>(url);
  }
}
