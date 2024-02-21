
import { Niveau } from "./niveau"
import { Branche } from "./branche";
import { Vague } from "./Vague";
import { Formateur } from "./formateur";
import { OccupationSalle } from "./occupationSalle";

export interface Session {
    id?: number;
    code?: String;
    mois?:string;
    annee?: number;
    dateDebut?: string;
    dateFin?: string;
    estOuverte?: Boolean;
    estTerminee?: Boolean;
    brancheId?: number;
    niveauId?: number;
    vagueId?: number;
    occupationSalleId?: number;
    formateurId?: number;
    branche?: Branche;
    niveau?: Niveau;
    vague?: Vague;
    occupationSalle?: OccupationSalle
    formateur?: Formateur
    occupationId?: number;
    occupationIds?: number[];

}

