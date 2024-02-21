import { Component } from '@angular/core';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-residence',
  templateUrl: './list-residence.component.html',
  styleUrls: ['./list-residence.component.scss']
})
export class ListResidenceComponent {
  load: boolean = false;

    tableColumns = [
        { header: 'Name', field: 'name' },
        { header: 'Details', field: 'details' },
      ];

      tableData = [
        { id: 1, name: 'John Doe', details: { id: 101, name: 'John' } },
        { id: 2, name: 'Jane Doe', details: { id: 102, name: 'Jane' } },
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
}
