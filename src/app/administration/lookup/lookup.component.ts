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
import { UsersListResponse } from "../utilisateur/users.adapter";
import { VulnerabilityModel } from "../vulnerabilite/vulnerability.model";
import { SearchFilter, SearchFilterTarget } from "./lookup.interfaces";
import { PersonnesService } from "../personnes/personnes.service";

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

    quartiersList: any[] = [{ name: "Cradat", id: "cr" }];

    targetList: { name: string; id: SearchFilterTarget }[] = [
        { name: "Personnes", id: "personnes" },
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

    loadingGetRegions: boolean = true;
    loadingGetDepartments: boolean = true;
    loadingGetCommunes: boolean = true;
    loadingGetQuartiers: boolean = true;
    loadingGetAgents: boolean = true;
    loadingGetVulnerabilities: boolean = true;

    filter: SearchFilter = {
        agentId: null,
        birthDateFrom: null,
        birthDateTo: null,
        communeId: null,
        departementId: null,
        quartierId: null,
        regionId: null,
        searchText: null,
        target: "menages",
        vulnerabilities: [],
    };

    selectedTarget: { name: string; id: SearchFilterTarget } = {
        name: "Personnes",
        id: "personnes",
    };

    listResults: any[] = [];

    searching: boolean = false;

    constructor(
        private personnesService: PersonnesService,
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

        this.loadingGetRegions = true;
        this.regionsService.getAll().subscribe((res: RegionModel[]) => {
            this.regionsList = res;
            this.loadingGetRegions = false;
        });

        this.loadingGetDepartments = true;
        this.departmentsService.getAll().subscribe((res: DepartmentModel[]) => {
            this.departmentsList = res;
            this.loadingGetDepartments = false;
        });

        this.loadingGetCommunes = true;
        this.communesService.getAll().subscribe((res: CommuneModel[]) => {
            this.communesList = res;
            this.loadingGetCommunes = false;
        });

        this.loadingGetQuartiers = true;
        this.quartiersService.getAll().subscribe((res: QuartierModel[]) => {
            this.quartiersList = res;
            this.loadingGetQuartiers = false;
        });

        this.loadingGetVulnerabilities = true;
        this.vulnerabilitiesService
            .getAll()
            .subscribe((res: VulnerabilityModel[]) => {
                this.vulnerabilitiesList = res;
                this.loadingGetVulnerabilities = false;
            });

        this.loadingGetAgents = true;
        this.usersServices
            .getAllDifferentsUsers()
            .subscribe((res: UsersListResponse) => {
                console.log("list of diffrentes users: ", res);
                this.agentsList = res.agents;
                this.loadingGetAgents = false;
            });
    }

    onQuartierChange(item) {
        if (!item) return;
        console.log(item);
        this.filter.quartierId = item.id;
        console.log(this.filter);
    }

    onCommuneChange(item) {
        if (!item) return;
        console.log(item);
        this.filter.communeId = item.id;
        console.log(this.filter);
    }

    onDepartmentChange(item) {
        if (!item) return;
        console.log(item);
        this.filter.departementId = item.id;
        console.log(this.filter);
    }

    onRegionChange(item) {
        if (!item) return;
        console.log(item);
        this.filter.regionId = item.id;
        console.log(this.filter);
    }

    onAgentChange(item) {
        if (!item) return;
        console.log(item);
        this.filter.agentId = item.id;
        console.log(this.filter);
    }

    onVunerabilitiesChange(item) {
        if (!item) return;
        console.log(item);
        this.filter.vulnerabilities = [item.id];
        console.log(this.filter);
    }

    onMenageChange(item) {
        if (!item) return;
        console.log(item);
        this.selectedTarget = item;
        this.filter.target = item.id;
        console.log(this.filter);
    }

    onSearch() {
        console.log("Search", this.filter);
        if (this.selectedTarget.id === "personnes") {
            this.searching = true;
            this.personnesService.lookup(this.filter).subscribe({
                next: (res) => {
                    console.log(res);
                    this.listResults = res;
                    this.searching = false;
                },
            });
        } else if (this.selectedTarget.id === "menages") {
            //
        }
    }
}
