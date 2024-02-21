import { Component } from '@angular/core';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-menages',
  templateUrl: './list-menages.component.html',
  styleUrls: ['./list-menages.component.scss']
})
export class ListMenagesComponent {
  load: boolean = false;

    tableColumns = [
        { header: 'Name', field: 'name' },
        { header: 'Details', field: 'details' },
      ];

      tableData = [
   
      ];

      constructor(private service: FormService){}
      ngOnInit(): void {
        this.getAlls();
      }
      getAlls(){
        this.load = true;
        this.service.getAll("residence").subscribe({
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
