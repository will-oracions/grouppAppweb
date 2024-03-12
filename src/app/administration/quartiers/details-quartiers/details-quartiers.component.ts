import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormService } from 'src/app/demo/service/base.service';

type Commune = {
  id: number,
  code: string,
  libelle: string,
  createdAt: Date,
  updatedAt: Date
};
// Type de données acceptables par un quartier
type QuartierDetails<T> = {
  id: number,
  libelle: string,
  idCommunes: number,
  createdAt: Date,
  updatedAt: Date,
  commune: T
  residences: string[]
};


@Component({
  selector: 'app-details-quartiers',
  templateUrl: './details-quartiers.component.html',
  styleUrls: ['./details-quartiers.component.scss']
})
export class DetailsQuartiersComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: FormService) {

  }

  // Declaration de la propriete qui contiendra l'identifiant recupere dans l'url.
  quartierID: number;
  quartierDetails: QuartierDetails<Commune>;
  loader = false;
  hasResidences = false;

  ngOnInit() {
    // Recupere l'id dans l'url.
    this.quartierID = this.activatedRoute.snapshot.params['id'];
    this.loader = true;
    this.getQuartierDetails();
  }


  // Fonction pour recuperer les details d'un quartier
  getQuartierDetails() {
    this.service.getById('quartiers', this.quartierID).subscribe({
      next: data =>{
          this.quartierDetails = data;
          console.log(this.quartierDetails);
      },
      error: err => console.error('Observable emitted an error: ' + err),
      complete: () =>      this.loader = false,
   });
    console.log(this.quartierDetails);
  }

  // Fonction qui verifie si un quartier a ou non une residence
  checkHasResidences() {
    if (this.quartierDetails.residences.length = 0) this.hasResidences = false;
    else this.hasResidences = true
  }
}
