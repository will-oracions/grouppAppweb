import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent {
  load: boolean = false;

    tableColumns = [
        { header: 'Libelle', field: 'libelle' },
      ];

      tableData = [
           ];

           formsFields = [
            { name: 'libelle', label: 'Libelle', type: 'text', validators: [Validators.required] },

        ];
        constructor(private service: FormService){}
        ngOnInit(): void {
          this.getAlls();
        }

        getAlls(){
          this.load = true;
          this.service.getAll("role").subscribe({
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
