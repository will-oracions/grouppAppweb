import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VulnerabiliteRoutingModule } from './vulnerabilite-routing.module';
import { ListVulnerabiliteComponent } from './list-vulnerabilite/list-vulnerabilite.component';
import { DetailsVulnerabiliteComponent } from './details-vulnerabilite/details-vulnerabilite.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListVulnerabiliteComponent,
    DetailsVulnerabiliteComponent
  ],
  imports: [
    CommonModule,
    VulnerabiliteRoutingModule,
    PartegerModule,

  ]
})
export class VulnerabiliteModule { }
