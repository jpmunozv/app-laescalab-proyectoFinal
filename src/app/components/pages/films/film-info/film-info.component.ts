import { Component, OnInit } from '@angular/core';
import { FilmsService }  from 'src/app/services/films.service'
import { Film } from 'src/app/interfaces/film'
import { Router, ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.css']
})
export class FilmInfoComponent implements OnInit {
  public filmDetail : Film
  public id_film : any
  public image: string = "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"
  constructor(
    private activeRoute: ActivatedRoute,
    private filmsService: FilmsService
  ) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe(params => {
      console.log('params DETALLAZOS -->', params);
      this.id_film = params.get('id');
      console.log('se pinta id_film? Si con valor --->',this.id_film)
    })


    this.filmsService.getFilm(this.id_film).subscribe(resp => {
      this.filmDetail = resp;
      console.log('Comovienen los datos de la PELI -->', this.filmDetail);
    }, error => {
      console.log('erro info de las pelis', error);
    })
  }



}
