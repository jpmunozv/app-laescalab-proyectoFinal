import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleInfoComponent } from './people-info/people-info.component';


@NgModule({
  declarations: [ PeopleListComponent, PeopleInfoComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
  
  ],
  exports: [  ]
})
export class PeopleModule { }
