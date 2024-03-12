import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenageRoutingModule } from './menage-routing.module';
import { ListMenagesComponent } from './list-menages/list-menages.component';
import { DetailsMenageComponent } from './details-menage/details-menage.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    ListMenagesComponent,
    DetailsMenageComponent
  ],
  imports: [
    CommonModule,
    MenageRoutingModule,
    PartegerModule,
    DialogModule,
    TableModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    ButtonModule,
    ToastModule
  ]
})
export class MenageModule { }
