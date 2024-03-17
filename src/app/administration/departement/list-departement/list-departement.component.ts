import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./list-departement.component.scss']
})
export class ListDepartementComponent {
  load: boolean = false;

  tableColumns = [
      { header: 'Departement', field: 'departement' },
    ];

    tableData = [
       ];

       formsFields = [
          { name: 'departement', label: 'Departement', validators: [Validators.required] }
        ];
        constructor(private service: FormService, private breadcrumbService: BreadcrumbService){
          
      this.breadcrumbService.setItems([
        { label: 'Liste Des Departements'},
    ]);
        }
        ngOnInit(): void {
          this.getAlls();
        }
        getAlls(){
          this.load = true;
          this.service.getAll("departements").subscribe({
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
