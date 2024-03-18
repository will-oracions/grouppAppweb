import { NgModule } from "@angular/core";
import { LookupComponent } from "./lookup.component";
import { LookupRoutingModule } from "./lookup-routing.module";
import { PartegerModule } from "src/app/parteger/parteger.module";
import { DropdownModule } from "primeng/dropdown";
import { LookupDropdownCompoent } from "./lookup-dropdown/lookup-dropdown.component";
import { LookupResultsComponent } from "./lookup-results/lookup-results.component";
import { PersonnesService } from "../personnes/personnes.service";
import { PersonneAdapter } from "../personnes/personne.adapter";
import { RegionsService } from "../region/regions.service";
import { RegionAdapter } from "../region/region.adapter";
import { QuartiersService } from "../quartiers/quartiers.service";
import { QuartierAdapter } from "../quartiers/quartier.adapter";
import { CommunesService } from "../communes/communes.service";
import { CommuneAdapter } from "../communes/communes.adapter";
import { DepartmentsService } from "../departement/departments.service";
import { DepartmentAdapter } from "../departement/department.adapter";
import { ResidencesService } from "../residences/residences.service";
import { ResidenceAdapter } from "../residences/residences.adapter";
import { VulnerabilitiessService } from "../vulnerabilite/vulnerabilities.service";
import { VulnerabilitiesAdapter } from "../vulnerabilite/vulnerabilities.adapter";

@NgModule({
    imports: [LookupRoutingModule, PartegerModule, DropdownModule],
    declarations: [
        LookupComponent,
        LookupDropdownCompoent,
        LookupResultsComponent,
    ],
    providers: [
        PersonnesService,
        PersonneAdapter,
        RegionsService,
        RegionAdapter,
        QuartiersService,
        QuartierAdapter,
        CommunesService,
        CommuneAdapter,
        DepartmentsService,
        DepartmentAdapter,
        ResidencesService,
        ResidenceAdapter,
        VulnerabilitiessService,
        VulnerabilitiesAdapter,
        ResidencesService,
        ResidenceAdapter,
    ],
    exports: [],
})
export class LookupModule {}
