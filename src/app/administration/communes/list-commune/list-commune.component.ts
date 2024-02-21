import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-commune',
  templateUrl: './list-commune.component.html',
  styleUrls: ['./list-commune.component.scss']
})
export class ListCommuneComponent implements OnInit{
  load: boolean = false;

    tableColumns = [
        { header: 'Code', field: 'code' },
        { header: 'Libelle', field: 'libelle' },
      ];

      tableData = [
         ];

         formsFields = [
          { name: 'code', label: 'Code', type: 'text', validators: [Validators.required] },
            { name: 'libelle', label: 'Libelle', validators: [Validators.required] }
          ];
          constructor(private service: FormService){}
          ngOnInit(): void {
            this.getAlls();
          }
          getAlls(){
            this.load = true;
            this.service.getAll("communes").subscribe({
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
