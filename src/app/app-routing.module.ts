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
import { AuthenticatedGuard } from './components/shared/guards/authenticated.guard'
import { RegisterComponent } from './components/shared/login/register/register.component';

const routes: Routes = [

  { 
    path: '', redirectTo: 'home', pathMatch: 'full' 
  },

  {
    path: 'home', component: HomeAppComponent,
  },

  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'register', component: RegisterComponent
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
    path: 'films/detail/:id', component: FilmInfoComponent 
  },
/* 
  {
    path: 'people',
    loadChildren: './components/pages/people/people.module#PeopleModule'
    // component: PeopleComponent
  }, */
  
  {
    path: 'planets', component: PlanetsComponent, canActivate: [AuthenticatedGuard]
  },

  {
    path: 'species', component: SpeciesComponent, canActivate: [AuthenticatedGuard]
  },

  {
    path: 'starships', component: StarshipsComponent, canActivate: [AuthenticatedGuard]
  },

  {
    path: 'vehicles', component: VehiclesComponent, canActivate: [AuthenticatedGuard]
  },

  {
    path: 'main',
    loadChildren: './components/pages/main/main.module#MainModule', canActivate: [AuthenticatedGuard]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
