
import { Examen } from "./examen";
import { Unite } from "./unite";

export interface Epreuve {
    id?: number;
    examenID?: number;
    uniteId?: number;
    noteObtenue?: number;
    estValidee?: Boolean;
    noteRattrapage?: number;
    estRattrapee?: Boolean;
    fraisRattrapage?: number;

    examen?: Examen;
    unite?: Unite;
}

