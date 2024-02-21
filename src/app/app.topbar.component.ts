import { Component, OnInit } from '@angular/core';
import { ApplicationComponent } from './administration/application.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent{
    constructor(public app: ApplicationComponent) {}
  ngOnInit(){
    //throw new Error('Method not implemented.');
  }
  
}
