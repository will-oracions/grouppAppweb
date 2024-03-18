import { PersonSexEnum, PersonStatusEnum } from "../personne.model";

export class PersonneCreateDto {
    constructor(
        public noms: string = "",
        public date_naissance: string = "",
        public region: any = "",
        public sexe: PersonSexEnum = PersonSexEnum.FEMININ,
        public is_cni: boolean = false,
        public is_actenaissance: boolean = false,
        public is_handicape: boolean = false,
        public is_chef_menage: boolean = false,
        public vulnerabilite: any[] = [],
        public statut: PersonStatusEnum = PersonStatusEnum.ALIVE
    ) {}
}
