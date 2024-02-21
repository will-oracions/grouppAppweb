import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuartiersRoutingModule } from './quartiers-routing.module';
import { ListQuartiersComponent } from './list-quartiers/list-quartiers.component';
import { DetailsQuartiersComponent } from './details-quartiers/details-quartiers.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListQuartiersComponent,
    DetailsQuartiersComponent
  ],
  imports: [
    CommonModule,
    QuartiersRoutingModule,
    PartegerModule,

  ]
})
export class QuartiersModule { }
