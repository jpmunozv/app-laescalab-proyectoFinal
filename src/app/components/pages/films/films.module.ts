import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import {FilmInfoComponent} from './film-info/film-info.component'
import {FilmsComponent} from './films/films.component'


@NgModule({
  declarations: [FilmsComponent,
                 FilmInfoComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ]
})
export class FilmsModule { }
