import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-quartiers',
  templateUrl: './list-quartiers.component.html',
  styleUrls: ['./list-quartiers.component.scss']
})
export class ListQuartiersComponent {
  load: boolean = false;
  titlePage = 'Quartiers';

  tableColumns = [
    { header: 'Libelle', field: 'libelle' },
  ];

  tableData = [];
  cols = [];
  temporaile: any = {};

  formsFields = [
    { name: 'idCommunes', label: 'Communes', type: 'dropdown', validators: [Validators.required], state: "commune" },
    { name: 'libelle', label: 'Libelle', type: 'text', validators: [Validators.required] },
  ];

  
  deleteState = false;
  formState = false;

  form: FormGroup;
  
  
  constructor(private service: FormService, private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.getAlls();
    this.form = this.fb.group({
      id: [''],
      idCommunes: ['', Validators.required],
      libelle: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  // getters
  get id() { return this.form.get('id') }
  get idCommunes() { return this.form.get('idCommunes') }
  get libelle() { return this.form.get('libelle') }

  getAlls() {
    this.load = true;
    this.service.getAll("quartiers").subscribe({
      next: value => {
        this.tableData = value;
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => { this.load = false },
    });
  }



  event(event: any) {
    if (event == 'refresh') {

      this.ngOnInit()
    }

  }


  // Edit item...
  edit() {
    this.service.update('quartiers', this.form.value, this.temporaile.id);
  }


  // Delete item...
  delete(itemIDs) {

  }


  // Print list
  printListe() {

  }

  openCreateQuarterModal() {
    this.formState = true;
  }

  add() {
  }
}
