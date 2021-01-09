import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { TransfomaFechaPipe } from './components/shared/pipes/transfoma-fecha.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './components/shared/header-app/header-app.component';
import { HomeAppComponent } from './components/shared/home-app/home-app.component';
import { FooterAppComponent } from './components/shared/footer-app/footer-app.component';

/*FIREBASE*/
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthenticatedGuard } from './components/shared/guards/authenticated.guard';

/* MODULES */
import { FilmsModule } from './components/pages/films/films.module';
import { PeopleModule } from './components/pages/people/people.module';
import { PlanetsModule } from './components/pages/planets/planets.module';
import { SpeciesModule } from './components/pages/species/species.module'
import { AuthenticationModule } from './components/shared/authentication/authentication.module'




@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,  
    HomeAppComponent,
    FooterAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FilmsModule,
    PeopleModule,
    PlanetsModule,
    SpeciesModule,
    AuthenticationModule,
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
