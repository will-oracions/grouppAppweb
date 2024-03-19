import { Component, Input } from "@angular/core";

@Component({
    selector: "app-lookup-results",
    templateUrl: "lookup-results.component.html",
})
export class LookupResultsComponent {
    @Input()
    listResults: any[] = [];

    @Input() loading: boolean = true;

    cols = [
        { field: "nom", header: "Noms" },
        { field: "date_naissance", header: "Date de Naissance" },
        { field: "statut", header: "Statut" },
        { field: "sexe", header: "Sexe" },
        { field: "is_chef_menage", header: "Est chef de menage ?" },
    ];
}
