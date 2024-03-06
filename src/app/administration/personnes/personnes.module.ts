import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnesRoutingModule } from './personnes-routing.module';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import { DetailsPersonnesComponent } from './details-personnes/details-personnes.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    ListPersonnesComponent,
    DetailsPersonnesComponent
  ],
  imports: [
    CommonModule,
    PersonnesRoutingModule,
    PartegerModule,
    ButtonModule,
    TableModule,
    DialogModule

  ]
})
export class PersonnesModule { }
