import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleInfoComponent } from './people-info/people-info.component';
import { PeopleComponent } from './people.component';
import { TransfomaFechaPipe } from 'src/app/components/shared/pipes/transfoma-fecha.pipe';

@NgModule({
  declarations: [PeopleComponent, PeopleListComponent, PeopleInfoComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  exports: [ PeopleComponent, PeopleListComponent, PeopleInfoComponent ]
})
export class PeopleModule { }
