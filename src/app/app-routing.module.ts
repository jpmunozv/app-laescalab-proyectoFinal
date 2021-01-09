import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAppComponent } from './components/shared/home-app/home-app.component'
import { AuthenticatedGuard } from './components/shared/guards/authenticated.guard'


const routes: Routes = [

  {path: '', component: HomeAppComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},

   {
    path: 'auth',
    loadChildren: () =>
      import('./components/shared/authentication/authentication.module').then(m=>m.AuthenticationModule)
  },

  {
    path: 'films',
    loadChildren: () =>
      import('./components/pages/films/films.module').then(m=>m.FilmsModule)
  },
 
  {
    path: 'people',
    loadChildren: () =>
      import('./components/pages/people/people.module').then(m=>m.PeopleModule)
  },

  {

    path: 'planets',
    loadChildren: () =>
      import('./components/pages/planets/planets.module').then(m=>m.PlanetsModule)
  },


  {

    path: 'species',
    loadChildren: () =>
      import('./components/pages/species/species.module').then(m=>m.SpeciesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
