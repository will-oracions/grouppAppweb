import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunesRoutingModule } from './communes-routing.module';
import { ListCommuneComponent } from './list-commune/list-commune.component';
import { DetailsCommuneComponent } from './details-commune/details-commune.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListCommuneComponent,
    DetailsCommuneComponent
  ],
  imports: [
    CommonModule,
    CommunesRoutingModule,
    PartegerModule,

  ]
})
export class CommunesModule { }
