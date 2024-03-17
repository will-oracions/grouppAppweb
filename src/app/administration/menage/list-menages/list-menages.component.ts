import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-menages',
  templateUrl: './list-menages.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./list-menages.component.scss']
})
export class ListMenagesComponent {
  load: boolean = false;
  form: FormGroup;
  formTitle:any;
  state:boolean =false;
  titlePage = 'Liste des Résidences';
  deleteDialog: boolean = false;
  formState: boolean = false;
  temporaile:any = {};
  cols=[];

  quartiers:any;
    tableColumns = [
        { header: 'Name', field: 'name' },
        { header: 'Details', field: 'details' },
      ];

      tableData = [
        { id: 1, name: 'John Doe', details: { id: 101, name: 'John' } },
        { id: 2, name: 'Jane Doe', details: { id: 102, name: 'Jane' } },
      ];

      constructor(private service: FormService, private fb: FormBuilder, private messageService: MessageService, private breadcrumbService: BreadcrumbService){

        this.breadcrumbService.setItems([
          { label: 'Liste Des Ménages'},
      ]);
      }
      ngOnInit(): void {
        this.form = this.fb.group({
          id: [''],
          idquartier: ['', Validators.required],
          description: ['', [Validators.required, Validators.minLength(4)]]
        });
        this.getAlls();
        this.getAllsQuartiers();
      }

      get idquartier() { return this.form.get('idquartier') }
      get description() { return this.form.get('description') }


      getAlls(){
        this.load = true;
        this.service.getAll("residence").subscribe({
            next: value =>         {     this.tableData = value;
    
            },
            error: err => console.error('Observable emitted an error: ' + err),
            complete: () => {  this.load = false},
        });
      }
      getAllsQuartiers(){
        this.service.getAll("quartiers").subscribe({
            next: value =>         {     this.quartiers = value;
    
            },
            error: err => console.error('Observable emitted an error: ' + err),
            complete: () => { },
        });
      }
      add(){

          if (this.form.invalid) {
              // Marquez tous les champs comme touchés pour afficher les erreurs
              this.form.markAllAsTouched();
            }else{
              this.state = true
              this.service.create("residence", this.form.value).subscribe({
                  next: value =>    console.log(value) ,
                  error: err => {
                      console.error('Observable emitted an error: ' + err),
                             this.state = false ,
                             this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.message, life: 3000 });
        
                          },
                  complete: () =>      {
                    this.state = false; 
                    this.form.reset();
                    this.ngOnInit();
                    this.formState = false;
                      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Ajouté avec success', life: 3000 });
                  },
        
              });
            }
      }

      printListe(){

      }
      onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    edit(val: any) {
      this.temporaile= {};
      this.formTitle = "Modifier un Ménage";
        this.temporaile = { ...val };
        this.formState = true;
    }

    addDialog() {
      this.temporaile= {};
  
      this.formTitle = "Ajouter un Ménage";
      this.formState = true;
    }
  
  
    //open delete Dialog

async opendeleteDialog(val: any) {
  this.temporaile = { ...val };
  this.deleteDialog = true;

}

    //editer quartier
modifier(){
  if (this.form.invalid) {
    // Marquez tous les champs comme touchés pour afficher les erreurs
    this.form.markAllAsTouched();
  }else{
    this.state = true
    this.service.update("residence", this.form.value, this.form.value.id).subscribe({
        next: value =>    console.log(value) ,
        error: err => {
                   this.state = false ,
                   this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.message, life: 3000 });
                },
        complete: () =>      {
          this.state = false; 
          this.form.reset();
          this.formState = false

          this.ngOnInit();

            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Ajouté avec success', life: 3000 });
        },

    });
  }
}
//supprimer un quartier

deleteMenage(){
  this.state = true;
  this.service.delete("residence"+"/"+this.temporaile.id).subscribe((result) => {
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Supprimer avec success', life: 3000 });
    this.state = false;

    this.deleteDialog = false;
    this.ngOnInit();
    this.temporaile = {};

  },
  (error) =>{
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: error.message, life: 5000 });
    this.state = false;
  })

}
addMenage() {
  if (this.form.invalid) {
    // Marquez tous les champs comme touchés pour afficher les erreurs
    this.form.markAllAsTouched();
  }else{
    this.state = true



    this.service.create("residence", this.form.value).subscribe({
        next: value =>    console.log(value) ,
        error: err => {
            console.error('Observable emitted an error: ' + err),
                   this.state = false ,
                   this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.message, life: 3000 });
                },
        complete: () =>      {
          this.state = false; 
          this.form.reset();
          this.formState = false

          this.ngOnInit();

            this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Ajouté avec success', life: 3000 });
        },

    });
  }
}
}
