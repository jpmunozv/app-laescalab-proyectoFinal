import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films/films.component';
import { FilmInfoComponent } from './film-info/film-info.component';


const routes: Routes = [

  {
    path: 'films', 
    component: FilmsComponent,
  },
  {path:'**', redirectTo:'', pathMatch:'full'}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
