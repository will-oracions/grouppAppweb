import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-region',
  templateUrl: './list-region.component.html',
  providers: [MessageService, ConfirmationService],

  styleUrls: ['./list-region.component.scss']
})
export class ListRegionComponent {
  load: boolean = false;

  tableColumns = [
      { header: 'Region', field: 'region' },
    ];

    tableData = [
       ];

       formsFields = [
        { name: 'region', label: 'Region', type: 'text', validators: [Validators.required] },
        ];
        constructor(private service: FormService, private breadcrumbService: BreadcrumbService){
          
      this.breadcrumbService.setItems([
        { label: 'Liste Des Regions'},
    ]);
        }
        ngOnInit(): void {
          this.getAlls();
        }
        getAlls(){
          this.load = true;
          this.service.getAll("regions").subscribe({
              next: value =>         {     this.tableData = value;
      
              },
              error: err => console.error('Observable emitted an error: ' + err),
              complete: () => {  this.load = false},
          });
        }
        event(event: any){
          if(event == 'refresh'){
 
             this.ngOnInit()
           }
       
       }
}
