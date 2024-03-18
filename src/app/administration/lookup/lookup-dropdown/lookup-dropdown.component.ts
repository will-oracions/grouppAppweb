import { Component, Input } from "@angular/core";

@Component({
    selector: "app-lookup-dropdown",
    templateUrl: "lookup-dropdown.component.html",
})
export class LookupDropdownCompoent {
    @Input() optionLabel: string;
    @Input() placeholder: string;

    @Input()
    listItem: any[] | undefined = [];

    selectedItem: any | undefined;

    ngOnInit() {}
}
