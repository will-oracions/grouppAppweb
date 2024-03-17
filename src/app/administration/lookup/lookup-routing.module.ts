import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { LookupComponent } from "./lookup.component";

const routes: Route[] = [
    {
        path: "",
        component: LookupComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LookupRoutingModule {}
