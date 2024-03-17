import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionRoutingModule } from './region-routing.module';
import { ListRegionComponent } from './list-region/list-region.component';
import { DetailsRegionComponent } from './details-region/details-region.component';
import { ToastModule } from 'primeng/toast';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListRegionComponent,
    DetailsRegionComponent
  ],
  imports: [
    CommonModule,
    RegionRoutingModule,
    PartegerModule,
    ToastModule
  ]
})
export class RegionModule { }
