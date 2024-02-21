import { Diplome } from "./diplome";

export interface Formateur {
  id?: number;
  nom?: string,
  prenom?: string,
  fullName?: string,
  sexe?: string,
  langue?: string,
  adresse?: string,
  telephone?: string,
  email?: string,
  experience?: number,
  diplomeId?: number;

  diplome?: Diplome;

}
