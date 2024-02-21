import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { DetailsUtilisateursComponent } from './details-utilisateurs/details-utilisateurs.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListUtilisateursComponent,
    DetailsUtilisateursComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    PartegerModule,

  ]
})
export class UtilisateurModule { }
