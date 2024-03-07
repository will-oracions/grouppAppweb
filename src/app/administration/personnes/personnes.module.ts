import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonnesRoutingModule } from './personnes-routing.module';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import { DetailsPersonnesComponent } from './details-personnes/details-personnes.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';

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
    DialogModule,
    CalendarModule,
    DialogModule,
    ToastModule,
    DropdownModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    ButtonModule,

  ]
})
export class PersonnesModule { }
