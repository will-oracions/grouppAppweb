import { Component, OnInit } from '@angular/core';
import { ApplicationComponent } from './administration/application.component';
import { AuthentificationsService } from './demo/service/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent{
    constructor(public app: ApplicationComponent,private service:  AuthentificationsService) {}
  ngOnInit(){
    //throw new Error('Method not implemented.');
  }
  logout(){
    this.service.logout();
  }
}
