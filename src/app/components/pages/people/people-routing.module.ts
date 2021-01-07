import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { PeopleComponent } from './people.component'

const routes: Routes = [

    //path: 'people', component: PeopleComponent,
    { path: 'peoplelist', component: PeopleListComponent } ,
    { path: 'people/detail/:id', component: PeopleInfoComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
