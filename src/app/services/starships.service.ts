import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Starships } from '../interfaces/starships';
import { StarshipsAll } from '../interfaces/starshipsAll';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }

  public api_url = environment.API_URL;
  public api_name: string = 'startships';

  getStartshipsAll(): Observable<StarshipsAll> {
    return this.http.get<StarshipsAll>(this.api_url + this.api_name);
  }

  getStarship(id_startship: number): Observable<Starships> {
    return this.http.get<Starships>(this.api_url + this.api_name + "/" + id_startship);
  };
  


}
