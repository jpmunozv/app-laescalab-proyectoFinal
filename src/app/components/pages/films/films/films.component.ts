import { Component, OnInit } from '@angular/core';
import { FilmsService }  from 'src/app/services/films.service'
import { Film } from 'src/app/interfaces/film'
import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  

  //public filmsList: Film[]
  public filmsList: Film[] = [];  
  public image: string = "https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/test/5cbeea135cafe88451149213/sw1.jpg"

  constructor(
    private filmsService: FilmsService,
    private router: Router 
    
    ) { console.log('aqui llega?')}

  ngOnInit() {
    this.filmsService.getFilmAll().subscribe(resp => {
      console.log('listado de Films -->', resp.results[1]);
      this.filmsList = resp.results;
     
    }, error => {
      console.log('error All Films -->', error);
    })
}
  detalleFilm(id: number) {
    this.router.navigate(['films', 'detail', id]);
  
  }




}