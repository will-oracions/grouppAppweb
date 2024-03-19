import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-lookup-dropdown",
    templateUrl: "lookup-dropdown.component.html",
})
export class LookupDropdownCompoent {
    @Input() optionLabel: string;
    @Input() placeholder: string;

    @Input() loading: boolean;

    @Input()
    listItem: any[] | undefined = [];

    @Output("onSelectItem") $onSelectItem: EventEmitter<any> =
        new EventEmitter();

    @Input()
    selectedItem: any | undefined;

    ngOnInit() {}

    onSelectItem(event: any) {
        this.$onSelectItem.emit(event.value);
        // console.log("change: ", event.value);
    }
}
