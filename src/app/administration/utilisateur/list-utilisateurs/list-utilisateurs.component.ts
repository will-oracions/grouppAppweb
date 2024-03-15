import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { BreadcrumbService } from 'src/app/app.breadcrumb.service';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./list-utilisateurs.component.scss']
})
export class ListUtilisateursComponent implements OnInit {
  load: boolean = false;
  state: boolean = false;
  deleteDialog: boolean = false;
  formTitle: string = "";
  deleteState: boolean = false;
  addEdit: boolean = false;
  temporaile: any = {};
  formulaires: FormGroup;
  roles:any;
  tableData = [
  ];


  constructor(private service: FormService, private breadcrumbService: BreadcrumbService, private messageService: MessageService, private fb: FormBuilder) {
    this.breadcrumbService.setItems([
      { label: 'Liste Des Utilisateurs' },

    ]);
  }
  ngOnInit(): void {
    this.formulaires = this.fb.group({
      id: [''],
      nom: [''],
      prenoms: [''],
      raisonSociale: [''],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      idrole: ["", Validators.required],
    });
    this.service.getAll("role").subscribe({
      next: value => {
        this.roles = value;

      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => { },
    });
    this.getAllUsers();
  }

  //getter for the form to make controler

  get nom() { return this.formulaires.get("nom"); }
  get prenoms() { return this.formulaires.get("prenoms"); }
  get raisonSociale() { return this.formulaires.get("raisonSociale"); }
  get username() { return this.formulaires.get("username"); }
  get password() { return this.formulaires.get("password"); }
  get idrole() { return this.formulaires.get("idrole"); }



  //get all users
  getAllUsers() {
    this.load = true;
    this.service.getAll("users").subscribe({
      next: value => {
        this.tableData = value;

      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => { this.load = false },
    });
  }
  //search filter
  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  //Open Add Dialog

  add() {
    this.temporaile = {};

    this.formTitle = "Ajouter un Utilisateur";
    this.addEdit = true;
  }
  //open Delete Dialog
  async opendeleteDialog(val: any) {
    this.temporaile = { ...val };
    this.deleteDialog = true;

  }
  //delete Users
  deleteUsers() {
    this.state = true;
    this.service.delete("users" + "/" + this.temporaile.id).subscribe((result) => {
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Supprimer avec success', life: 3000 });
      this.state = false;

      this.deleteDialog = false;
      this.ngOnInit();
      this.temporaile = {};

    },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Erreur', detail: error.message, life: 5000 });
        this.state = false;
      })

  }
  //Open Edit Dialog
  edit(val: any) {
    this.temporaile = {};
    console.log(val)
    this.formTitle = "Modifier un Utilisateur";
    this.temporaile = { ...val };
    this.addEdit = true;
  }
  modifier(){
    if (this.formulaires.invalid) {
      // Marquez tous les champs comme touchés pour afficher les erreurs
      this.formulaires.markAllAsTouched();
    }else{
      this.state = true
      this.service.update("users", this.formulaires.value, this.formulaires.value.id).subscribe({
          next: value =>    console.log(value) ,
          error: err => {
              console.error('Observable emitted an error: ' + err),
                     this.state = false ,
                     this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.message, life: 3000 });
                  },
          complete: () =>      {
            this.state = false; 
            this.formulaires.reset();
            this.addEdit = false

            this.ngOnInit();

              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Ajouté avec success', life: 3000 });
          },

      });
    }
  }
  save(){

    if (this.formulaires.invalid) {
      // Marquez tous les champs comme touchés pour afficher les erreurs
      this.formulaires.markAllAsTouched();
    }else{
      this.state = true

      this.service.create("users", this.formulaires.value).subscribe({
          next: value =>    console.log(value) ,
          error: err => {
              console.error('Observable emitted an error: ' + err),
                     this.state = false ,
                     this.messageService.add({ severity: 'error', summary: 'Erreur', detail: err.message, life: 3000 });
                  },
          complete: () =>      {
            this.state = false; 
            this.formulaires.reset();
            this.addEdit = false

            this.ngOnInit();

              this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Ajouté avec success', life: 3000 });
          },

      });
    }
  }
}
