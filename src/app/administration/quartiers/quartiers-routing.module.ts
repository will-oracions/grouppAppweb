import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuartiersComponent } from './list-quartiers/list-quartiers.component';
import { DetailsQuartiersComponent } from './details-quartiers/details-quartiers.component';

const routes: Routes = [
    { path: '', redirectTo: "list", pathMatch: "full"},
    { path: 'list', component: ListQuartiersComponent},
    { path: 'details', component: DetailsQuartiersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuartiersRoutingModule { }
