import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../interfaces/film';
import { FilmsAlls } from '../interfaces/filmsAll';


@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }
  
  public api_url = environment.API_URL;
  public api_name: string = 'films';


  getFilmAll(): Observable<FilmsAlls> {
    return this.http.get<FilmsAlls>(this.api_url + this.api_name);
  }

  getFilm(id_film: number): Observable<Film> {
    return this.http.get<Film>(this.api_url + this.api_name + "/" + id_film);
  };



}
