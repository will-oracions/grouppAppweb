import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { DetailsDepartementComponent } from './details-departement/details-departement.component';

const routes: Routes = [
  { path: '', redirectTo: "list", pathMatch: "full"},
  { path: 'list', component: ListDepartementComponent},
  { path: 'details/:id', component: DetailsDepartementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementRoutingModule { 
 
}
