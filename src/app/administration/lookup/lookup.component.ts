import { Component, OnInit } from "@angular/core";
import { RegionsService } from "../region/regions.service";
import { DepartmentsService } from "../departement/departments.service";
import { CommunesService } from "../communes/communes.service";
import { QuartiersService } from "../quartiers/quartiers.service";
import { QuartierModel } from "../quartiers/quartier.model";
import { CommuneModel } from "../communes/commune.model";
import { DepartmentModel } from "../departement/department.model";
import { RegionModel } from "../region/region.model";
import { VulnerabilitiessService } from "../vulnerabilite/vulnerabilities.service";
import { ResidencesService } from "../residences/residences.service";
import { UsersService } from "../utilisateur/users.service";
import { UserModel } from "../utilisateur/user.model";
import { UsersListResponse } from "../utilisateur/users.adapter";

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
        private quartiersService: QuartiersService,
        private vulnerabilitiesService: VulnerabilitiessService,
        private residencesServices: ResidencesService,
        private usersServices: UsersService
    ) {}

    ngOnInit(): void {
        // this.personnesService.getAll().subscribe({
        //     next: (response) => {
        //         console.log("Persons list: ", response);
        //     },
        // });

        this.regionsService.getAll().subscribe((res: RegionModel[]) => {
            this.regionsList = res;
        });

        this.departmentsService.getAll().subscribe((res: DepartmentModel[]) => {
            this.departmentsList = res;
        });

        this.communesService.getAll().subscribe((res: CommuneModel[]) => {
            this.communesList = res;
        });

        this.quartiersService.getAll().subscribe((res: QuartierModel[]) => {
            this.streetsList = res;
        });

        this.vulnerabilitiesService
            .getAll()
            .subscribe((res: QuartierModel[]) => {
                this.vulnerabilitiesList = res;
            });

        this.usersServices
            .getAllDifferentsUsers()
            .subscribe((res: UsersListResponse) => {
                console.log("list of diffrentes users: ", res);
                this.agentsList = res.agents;
            });
    }
}
