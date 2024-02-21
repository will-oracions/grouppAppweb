import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { ListRoleComponent } from './list-role/list-role.component';
import { PartegerModule } from 'src/app/parteger/parteger.module';


@NgModule({
  declarations: [
    ListRoleComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,
    PartegerModule,

  ]
})
export class RoleModule { }
