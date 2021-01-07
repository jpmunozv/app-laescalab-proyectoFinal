import { Component, OnInit } from '@angular/core';
import { SpeciesService }  from 'src/app/services/species.service'
import { Species } from 'src/app/interfaces/species'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-specie-info',
  templateUrl: './specie-info.component.html',
  styleUrls: ['./specie-info.component.css']
})
export class SpecieInfoComponent implements OnInit {

  public speciesDetail : Species
  public id_specie : any
  public image: string = ""
  constructor(
    private activeRoute: ActivatedRoute,
    private speciesService: SpeciesService
  ) { }


  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      console.log('params DETALLAZOS -->', params);
      this.id_specie = params.get('id');
      console.log('se pinta id_specie? Si con valor --->',this.id_specie)
    })

    this.speciesService.getSpecie(this.id_specie).subscribe(resp => {
      this.speciesDetail = resp;
      console.log('Como vienen los datos de la ESPECIE?? -->', this.speciesDetail);
    }, error => {
      console.log('erro info del ESPECIE', error);
    })
  }

}
