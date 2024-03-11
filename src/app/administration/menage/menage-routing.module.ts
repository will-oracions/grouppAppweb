import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMenagesComponent } from './list-menages/list-menages.component';
import { DetailsMenageComponent } from './details-menage/details-menage.component';

const routes: Routes = [
    { path: '', redirectTo: "list", pathMatch: "full"},
    { path: 'list', component: ListMenagesComponent},
    { path: 'details/:id', component: DetailsMenageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenageRoutingModule { }
