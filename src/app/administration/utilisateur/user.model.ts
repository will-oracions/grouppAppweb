import { BaseModel } from "src/app/parteger/base.model";

export class UserModel extends BaseModel {
    noms: string;
    name?: string;
    username: string;
    raisonSociale: string;
    prenoms: null;
    // date_naissance: string;
    // region: any;
    // sexe: PersonSexEnum;
    // is_cni: boolean;
    // is_actenaissance: boolean;
    // is_handicape: boolean;
    // is_chef_menage: boolean;
    // vulnerabilite: any[];
}
