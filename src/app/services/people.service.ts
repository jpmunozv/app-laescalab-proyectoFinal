import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from '../interfaces/people';
import { PeopleAll } from '../interfaces/peopleAll';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public api_url = environment.API_URL;
  public api_name: string = 'people';

  getPeopleAll(): Observable<PeopleAll> {
    return this.http.get<PeopleAll>(this.api_url + this.api_name);
  }

  getPeople(id_people: number): Observable<People> {
    return this.http.get<People>(this.api_url + this.api_name + "/" + id_people);
  };


}
