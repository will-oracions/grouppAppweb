import { sexType } from "../personne.model";

export interface PersonneCreateDto {
    noms: string;
    date_naissance: string;
    region: any;
    sexe: sexType;
    is_cni: boolean;
    is_actenaissance: boolean;
    is_handicape: boolean;
    is_chef_menage: boolean;
    vulnerabilite: any[];
}
