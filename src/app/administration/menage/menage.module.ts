import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenageRoutingModule } from './menage-routing.module';
import { ListMenagesComponent } from './list-menages/list-menages.component';
import { DetailsMenageComponent } from './details-menage/details-menage.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListMenagesComponent,
    DetailsMenageComponent
  ],
  imports: [
    CommonModule,
    MenageRoutingModule,
    PartegerModule,

  ]
})
export class MenageModule { }
