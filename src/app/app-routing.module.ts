import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsListComponent } from './components/pages/films/films-list/films-list.component';

import { PlanetsComponent } from './components/pages/planets/planets-list/planets-list.component';
import { SpeciesComponent } from './components/pages/species/species/species.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';
import { VehiclesComponent } from './components/pages/vehicles/vehicles.component';
import { FilmInfoComponent } from './components/pages/films/film-info/film-info.component';
import { HomeAppComponent } from './components/shared/home-app/home-app.component'
import { HeaderAppComponent } from './components/shared/header-app/header-app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { AuthenticatedGuard } from './components/shared/guards/authenticated.guard'
import { RegisterComponent } from './components/shared/login/register/register.component';
import { RegisterDoneMessageComponent } from './components/shared/login/register-done-message/register-done-message.component';
import { PeopleInfoComponent } from './components/pages/people/people-info/people-info.component';
import { PlanetInfoComponent } from './components/pages/planets/planet-info/planet-info.component';
import { SpecieInfoComponent } from './components/pages/species/specie-info/specie-info.component';

const routes: Routes = [

  {path: '', component: HomeAppComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},


  {
    //path: 'films',
    //path: 'films/detail/:id',
    path: 'filmlist',
    //canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./components/pages/films/films.module').then(m=>m.FilmsModule)
  },
 
  {

    path: 'peoplelist',
    //canActivate: [AuthenticatedGuard],
    loadChildren: () =>
      import('./components/pages/people/people.module').then(m=>m.PeopleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
