import { ModePaiement } from "./modePaiement";
import { Rubrique } from "./Rubrique";
import { Compte } from "./compte";
import { Campus } from "./campus";

export class Paiement {
    id?: number;
    refPaiement?: string;
    montant?: number;
    datePaiement?: Date;
    modePaiementId?: number;
    rubriqueId?: number;
    compteId?: number
    campusId?: number;

    campus?: Campus;
    modePaiement?: ModePaiement;
    rubrique?: Rubrique;
    compte?: Compte
}

