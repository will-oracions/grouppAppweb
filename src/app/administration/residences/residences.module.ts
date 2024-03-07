import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidencesRoutingModule } from './residences-routing.module';
import { ListResidenceComponent } from './list-residence/list-residence.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';



@NgModule({
  declarations: [
    ListResidenceComponent,
    DetailsResidenceComponent
  ],
  imports: [
    CommonModule,
    ResidencesRoutingModule,
    PartegerModule,


  ]
})
export class ResidencesModule { }
