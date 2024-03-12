import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Table } from 'primeng/table';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
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

  communeData;
  form: FormGroup;
  
  
  constructor(private service: FormService, private fb: FormBuilder, private breadcrumbService: BreadcrumbService) { 
    this.breadcrumbService.setItems([
      { label: 'Liste Des Quartiers'},
  ]);
  }
  
  ngOnInit(): void {
    this.getAlls();
    this.getAllCommunes();
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

  getAllCommunes() {
    this.service.getAll('communes').subscribe({
      next: value => this.communeData = value,
      error: error => console.error('Observable emitted an error:', error),
      complete: () => this.load = false
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

  // Ajouter un nouveau quartier
  addQuarter() {
    if (this.form.valid) {
      this.service.create('quartiers', this.form.value)
        .subscribe(value => {
          this.formState = false;
          console.log('Created successfully !', value);
          this.ngOnInit();
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
}
