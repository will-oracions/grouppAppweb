import { BaseAdapter, IBaseAdapter } from "src/app/parteger/base.adapter";
import { PersonneModel } from "./personne.model";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";

@Injectable()
export class PersonneAdapter
    extends BaseAdapter
    implements IBaseAdapter<PersonneModel>
{
    adapt(item: any): PersonneModel {
        return {
            ...this.adaptBase(item),
            noms: item?.nom,
            date_naissance: item?.date_naissance,
            region: item?.region,
            sexe: item?.sexe,
            is_cni: item?.is_cni,
            is_actenaissance: item?.is_actenaissance,
            is_handicape: item?.is_handicape,
            is_chef_menage: item?.is_chef_menage,
            vulnerabilite: item.vulnerabilite || [],
        };
    }

    adaptList(items: any[]): PersonneModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
