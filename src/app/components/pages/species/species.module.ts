import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpeciesRoutingModule } from './species-routing.module';
import { SpeciesListComponent} from './species-list/species-list.component';
import { SpecieInfoComponent } from './specie-info/specie-info.component'

@NgModule({
  declarations: [SpeciesListComponent, SpecieInfoComponent],
  imports: [
    CommonModule,
    SpeciesRoutingModule
  ]
})
export class SpeciesModule { }
