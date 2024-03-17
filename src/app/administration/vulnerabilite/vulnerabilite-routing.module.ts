import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListVulnerabiliteComponent } from './list-vulnerabilite/list-vulnerabilite.component';
import { DetailsVulnerabiliteComponent } from './details-vulnerabilite/details-vulnerabilite.component';

const routes: Routes = [
    { path: '', redirectTo: "list", pathMatch: "full"},
    { path: 'list', component: ListVulnerabiliteComponent},
    { path: 'details/:id', component: DetailsVulnerabiliteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VulnerabiliteRoutingModule { }
