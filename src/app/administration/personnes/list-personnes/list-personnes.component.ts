import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-personnes',
  templateUrl: './list-personnes.component.html',
  styleUrls: ['./list-personnes.component.scss']
})
export class ListPersonnesComponent {
  load: boolean = false;

    tableColumns = [
        { header: 'Noms', field: 'noms' },
        { header: 'Prenoms', field: 'prenoms' },
        { header: 'Date Naissance', field: 'dateNaissance' },
        { header: "Region d'Origine", field: 'region' },
        { header: 'Genre', field: 'sexe' },

      ];

      tableData = [

      ];

      formsFields = [
        { name: 'noms', label: 'Noms', validators: [Validators.required] },
        { name: 'prenoms', label: 'Prenoms', type: 'text', validators: [Validators.required] },
        { name: 'dateNaissance', label: 'Date Naissance', type: 'date', validators: [Validators.required] },
        { name: 'region', label: "Region d'Origine", type: 'text', validators: [Validators.required] },
        { name: 'genre', label: 'Genre', type: 'text', validators: [Validators.required] },

    ];
    constructor(private service: FormService){}
    ngOnInit(): void {
      this.getAlls();
    }

    getAlls(){
      this.load = true;
      this.service.getAll("personnes").subscribe({
          next: value =>         {     this.tableData = value;
  
          },
          error: err => console.error('Observable emitted an error: ' + err),
          complete: () => {  this.load = false},
      });
    }
}
