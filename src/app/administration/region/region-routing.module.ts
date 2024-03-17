import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRegionComponent } from './list-region/list-region.component';
import { DetailsRegionComponent } from './details-region/details-region.component';

const routes: Routes = [
  { path: '', redirectTo: "list", pathMatch: "full"},
  { path: 'list', component: ListRegionComponent},
  { path: 'details/:id', component: DetailsRegionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegionRoutingModule { }
