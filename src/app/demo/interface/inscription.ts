import { Session } from "./session";
import { Campus } from "./campus";
import { Etudiant } from "./etudiant";
import { TestModule } from "./testModule";

export class Inscription {
    dateInscription?: Date;
    estNouveau?: boolean;
    estRedoublant?: boolean;
    sessionId?: number;
    etudiantId?: number;
    campusId?: number;
    testModuleId?: number;

    formateur?: number
    testModule?: TestModule;
    campus?: Campus;
    session?: Session;
    etudiant?: Etudiant
}
