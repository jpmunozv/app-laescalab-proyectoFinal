import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './components/pages/films/films/films.component';
import { PeopleComponent } from './components/pages/people/people/people.component';
import { PlanetsComponent } from './components/pages/planets/planets.component';
import { SpeciesComponent } from './components/pages/species/species.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';
import { VehiclesComponent } from './components/pages/vehicles/vehicles.component';
import { FilmInfoComponent } from './components/pages/films/film-info/film-info.component';
import { HomeAppComponent } from './components/shared/home-app/home-app.component'
import { HeaderAppComponent } from './components/shared/header-app/header-app.component';
import { LoginComponent } from './components/shared/login/login.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeAppComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },

  {
    path: 'header',
    component: HeaderAppComponent,
    children: [
      {
        path: 'films',
        loadChildren: './components/pages/films/films.module#FilmsModule'
      }, 
    ]
  },

/* 
  {
    path: 'films',
    component: FilmsComponent,
  }, */

  { 
    path: 'films/detail/:id', 
    component: FilmInfoComponent 
  },
/* 
  {
    path: 'people',
    loadChildren: './components/pages/people/people.module#PeopleModule'
    // component: PeopleComponent
  }, */
  
  {
    path: 'planets',
    component: PlanetsComponent
  },

  {
    path: 'species',
    component: SpeciesComponent
  },

  {
    path: 'starships',
    component: StarshipsComponent
  },

  {
    path: 'vehicles',
    component: VehiclesComponent
  },

  {
    path: 'main',
    loadChildren: './components/pages/main/main.module#MainModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
