import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { DetailsUtilisateursComponent } from './details-utilisateurs/details-utilisateurs.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ListUtilisateursComponent,
    DetailsUtilisateursComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    PartegerModule,
    AccordionModule,
    BadgeModule,
    ButtonModule,
    PasswordModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,

  ]
})
export class UtilisateurModule { }
