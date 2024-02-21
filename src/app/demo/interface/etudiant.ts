import { Diplome } from "./diplome";



export class Etudiant {
   id?: number;
   matricule: string;
   nom?: string;
   prenom?: string;
   fullName?: string;
   imageUrl?: string;
   dateNaissance?: Date;
   lieuNaissance?: string;
   nationalite?: string;
   sexe?: string;
   adressse?: string;
   telephone?: string;
   email?: string;
   tuteur?: string;
   telephoneTuteur?: string;
   dernierDiplomeId?: number;
   
   dernierDiplome?: Diplome;
}
