import { BaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { UserModel } from "./user.model";

@Injectable()
export class UsersAdapter implements BaseAdapter<UserModel> {
    adapt(item: any): UserModel {
        return {
            noms: item?.nom,
            // date_naissance: item?.date_naissance,
            // region: item?.region,
            // sexe: item?.sexe,
            // is_cni: item?.is_cni,
            // is_actenaissance: item?.is_actenaissance,
            // is_handicape: item?.is_handicape,
            // is_chef_menage: item?.is_chef_menage,
            // vulnerabilite: item.vulnerabilite || [],
        };
    }

    adaptList(items: any[]): UserModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
