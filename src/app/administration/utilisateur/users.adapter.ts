import { BaseAdapter, IBaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { UserModel } from "./user.model";

export interface UsersListResponse {
    agents: UserModel[];
    admins: UserModel[];
    oraganisation: UserModel[];
    ong: UserModel[];
}

@Injectable()
export class UsersAdapter
    extends BaseAdapter
    implements IBaseAdapter<UserModel>
{
    adapt(item: any): UserModel {
        return {
            ...this.adaptBase(item),
            noms: item?.nom,
            prenoms: item?.prenoms,
            username: item?.username,
            raisonSociale: item?.raisonSociale,
            name: item?.username,

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

    adaptList(res: any[]): UserModel[] {
        return res.map((item) => this.adapt(item));
    }

    adaptSuperList(items: any): UsersListResponse {
        console.log("items: ", items);
        const list: UsersListResponse = {
            admins: [],
            agents: [],
            oraganisation: [],
            ong: [],
        };

        items.map((item) => {
            if (item.libelle === "organisation") {
                list.oraganisation = this.adaptList(item.utilisateurs);
            } else if (item.libelle === "ong") {
                list.ong = this.adaptList(item.utilisateurs);
            } else if (item.libelle === "agents") {
                list.agents = this.adaptList(item.utilisateurs);
            } else if (item.libelle === "administrateur") {
                list.admins = this.adaptList(item.utilisateurs);
            }
        });

        return list;
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
