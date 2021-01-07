import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { TransfomaFechaPipe } from './components/shared/pipes/transfoma-fecha.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './components/shared/header-app/header-app.component';
import { HomeAppComponent } from './components/shared/home-app/home-app.component';
import { FooterAppComponent } from './components/shared/footer-app/footer-app.component';
import { FilmsListComponent } from './components/pages/films/films-list/films-list.component';
//import { PeopleComponent } from './components/pages/people/people-list/people-list.component';
//import { PlanetsComponent } from './components/pages/planets/planets/planets.component';
//import { SpeciesComponent } from './components/pages/species/species/species.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';
import { VehiclesComponent } from './components/pages/vehicles/vehicles.component';
import { LoginComponent } from './components/shared/login/login.component';
import { FilmInfoComponent } from './components/pages/films/film-info/film-info.component';
import { RegisterComponent } from './components/shared/login/register/register.component';
import { RegisterDoneMessageComponent } from './components/shared/login/register-done-message/register-done-message.component';
import { PeopleInfoComponent } from './components/pages/people/people-info/people-info.component';
import { PlanetInfoComponent } from './components/pages/planets/planet-info/planet-info.component';
import { SpecieInfoComponent } from './components/pages/species/specie-info/specie-info.component';
import { StarshipInfoComponent } from './components/pages/starships/starship-info/starship-info/starship-info.component';
import { VehicleInfoComponent } from './components/pages/vehicles/vehicle-info/vehicle-info/vehicle-info.component';

/*FIREBASE*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthenticatedGuard } from './components/shared/guards/authenticated.guard';

/* MODULES */
import { FilmsModule } from './components/pages/films/films.module';
import { PeopleModule } from './components/pages/people/people.module';



@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,  
    HomeAppComponent,
    FooterAppComponent,
    //PlanetsComponent,
    //SpeciesComponent,
    //FilmsComponent,
 /*    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    FilmInfoComponent,
    TransfomaFechaPipe,
    LoginComponent,
    RegisterComponent,
    RegisterDoneMessageComponent,
    PlanetInfoComponent,
    SpecieInfoComponent,
    StarshipInfoComponent,
    VehicleInfoComponent,
    PeopleInfoComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FilmsModule,
    PeopleModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [AuthenticatedGuard, TransfomaFechaPipe],
  exports: [TransfomaFechaPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
