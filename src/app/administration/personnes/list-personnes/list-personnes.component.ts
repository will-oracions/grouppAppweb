import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ConfirmationService, MessageService } from "primeng/api";
import { Table } from "primeng/table";
import { BreadcrumbService } from "src/app/app.breadcrumb.service";
import { AuthentificationsService } from "src/app/demo/service/auth.service";
import { FormService } from "src/app/demo/service/base.service";
import { PersonnesService } from "../personnes.service";
import {
    PersonSexEnum,
    PersonStatusEnum,
    PersonneModel,
} from "../personne.model";
import { PersonneCreateDto } from "../dto/personne-create.dto";

@Component({
    selector: "app-list-personnes",
    templateUrl: "./list-personnes.component.html",
    providers: [MessageService, ConfirmationService],
    styleUrls: ["./list-personnes.component.scss"],
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
    residences!: any;
    state: boolean = false;
    deleteDialog: boolean = false;
    chefs: boolean = false;
    vulnerabilite: any;
    utilisateurId: any;
    sexes = [
        { name: "Masculin", code: PersonSexEnum.MASCULIN },
        { name: "Feminin", code: PersonSexEnum.FEMININ },
    ];
    statuts = [
        { code: PersonStatusEnum.ALIVE, libelle: "En vie" },
        { code: PersonStatusEnum.DEAD, libelle: "Décédé" },
    ];
    regions: any[] = [];

    titlePage = "Liste des Personnes";

    tableColumns = [
        { header: "Noms", field: "noms" },
        { header: "Prenoms", field: "prenoms" },
        { header: "Date Naissance", field: "dateNaissance" },
        { header: "Region d'Origine", field: "region" },
        { header: "Genre", field: "sexe" },
    ];

    tableData: PersonneModel[] = [];

    formsFields = [
        { name: "noms", label: "Noms", validators: [Validators.required] },
        {
            name: "prenoms",
            label: "Prenoms",
            type: "text",
            validators: [Validators.required],
        },
        {
            name: "dateNaissance",
            label: "Date Naissance",
            type: "date",
            validators: [Validators.required],
        },
        {
            name: "region",
            label: "Region d'Origine",
            type: "text",
            validators: [Validators.required],
        },
        {
            name: "genre",
            label: "Genre",
            type: "text",
            validators: [Validators.required],
        },
    ];

    newPersonDto: PersonneCreateDto = new PersonneCreateDto();

    constructor(
        private service: FormService,
        private fb: FormBuilder,
        private messageService: MessageService,
        private breadcrumbService: BreadcrumbService,
        private utilisateur: AuthentificationsService,
        private personnesService: PersonnesService
    ) {
        this.breadcrumbService.setItems([{ label: "Liste Des Personnes" }]);
    }

    ngOnInit(): void {
        this.utilisateurId = this.utilisateur.userId;

        this.cols = [
            { field: "nom", header: "Noms" },
            { field: "date_naissance", header: "Date de Naissance" },
            { field: "statut", header: "Statut" },
            { field: "sexe", header: "Sexe" },
            { field: "is_chef_menage", header: "Est chef de menage ?" },
        ];

        this.formulaires = this.fb.group({
            id: [""],
            nom: ["", Validators.required],
            date_naissance: ["", Validators.required],
            statut: ["", Validators.required],
            regionId: ["", Validators.required],
            sexe: ["", Validators.required],
            is_cni: [false],
            is_actenaissance: [false],
            is_autochtone: [false],
            is_handicape: [false],
            is_chef_menage: [false],
            idresidence: [""],
            parentId: [""],
            vulnerabilite: [""],
            utilisateurId: ["", Validators.required],
        });

        this.getAlls();
        this.getAllResidence();
        this.getAllChef();
        this.getAllVulnerabilite();
        this.getAllRegion();
    }

    changeValidator() {
        console.log("change");
        this.formulaires
            .get("is_chef_menage")
            .valueChanges.subscribe((value) => {
                const perIdControl = this.formulaires.get("parentId");

                // Effacer les erreurs existantes
                perIdControl.setErrors(null);

                // Ajouter le validateur required si is_chef_menage est true
                if (value) {
                    perIdControl.setValidators([]);
                    perIdControl.setValue("");
                } else {
                    perIdControl.setValue("");
                    console.log();
                    perIdControl.setValidators([Validators.required]);
                }

                // Mettre à jour le validateur
                perIdControl.updateValueAndValidity();
            });
    }

    // get nom() {
    //     return this.formulaires.get("nom");
    // }
    // get date_naissance() {
    //     return this.formulaires.get("date_naissance");
    // }
    // get statut() {
    //     return this.formulaires.get("statut");
    // }
    // get regionid() {
    //     return this.formulaires.get("regionId");
    // }
    // get sexe() {
    //     return this.formulaires.get("sexe");
    // }
    // get is_cni() {
    //     return this.formulaire.get("is_cni");
    // }
    // get is_actenaissance() {
    //     return this.formulaires.get("is_actenaissance");
    // }
    // get is_autochtone() {
    //     return this.formulaires.get("is_autochtone");
    // }
    // get is_handicape() {
    //     return this.formulaires.get("is_handicape");
    // }
    // get is_chef_menage() {
    //     return this.formulaires.get("is_chef_menage");
    // }
    get idresidence() {
        return this.formulaires.get("idresidence");
    }
    get Per_id() {
        return this.formulaires.get("parentId");
    }

    getAlls() {
        this.load = true;
        // this.service.getAll("personnes").subscribe({
        this.personnesService.getAll().subscribe({
            next: (personnes: PersonneModel[]) => {
                this.tableData = personnes;
            },
            error: (err) =>
                console.error("Observable emitted an error: " + err),
            complete: () => {
                this.load = false;
            },
        });
    }

    getAllVulnerabilite() {
        this.service.getAll("vulnerabilite").subscribe({
            next: (value) => {
                this.vulnerabilite = value;
            },
            error: (err) =>
                console.error("Observable emitted an error: " + err),
            complete: () => {},
        });
    }

    getAllChef() {
        this.service.getAll("chef/all/personnes").subscribe({
            next: (value) => {
                this.chefs = value;
            },
            error: (err) =>
                console.error("Observable emitted an error: " + err),
            complete: () => {},
        });
    }

    getAllResidence() {
        this.service.getAll("residence").subscribe({
            next: (value) => {
                this.residences = value;
            },
            error: (err) =>
                console.error("Observable emitted an error: " + err),
            complete: () => {
                console.log("ok");
            },
        });
    }

    getAllRegion() {
        this.service.getAll("regions").subscribe({
            next: (value) => {
                this.regions = value;
            },
            error: (err) =>
                console.error("Observable emitted an error: " + err),
            complete: () => {
                console.log("ok");
            },
        });
    }

    add() {
        this.temporaile = {};

        this.formTitle = "Ajouter une Personne";
        this.addEdit = true;
    }

    async opendeleteDialog(val: any) {
        this.temporaile = { ...val };
        this.deleteDialog = true;
    }

    deletePersonne() {
        this.state = true;
        this.service.delete("personnes" + "/" + this.temporaile.id).subscribe(
            (result) => {
                this.messageService.add({
                    severity: "success",
                    summary: "Successful",
                    detail: "Supprimer avec success",
                    life: 3000,
                });
                this.state = false;

                this.deleteDialog = false;
                this.ngOnInit();
                this.temporaile = {};
            },
            (error) => {
                this.messageService.add({
                    severity: "error",
                    summary: "Erreur",
                    detail: error.message,
                    life: 5000,
                });
                this.state = false;
            }
        );
    }

    edit(val: any) {
        this.temporaile = {};
        this.formTitle = "Modifier une Personne";
        this.temporaile = { ...val };
        this.addEdit = true;
    }

    printListe() {
        this.service.printListe(
            this.titlePage,
            document.getElementById("toPrint").innerHTML
        );
    }

    modifier() {
        if (this.formulaires.invalid) {
            // Marquez tous les champs comme touchés pour afficher les erreurs
            this.formulaires.markAllAsTouched();
        } else {
            this.state = true;
            this.service
                .update(
                    "personnes",
                    this.formulaires.value,
                    this.formulaires.value.id
                )
                .subscribe({
                    next: (value) => console.log(value),
                    error: (err) => {
                        console.error("Observable emitted an error: " + err),
                            (this.state = false),
                            this.messageService.add({
                                severity: "error",
                                summary: "Erreur",
                                detail: err.message,
                                life: 3000,
                            });
                    },
                    complete: () => {
                        this.state = false;
                        this.formulaires.reset();
                        this.addEdit = false;

                        this.ngOnInit();

                        this.messageService.add({
                            severity: "success",
                            summary: "Successful",
                            detail: "Ajouté avec success",
                            life: 3000,
                        });
                    },
                });
        }
    }

    save() {
        this.formulaires.value.utilisateurId = this.utilisateurId;
        console.log(this.formulaires.value);

        if (this.formulaires.invalid) {
            // Marquez tous les champs comme touchés pour afficher les erreurs
            this.formulaires.markAllAsTouched();
        } else {
            this.state = true;
            const formData = {
                id: this.formulaires.value.id,
                nom: this.formulaires.value.nom,
                date_naissance: this.formulaires.value.date_naissance,
                statut: this.formulaires.value.statut,
                regionId: this.formulaires.value.regionId,
                sexe: this.formulaires.value.sexe,
                is_cni: this.formulaires.value.is_cni,
                is_actenaissance: this.formulaires.value.is_actenaissance,
                is_autochtone: this.formulaires.value.is_autochtone,
                is_handicape: this.formulaires.value.is_handicape,
                is_chef_menage: this.formulaires.value.is_chef_menage,
                idresidence: this.formulaires.value.idresidence,
                vulnerabilite: this.formulaires.value.vulnerabilite,
                utilisateurId: this.formulaires.value.utilisateurId,
            };

            // Vérifier si le champ ParentId est vide
            if (this.formulaires.value.parentId !== "") {
                // Ajouter le champ ParendId à l'objet formData
                formData["parentId"] = this.formulaires.value.parentId;
            }
            this.service.create("personnes", formData).subscribe({
                next: (value) => console.log(value),
                error: (err) => {
                    console.error("Observable emitted an error: " + err),
                        (this.state = false),
                        this.messageService.add({
                            severity: "error",
                            summary: "Erreur",
                            detail: err.message,
                            life: 3000,
                        });
                },
                complete: () => {
                    this.state = false;
                    this.formulaires.reset();
                    this.addEdit = false;

                    this.ngOnInit();

                    this.messageService.add({
                        severity: "success",
                        summary: "Successful",
                        detail: "Ajouté avec success",
                        life: 3000,
                    });
                },
            });
        }
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal(
            (event.target as HTMLInputElement).value,
            "contains"
        );
    }
}
