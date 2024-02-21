import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { FormService } from 'src/app/demo/service/base.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
  providers: [MessageService, ConfirmationService],

})
export class GenericTableComponent {
    @Input() columns: any[] = [];
    @Input() data: any[] = [];
    @Input() titlePage: string = "";
    @Input() fields: any[] = [];
    @Input() endPoints: string;
    @Input() option: string = "";

    @Output() customsEvent = new EventEmitter<string>();
    deleteDialog: boolean = false;
    dynamicComponents: any = {};
    viewContainerRef: any;
    temporaile: any = {};
    visible: boolean = false;
    title: string = "";
    size= "7";
    state: string;
    temps: any;
    constructor(
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private service : FormService) {}

    ngOnInit() {
      this.columns.forEach((col) => {
        if (col.component) {
          this.dynamicComponents[col.field] = col.component;
        }
      });
    }

    createInjector(data: any) {
      const injector = Injector.create({
        providers: [{ provide: 'data', useValue: data }],
        parent: this.viewContainerRef.parentInjector,
      });
      return injector;
    }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
}
openNew() {
    this.title = "Ajouter"
    this.temporaile = {};
    this.state = "add";
    this.visible = true;
}



edit(val: any) {
    this.title = "Modifier"

    this.temporaile = { ...val };
    this.state = "modifier";
    this.visible = true;
}
async delete(val: any) {
  console.log(val)
  this.temps = {...val};
    this.deleteDialog = true;


}
deletes(item:any){
  this.service.delete(this.endPoints+"/"+this.temps.id).subscribe((result) => {
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Supprimer avec success', life: 3000 });

    this.deleteDialog = false;
    this.temporaile = {};
    this.event("refresh");

  },
  (error) =>{
    this.messageService.add({ severity: 'error', summary: 'Erreur', detail: error.message, life: 5000 });
  })

}
hideDialog() {
  this.visible = false;
}

event(event: any){
    if(event == "disabled"){
        this.visible = false;
    }else if(event == 'refresh'){
      this.visible = false;
      this.customsEvent.emit("refresh");

    }

}

}
