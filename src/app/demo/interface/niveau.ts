import { Diplome } from "./diplome";

export interface Niveau {
    id?: number;
    code?: string;
    libelle?: string;
    diplomeRequisId?: number;
    diplomeFinFormationId?: number;
    fraisInscription?: number;
    fraisPension?: number;
    diplomeRequis?: Diplome;
    diplomeFinFormation?: Diplome;
}

