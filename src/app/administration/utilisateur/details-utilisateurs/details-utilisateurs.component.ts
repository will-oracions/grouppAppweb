import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-details-utilisateurs',
  templateUrl: './details-utilisateurs.component.html',
  styleUrls: ['./details-utilisateurs.component.scss']
})
export class DetailsUtilisateursComponent {

  constructor(private breadcrumbService: BreadcrumbService ){
    this.breadcrumbService.setItems([
      { label: 'Liste Des Utilisateurs', routerLink:"/administration/utilisateur/list"},
      { label: 'Details Utilisateurs'},
  ]);
  }

}
