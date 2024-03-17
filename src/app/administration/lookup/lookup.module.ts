import { NgModule } from "@angular/core";
import { LookupComponent } from "./lookup.component";
import { LookupRoutingModule } from "./lookup-routing.module";
import { PartegerModule } from "src/app/parteger/parteger.module";
import { DropdownModule } from "primeng/dropdown";
import { LookupDropdownCompoent } from "./lookup-dropdown/lookup-dropdown.component";
import { LookupResultsComponent } from "./lookup-results/lookup-results.component";

@NgModule({
    imports: [LookupRoutingModule, PartegerModule, DropdownModule],
    declarations: [
        LookupComponent,
        LookupDropdownCompoent,
        LookupResultsComponent,
    ],
    exports: [],
})
export class LookupModule {}
