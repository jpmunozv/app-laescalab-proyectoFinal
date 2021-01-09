import { Component, OnInit } from '@angular/core';
import { SpeciesService }  from 'src/app/services/species.service'
import { Species } from 'src/app/interfaces/species'
import { Router } from '@angular/router';
@Component({
  selector: 'app-species',
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.css']
})
export class SpeciesListComponent implements OnInit {

  public speciesList: Species[] = [];  
  public image: string = "" 
  private id: string;
  constructor(
    private speciesService: SpeciesService,
    private router: Router 
  ) { }


  ngOnInit() {
    this.speciesService.getSpeciesAll().subscribe(resp => {
      console.log('listado de Species --->', resp.results[1]);
      this.speciesList = resp.results;
     
    }, error => {
      console.log('error desplehar respuesa All Species -->', error);
    })
  }

  detalleSpecies(id_custom: string) {
    id_custom = id_custom.slice(29,30)
    this.id = id_custom
    console.log('cuanto vale ID? --->',this.id)
    this.router.navigate(['species', 'detail', id_custom]);
  
  }

}
