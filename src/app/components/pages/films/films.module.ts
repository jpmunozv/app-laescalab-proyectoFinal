import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';

import {FilmInfoComponent} from './film-info/film-info.component';
import { FilmsListComponent} from './films-list/films-list.component'
import { TransfomaFechaPipe } from 'src/app/components/shared/pipes/transfoma-fecha.pipe'

@NgModule({
  declarations: [FilmsListComponent, FilmInfoComponent, TransfomaFechaPipe],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  exports: [TransfomaFechaPipe,FilmInfoComponent,FilmsListComponent],
})
export class FilmsModule { }
