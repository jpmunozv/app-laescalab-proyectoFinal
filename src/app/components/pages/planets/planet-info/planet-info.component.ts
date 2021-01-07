import { Component, OnInit } from '@angular/core';
import { PlanetsService }  from 'src/app/services/planets.service'
import { Planets } from 'src/app/interfaces/planets'
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.css']
})
export class PlanetInfoComponent implements OnInit {

  public planetDetail : Planets
  public id_planet : any
  public image: string = "https://i.pinimg.com/originals/56/37/69/563769f0491a3898145f0113ead75443.jpg"
  constructor(
    private activeRoute: ActivatedRoute,
    private planetsService: PlanetsService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      console.log('params DETALLAZOS -->', params);
      this.id_planet = params.get('id');
      console.log('se pinta id_planet? Si con valor --->',this.id_planet)
    })

    this.planetsService.getPlanet(this.id_planet).subscribe(resp => {
      this.planetDetail = resp;
      console.log('Como vienen los datos del PLANETA?? -->', this.planetDetail);
    }, error => {
      console.log('erro info del PLANETA', error);
    })
  }

}
