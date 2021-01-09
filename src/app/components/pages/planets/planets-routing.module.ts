import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanetsListComponent} from './planets-list/planets-list.component';
import { PlanetInfoComponent } from './planet-info/planet-info.component'
import { AuthenticatedGuard } from 'src/app/components/shared/guards/authenticated.guard';

const routes: Routes = [

  { path: 'planetslist', component: PlanetsListComponent, canActivate: [AuthenticatedGuard] },
  { path: 'planets/detail/:id', component: PlanetInfoComponent, canActivate: [AuthenticatedGuard] }

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
