import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-vulnerabilite',
  templateUrl: './list-vulnerabilite.component.html',
  styleUrls: ['./list-vulnerabilite.component.scss']
})
export class ListVulnerabiliteComponent implements OnInit{
    load : boolean = false;
    tableColumns = [
        { header: 'Libelle', field: 'nom' },
        { header: 'Description', field: 'description' },

      ];

      tableData = [
            ];
            formsFields = [
                { name: 'nom', label: 'Libelle de la vulnerabilité', type: 'text', validators: [Validators.required] },
                { name: 'description', label: 'Description', type: 'text', validators: [Validators.required] },

            ];


            constructor(private service: FormService){}
            ngOnInit(): void {
              this.getAlls();
            }
    
            getAlls(){
              this.load = true;
              this.service.getAll("vulnerabilite").subscribe({
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
