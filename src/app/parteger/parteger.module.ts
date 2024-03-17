import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashoardSkeletonComponent } from "./dashoard-skeleton/dashoard-skeleton.component";
import { DefaultSkeletonComponent } from "./default-skeleton/default-skeleton.component";
import { GeneralSkeletonComponent } from "./general-skeleton/general-skeleton.component";
import { SkeletonModule } from "primeng/skeleton";
import { PanelModule } from "primeng/panel";
import { PanelMenuModule } from "primeng/panelmenu";
import { SkelletonComponent } from "./skelleton/skelleton.component";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";
import { FileUploadModule } from "primeng/fileupload";
import { ProgressBarModule } from "primeng/progressbar";
import { GenericTableComponent } from "./generic-table/generic-table.component";
import { GenericFormsComponent } from "./generic-forms/generic-forms.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastModule } from "primeng/toast";
import { DropdownModule } from "primeng/dropdown";
import { PortraitComponent } from "./portrait/portrait.component";
import { InputTextModule } from "primeng/inputtext";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
    declarations: [
        DashoardSkeletonComponent,
        DefaultSkeletonComponent,
        GeneralSkeletonComponent,
        SkelletonComponent,
        GenericTableComponent,
        GenericFormsComponent,
        PortraitComponent,
    ],
    exports: [
        DashoardSkeletonComponent,
        DefaultSkeletonComponent,
        GeneralSkeletonComponent,
        SkelletonComponent,
        GenericTableComponent,
        GenericFormsComponent,
        TableModule,
        ToastModule,
        PortraitComponent,
        InputTextModule,
        CheckboxModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    imports: [
        CommonModule,
        SkeletonModule,
        PanelModule,
        PanelMenuModule,
        TableModule,
        DialogModule,
        ButtonModule,
        FileUploadModule,
        ProgressBarModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        DropdownModule,
        ToastModule,
        InputTextModule,
        CheckboxModule,
    ],
})
export class PartegerModule {}
