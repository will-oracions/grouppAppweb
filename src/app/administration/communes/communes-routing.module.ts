import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCommuneComponent } from './list-commune/list-commune.component';
import { DetailsCommuneComponent } from './details-commune/details-commune.component';

const routes: Routes = [
    { path: '', redirectTo: "list", pathMatch: "full"},
    { path: 'list', component: ListCommuneComponent},
    { path: 'details/:id', component: DetailsCommuneComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunesRoutingModule { }
