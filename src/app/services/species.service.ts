import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Species } from '../interfaces/species';
import { SpeciesAll } from '../interfaces/speciesAll';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }


  public api_url = environment.API_URL;
  public api_name: string = 'species';

  getSpeciesAll(): Observable<SpeciesAll> {
    return this.http.get<SpeciesAll>(this.api_url + this.api_name);
  }

  getSpecie(id_specie: number): Observable<Species> {
    return this.http.get<Species>(this.api_url + this.api_name + "/" + id_specie);
  };
  
}
