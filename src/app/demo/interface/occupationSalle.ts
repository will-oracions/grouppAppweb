
import { Salle } from "./salle";

export interface OccupationSalle {
    id?: number;
    salleId?: number;
    plageHoraireId?: number;
    estOccupee?: boolean;
    salle: Salle;
    plageHoraire?: OccupationSalle;

}

