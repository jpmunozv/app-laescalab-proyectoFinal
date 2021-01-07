import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planets } from '../interfaces/planets';
import { PlanetsAll } from '../interfaces/planetsAll';


@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public api_url = environment.API_URL;
  public api_name: string = 'planets';

  getPlanetsmAll(): Observable<PlanetsAll> {
    return this.http.get<PlanetsAll>(this.api_url + this.api_name);
  }

  getPlanet(id_planet: number): Observable<Planets> {
    return this.http.get<Planets>(this.api_url + this.api_name + "/" + id_planet);
  };

}
