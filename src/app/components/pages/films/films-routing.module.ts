import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsComponent } from './films.component'
import { FilmsListComponent } from './films-list/films-list.component';
import { FilmInfoComponent } from './film-info/film-info.component';
import { AuthenticatedGuard } from 'src/app/components/shared/guards/authenticated.guard'


const routes: Routes = [

/*    { path: 'films', component: FilmsComponent,
  children:[
    { path: 'filmslist', component: FilmsListComponent }, 
    { path: 'films/detail/:id', component: FilmInfoComponent }

  ] }, 
 */
  //{ path: 'films', component: FilmsComponent },
  { path: 'filmslist', component: FilmsListComponent },
  { path: 'films/detail/:id', component: FilmInfoComponent }

/*   { path: 'filmslist', component: FilmsListComponent,
    children:[
      { path: 'filmslist/detail/:id', component: FilmInfoComponent }
    ] 
  }*/

  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
