import { Component, OnInit } from '@angular/core';
import { FilmsService }  from 'src/app/services/films.service'
import { Film } from 'src/app/interfaces/film'
import { Router } from '@angular/router';
import { TransfomaFechaPipe } from 'src/app/components/shared/pipes/transfoma-fecha.pipe'

@Component({
  selector: 'app-films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  

  //public filmsList: Film[]
  public filmsList: Film[] = [];  
  public image : string = "/assets/img/home.jpg";

  constructor(
    private filmsService: FilmsService,
    private router: Router 
    
    ) { }

  ngOnInit() {
    this.filmsService.getFilmAll().subscribe(resp => {
      console.log('listado de Films -->', resp.results[1]);
      this.filmsList = resp.results;
     
    }, error => {
      console.log('error All Films -->', error);
    })
  }  
  detalleFilm(id_custom: string) {
    id_custom = id_custom.substring(27, 28)
    console.log('cuanto vale ID? --->',id_custom)
    this.router.navigate(['films', 'detail', id_custom]);
  }
  
  




}