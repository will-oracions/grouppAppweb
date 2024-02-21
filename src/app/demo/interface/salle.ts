import { Campus } from "./campus";
import { OccupationSalle } from "./occupationSalle";

export interface Salle {
    id?: number;
    code?: string;
    libelle?: string;
    capacite?: number;
    campusId?: number;

    occupattions?: OccupationSalle[];
    campus?: Campus;
}

