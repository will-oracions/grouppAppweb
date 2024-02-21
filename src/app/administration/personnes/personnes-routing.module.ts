import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonnesComponent } from './list-personnes/list-personnes.component';
import { DetailsPersonnesComponent } from './details-personnes/details-personnes.component';

const routes: Routes = [
    { path: '', redirectTo: "list", pathMatch: "full"},
    { path: 'list', component: ListPersonnesComponent},
    { path: 'details', component: DetailsPersonnesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonnesRoutingModule { }
