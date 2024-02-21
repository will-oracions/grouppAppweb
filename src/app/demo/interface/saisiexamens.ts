import { EpreuvesExamen } from "./epreuvesexamen";

export class SaisiExamens {
    examenId?: number;
    dateExamen?: string;
    matricule?: string;
    fullName?: string;
    epreuve?: EpreuvesExamen;
    libelle?: string;

    constructor(fullName: string, matricule:string,examenId: number,dateExamen: string, epreuve: EpreuvesExamen,libelle: string) {
        this.matricule = matricule;
        this.fullName = fullName;
        this.dateExamen = dateExamen;
        this.examenId = examenId;
        this.epreuve = epreuve;
        this.libelle = libelle;
      }
}
