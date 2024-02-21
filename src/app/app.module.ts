import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';

// Application Components
import {AppComponent} from './app.component';
import {AppMainComponent} from './app.main.component';

// Demo pages
import {IconsComponent} from './utilities/icons.component';

import { AppLoginComponent } from './account/login/app.login.component';
//import { BlocksComponent } from './demo/blocks/blocks/blocks.component';

// Demo services
import {CountryService} from './demo/service/countryservice';
import {CustomerService} from './demo/service/customerservice';
import {EventService} from './demo/service/eventservice';
import {IconService} from './demo/service/iconservice';
import {NodeService} from './demo/service/nodeservice';
import {PhotoService} from './demo/service/photoservice';
import {ProductService} from './demo/service/productservice';
// Application services
import {BreadcrumbService} from './app.breadcrumb.service';
import {MenuService} from './app.menu.service';
import { MinefopService } from './demo/service/minefopService';
import { AppRoutingModule } from './app-routing.module';
import { EnumService } from './demo/service/enumService';
import { FormService } from './demo/service/base.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {PanelModule} from 'primeng/panel';
import {AccordionModule} from 'primeng/accordion';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SkeletonModule } from 'primeng/skeleton';
import { AppAccessdeniedComponent } from './utilities/app.accessdenied.component';
import { AppErrorComponent } from './utilities/app.error.component';
import { AppNotfoundComponent } from './utilities/app.notfound.component';
import { AppCodeModule } from './blocks/app-code/app.code.component';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        ReactiveFormsModule,
        CardModule,
        PanelModule,
        AccordionModule,
        RadioButtonModule,
        RatingModule,
        InputNumberModule,
        InputMaskModule,
        InputSwitchModule,
        InputTextModule,
        InputTextareaModule,
        SkeletonModule,
        AppCodeModule,




    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppErrorComponent,
        AppNotfoundComponent,
        AppLoginComponent,
        AppAccessdeniedComponent,
        IconsComponent,



    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, BreadcrumbService, MenuService,
         EnumService,  MessageService, ConfirmationService, FormService,
         EnumService,   MessageService, ConfirmationService,
            ],
    bootstrap: [AppComponent]
})
export class AppModule { }
