import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { AuthenticatedGuard } from '../../shared/guards/authenticated.guard';


const routes: Routes = [

    { path: 'peoplelist', component: PeopleListComponent, canActivate: [AuthenticatedGuard] } ,
    { path: 'people/detail/:id', component: PeopleInfoComponent, canActivate: [AuthenticatedGuard] }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
