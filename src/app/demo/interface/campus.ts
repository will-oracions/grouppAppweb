
import { Branche } from "./branche";
import { Salle } from "./salle";

export class Campus {
    id?: number;
    code?: string;
    libelle?: string;
    adresse?: string;
    brancheId?: number;

    branche?: Branche;
}
