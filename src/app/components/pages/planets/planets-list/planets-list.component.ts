import { Component, OnInit } from '@angular/core';
import { PlanetsService }  from 'src/app/services/planets.service'
import { Planets } from 'src/app/interfaces/planets'
import { Router } from '@angular/router';


@Component({
  selector: 'app-planets',
  templateUrl: './planets-list.component.html',
  styleUrls: ['./planets-list.component.scss']
})
export class PlanetsListComponent implements OnInit {

  public planetsList: Planets[] = [];  
  public image : string = "/assets/img/planets.jpg"
  private id: string;
  constructor(
    private planetsService: PlanetsService,
    private router: Router 
  ) { }

  ngOnInit() {
    this.planetsService.getPlanetsmAll().subscribe(resp => {
      console.log('listado de Planetas --->', resp.results[1]);
      this.planetsList = resp.results;
     
    }, error => {
      console.log('error desplehar respuesa All Planets -->', error);
    })
  }

  detallePlanets(id_custom: string) {
    id_custom = id_custom.slice(29,30)
    this.id = id_custom
    console.log('cuanto vale ID? --->',this.id)
    this.router.navigate(['planets', 'detail', id_custom]);
  
  }

}
