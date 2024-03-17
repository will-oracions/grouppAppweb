// Core modules
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Components
import { QuartiersRoutingModule } from './quartiers-routing.module';
import { ListQuartiersComponent } from './list-quartiers/list-quartiers.component';
import { DetailsQuartiersComponent } from './details-quartiers/details-quartiers.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';

// Prime NG
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [
    ListQuartiersComponent,
    DetailsQuartiersComponent
  ],
  imports: [
    // Components
    CommonModule,
    QuartiersRoutingModule,
    PartegerModule,
    ToastModule,
    // Prime NG
    ButtonModule,
    DialogModule,
    DropdownModule,
    CardModule,
    // Core modules
    FormsModule,    
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuartiersModule { }
