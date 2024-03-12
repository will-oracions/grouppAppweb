import { Component } from '@angular/core';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';

@Component({
  selector: 'app-details-menage',
  templateUrl: './details-menage.component.html',
  styleUrls: ['./details-menage.component.scss']
})
export class DetailsMenageComponent {
  constructor(private breadcrumbService: BreadcrumbService ){
    this.breadcrumbService.setItems([
      { label: 'Liste Des Menages', routerLink:"/administration/menage/list"},
      { label: 'Details Menage'},
  ]);
  }
}
