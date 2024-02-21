import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListResidenceComponent } from './list-residence/list-residence.component';
import { DetailsResidenceComponent } from './details-residence/details-residence.component';

const routes: Routes = [
    { path: '', redirectTo: "list"},
    { path: 'list', component: ListResidenceComponent},
    { path: 'details', component: DetailsResidenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidencesRoutingModule { }
