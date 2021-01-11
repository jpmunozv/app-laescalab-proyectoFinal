import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpeciesListComponent} from './species-list/species-list.component';
import { SpecieInfoComponent } from './specie-info/specie-info.component';
import { AuthenticatedGuard } from 'src/app/components/shared/guards/authenticated.guard'

const routes: Routes = [
  { path: "specieslist", component: SpeciesListComponent, canActivate: [AuthenticatedGuard]},
  { path: "species/detail/:id", component: SpecieInfoComponent, canActivate: [AuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeciesRoutingModule { }
