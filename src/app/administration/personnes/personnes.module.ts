import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnesRoutingModule } from './personnes-routing.module';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import { DetailsPersonnesComponent } from './details-personnes/details-personnes.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListPersonnesComponent,
    DetailsPersonnesComponent
  ],
  imports: [
    CommonModule,
    PersonnesRoutingModule,
    PartegerModule,

  ]
})
export class PersonnesModule { }
