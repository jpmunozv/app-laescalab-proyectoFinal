import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './components/shared/header-app/header-app.component';
import { HomeAppComponent } from './components/shared/home-app/home-app.component';
import { FooterAppComponent } from './components/shared/footer-app/footer-app.component';
import { FilmsComponent } from './components/pages/films/films/films.component';
import { PeopleComponent } from './components/pages/people/people/people.component';
import { PlanetsComponent } from './components/pages/planets/planets.component';
import { SpeciesComponent } from './components/pages/species/species.component';
import { StarshipsComponent } from './components/pages/starships/starships.component';
import { VehiclesComponent } from './components/pages/vehicles/vehicles.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmInfoComponent } from './components/pages/films/film-info/film-info.component';
import { TransfomaFechaPipe } from './components/shared/pipes/transfoma-fecha.pipe';
import {PeopleModule} from './components/pages/people/people.module';
import { LoginComponent } from './components/shared/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

/*FIREBASE*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AuthenticatedGuard } from './components/shared/guards/authenticated.guard';
import { RegisterComponent } from './components/shared/login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    HomeAppComponent,
    FooterAppComponent,
    FilmsComponent,
    PeopleComponent,
    PlanetsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    FilmInfoComponent,
    TransfomaFechaPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
   ReactiveFormsModule,
   FormsModule,
   AngularFireModule.initializeApp(environment.firebase),
   AngularFireAuthModule,
   AngularFirestoreModule,
     
    
/*     FilmsModule,
    PeopleModule,
    PlanetsModule,
    SpeciesModule,
    StarshipsModule,
    VehiclesModule */
  ],
  providers: [AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
