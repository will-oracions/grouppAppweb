import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-menages',
  templateUrl: './list-menages.component.html',
  styleUrls: ['./list-menages.component.scss']
})
export class ListMenagesComponent {
  load: boolean = false;
  form: FormGroup;

  state:boolean =false;
  titlePage = 'Liste des Residences';
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

      constructor(private service: FormService, private fb: FormBuilder, private messageService: MessageService){}
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
      confirmDelete(){

      }
      printListe(){

      }
}
