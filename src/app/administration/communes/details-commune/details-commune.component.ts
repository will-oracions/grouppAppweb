import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-details-commune',
  templateUrl: './details-commune.component.html',
  styleUrls: ['./details-commune.component.scss']
})
export class DetailsCommuneComponent {
  constructor(private breadcrumbService: BreadcrumbService ){
    this.breadcrumbService.setItems([
      { label: 'Liste Des Communes', routerLink:"/administration/communes/list"},
      { label: 'Details Communes'},
  ]);
  }
}
