import { Component, OnInit } from "@angular/core";
import { RegionsService } from "../region/regions.service";
import { DepartmentsService } from "../departement/departments.service";
import { CommunesService } from "../communes/communes.service";
import { QuartiersService } from "../quartiers/quartiers.service";
import { QuartierModel } from "../quartiers/quartier.model";
import { CommuneModel } from "../communes/commune.model";
import { DepartmentModel } from "../departement/department.model";
import { RegionModel } from "../region/region.model";

export type LookupTarget = "persons" | "menages";

@Component({
    selector: "app-lookup",
    templateUrl: "lookup.component.html",
})
export class LookupComponent implements OnInit {
    regionsList: any[] = [
        { name: "Centre", id: "CE" },
        { name: "Sud", id: "SU" },
        { name: "Nord", id: "No" },
        { name: "Est", id: "ES" },
        { name: "Littoral", id: "LI" },
    ];

    departmentsList: any[] = [
        { name: "Ocean", id: "Oc" },
        { name: "Mfoundi", id: "mp" },
    ];

    communesList: any[] = [{ name: "Yaoundé I", id: "Y1" }];

    streetsList: any[] = [{ name: "Cradat", id: "cr" }];

    targetList: any[] = [
        { name: "Personnes", id: "persons" },
        { name: "Ménage", id: "menages" },
    ];

    agentsList: any[] = [
        { id: 1, name: "Leoard" },
        { id: 2, name: "Rebecca" },
    ];

    vulnerabilitiesList: any[] = [
        { id: 1, name: "Analphabet" },
        { id: 2, name: "Malvoyant" },
    ];

    constructor(
        // private personnesService: PersonnesService,
        private regionsService: RegionsService,
        private departmentsService: DepartmentsService,
        private communesService: CommunesService,
        private quartiersService: QuartiersService
    ) {}

    ngOnInit(): void {
        // this.personnesService.getAll().subscribe({
        //     next: (response) => {
        //         console.log("Persons list: ", response);
        //     },
        // });

        this.regionsService.getAll().subscribe((res: RegionModel[]) => {
            console.log("regions list: ", res);
            this.regionsList = res;
        });

        this.departmentsService.getAll().subscribe((res: DepartmentModel[]) => {
            console.log("Departments list: ", res);
            this.departmentsList = res;
        });

        this.communesService.getAll().subscribe((res: CommuneModel[]) => {
            console.log("Communes list: ", res);
            this.communesList = res;
        });

        this.quartiersService.getAll().subscribe((res: QuartierModel[]) => {
            console.log("Quartiers list: ", res);
            this.streetsList = res;
        });
    }
}
