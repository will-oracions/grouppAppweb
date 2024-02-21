
import { Inscription } from "./inscription";
import { Paiement } from "./paiement";


export interface Compte {
    id?: number;
    code?: string;
    solde?: number;
    paiements?: Paiement[];
    inscriptionId?: number;
    
    inscription?: Inscription;
}



