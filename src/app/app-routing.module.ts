import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { AppLoginComponent } from './account/login/app.login.component';
import { AppAccessdeniedComponent } from './utilities/app.accessdenied.component';
import { AppErrorComponent } from './utilities/app.error.component';
import { AppNotfoundComponent } from './utilities/app.notfound.component';





@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: "", redirectTo: "login", pathMatch: "full"},

            {path: 'error', component: AppErrorComponent},
            {path: 'access', component: AppAccessdeniedComponent},
            {path: 'notfound', component: AppNotfoundComponent},
            {path: 'login', component: AppLoginComponent},
            { path: 'administration',
            loadChildren:() =>import('./administration/administration.module')
            .then(mod=>mod.AdministrationModule) },
         
            {path: '**', redirectTo: '/notfound'},
      


        ], {})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
