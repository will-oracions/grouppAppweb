import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-list-personnes',
  templateUrl: './list-personnes.component.html',
  styleUrls: ['./list-personnes.component.scss']
})
export class ListPersonnesComponent {
  load: boolean = false;
  deleteState: boolean = false;
  addEdit: boolean = false;
  cols: any[];
  temporaile: any = {};
  formulaire: FormGroup;
  formulaires: FormGroup;
  formTitle: string = "";
  residences!:any;
  sexes = [
    { name: 'Masculin', code: 'MASCULIN' },
    { name: 'Feminin', code: 'FEMININ' },

  ];
  statuts = [
    { code: "vie", libelle: "En vie" },
    { code: "mort", libelle: "Décédé" },

  ];
  regions = [
    { code: "CE", libelle: "Centre" },
    { code: "OU", libelle: "Ouest" },
    { code: "ES", libelle: "Est" },
    { code: "NRD", libelle: "Nord" },
    { code: "Lit", libelle: "Littoral" },
    { code: "SW", libelle: "Sud Ouest" },
    { code: "NW", libelle: "Nord Ouest" },
    { code: "SD", libelle: "Sud" },
    { code: "NE", libelle: "Nord Est" },
    { code: "SE", libelle: "Sud Est" },
  ]
  titlePage = "Liste des Personnes"
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
  constructor(private service: FormService,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.formulaires = this.fb.group({
      id: [''],
      nom: ['', Validators.required],
      date_naissance: ['', Validators.required],
      statut: ['', Validators.required],
      region: ['', Validators.required],
      sexe: ['', Validators.required],
      is_cni: [''],
      is_actenaissance: [''],
      is_autochtone: ['', Validators.required],
      is_handicape: ['', Validators.required],
      is_chef_menage: ['', Validators.required],
      id_residence: ['', Validators.required],
      Per_id: [0],
    });
    this.getAlls();
    this.getAllResidence();
  }


  get nom() { return this.formulaires.get("nom"); }
  get date_naissance() { return this.formulaires.get("date_naissance"); }
  get statut() { return this.formulaires.get("statut"); }
  get region() { return this.formulaires.get("region"); }
  get sexe() { return this.formulaires.get("sexe"); }
  get is_cni() { return this.formulaire.get("is_cni"); }
  get is_actenaissance() { return this.formulaires.get("is_actenaissance"); }
  get is_autochtone() { return this.formulaires.get("is_autochtone"); }
  get is_handicape() { return this.formulaires.get("is_handicape"); }
  get is_chef_menage() { return this.formulaires.get("is_chef_menage"); }
  get id_residence() { return this.formulaires.get("etudiantId"); }
  get Per_id() { return this.formulaires.get("Per_id"); }

  getAlls() {
    this.load = true;
    this.service.getAll("personnes").subscribe({
      next: value => {
        this.tableData = value;

      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => { this.load = false },
    });
  }

  
  getAllResidence() {
    this.service.getAll("residence").subscribe({
      next: value => {
        this.residences = value;

      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () => { console.log("ok");},
    });
  }

  add() {
    this.temporaile= {};

    this.formTitle = "Ajouter une  Personne";
    this.addEdit = true;
  }
  async delete(val: any) {
    this.temporaile = { ...val };
    this.addEdit = true;

  }

  edit(val: any) {
    this.temporaile= {};
    this.formTitle = "Modifier une personne";
      this.temporaile = { ...val };
      this.addEdit = true;
  }
  printListe() {

  }
}
