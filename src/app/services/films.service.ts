import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../interfaces/film';
import { FilmsAlls } from '../interfaces/filmsAll';
//import { Film } from '../interfaces/film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  public api_name: string = 'films';

  getFilmAll(): Observable<FilmsAlls> {
    return this.http.get<FilmsAlls>('https://swapi.dev/api/films');
  }

  getFilm(id_film: number): Observable<Film> {
    return this.http.get<Film>('https://swapi.dev/api/films/'+ id_film);
  };



}
