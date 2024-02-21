import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUtilisateursComponent } from './list-utilisateurs/list-utilisateurs.component';
import { DetailsUtilisateursComponent } from './details-utilisateurs/details-utilisateurs.component';

const routes: Routes = [
    { path: '', redirectTo: "list", pathMatch: "full"},
    { path: 'list', component: ListUtilisateursComponent},
    { path: 'details', component: DetailsUtilisateursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateurRoutingModule { }
