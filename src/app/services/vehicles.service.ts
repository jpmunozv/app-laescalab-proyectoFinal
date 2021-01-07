import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicles } from '../interfaces/vehicles';
import { VehiclesAll } from '../interfaces/vehiclesAll';;

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  public api_url = environment.API_URL;
  public api_name: string = 'vehicles';

  getVehiclesAll(): Observable<VehiclesAll> {
    return this.http.get<VehiclesAll>(this.api_url + this.api_name);
  }

  getVehicles(id_vehicle: number): Observable<Vehicles> {
    return this.http.get<Vehicles>(this.api_url + this.api_name + "/" + id_vehicle);
  };
}
