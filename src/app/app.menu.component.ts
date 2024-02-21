import { Component, OnInit } from '@angular/core';
import { ApplicationComponent } from './administration/application.component';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[];
    etudiant : any[];

    constructor(public app: ApplicationComponent) { }

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/administration']},
            {label: 'Utilisateur', icon: 'pi pi-fw pi-user', routerLink: ['/administration/utilisateur']},
            {label: 'Personnes', icon: 'pi pi-fw pi-users', routerLink: ['/administration/personnes']},
            {label: 'Menage', icon: 'pi pi-fw pi-building', routerLink: ['/administration/menage']},
            {label: 'Communes', icon: 'pi pi-fw pi-th-large', routerLink: ['/administration/communes']},
            {label: 'Quartiers', icon: 'pi pi-fw pi-table', routerLink: ['/administration/quartiers']},
            {label: 'Vulnerabilités', icon: 'pi pi-fw pi-tags', routerLink: ['/administration/vulnerabilite']},
            {label: 'Roles', icon: 'pi pi-fw pi-ticket', routerLink: ['/administration/roles']},

        ];
   
    }
}
