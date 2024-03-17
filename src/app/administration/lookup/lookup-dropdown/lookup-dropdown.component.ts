import { Component, Input } from "@angular/core";

@Component({
    selector: "app-lookup-dropdown",
    templateUrl: "lookup-dropdown.component.html",
})
export class LookupDropdownCompoent {
    @Input() optionLabel: string;
    @Input() placeholder: string;

    listItem: any[] | undefined;

    selectedItem: any | undefined;

    ngOnInit() {
        this.listItem = [
            { name: "Centre", code: "CE" },
            { name: "Sud", code: "SU" },
            { name: "Nord", code: "No" },
            { name: "Est", code: "ES" },
            { name: "Littoral", code: "LI" },
        ];
    }
}
