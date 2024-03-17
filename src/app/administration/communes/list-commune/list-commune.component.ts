import { Component, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { MessageService, ConfirmationService } from "primeng/api";
import { BreadcrumbService } from "src/app/app.breadcrumb.service";
import { FormService } from "src/app/demo/service/base.service";

@Component({
    selector: "app-list-commune",
    templateUrl: "./list-commune.component.html",
    providers: [MessageService, ConfirmationService],
    styleUrls: ["./list-commune.component.scss"],
})
export class ListCommuneComponent implements OnInit {
    load: boolean = false;

    tableColumns = [{ header: "Commune", field: "commune" }];

    tableData = [];

    formsFields = [
        {
            name: "commune",
            label: "Commune",
            validators: [Validators.required],
        },
    ];
    constructor(
        private service: FormService,
        private breadcrumbService: BreadcrumbService
    ) {
        this.breadcrumbService.setItems([{ label: "Liste Des Communes" }]);
    }

    ngOnInit(): void {
        this.getAlls();
    }

    getAlls() {
        this.load = true;
        this.service.getAll("communes").subscribe({
            next: (value) => {
                this.tableData = value;
            },
            error: (err) =>
                console.error("Observable emitted an error: " + err),
            complete: () => {
                this.load = false;
            },
        });
    }

    event(event: any) {
        if (event == "refresh") {
            this.ngOnInit();
        }
    }
}
