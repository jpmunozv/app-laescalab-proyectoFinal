import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';

import { PlanetsListComponent} from './planets-list/planets-list.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component'


@NgModule({
  declarations: [PlanetInfoComponent,PlanetsListComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule
  ],
  exports: [PlanetsListComponent,PlanetInfoComponent]
})
export class PlanetsModule { }
