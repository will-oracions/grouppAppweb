import { BaseModel } from "src/app/parteger/base.model";

export class PersonneModel extends BaseModel {
    noms: string;
    date_naissance: string;
    region: any;
    sexe: PersonSexEnum;
    is_cni: boolean;
    is_actenaissance: boolean;
    is_handicape: boolean;
    is_chef_menage: boolean;
    vulnerabilite: any[];
}

export enum PersonSexEnum {
    MASCULIN = "MASCULIN",
    FEMININ = "FEMININ",
}

export enum PersonStatusEnum {
    ALIVE = "En vie",
    DEAD = "Décédé",
}
