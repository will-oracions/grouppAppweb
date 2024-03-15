import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementRoutingModule } from './departement-routing.module';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { DetailsDepartementComponent } from './details-departement/details-departement.component';
import { ToastModule } from 'primeng/toast';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListDepartementComponent,
    DetailsDepartementComponent
  ],
  imports: [
    CommonModule,
    DepartementRoutingModule,
    PartegerModule,
    ToastModule
  ]
})
export class DepartementModule { }
