export class EpreuvesExamen {
    epreuveId?: number;
    noteObtenue?: number;
    noteRattrapage?: number;


    constructor(epreuveId: number, noteObtenue:number, noteRattrapage:number) {
        this.epreuveId = epreuveId;
        this.noteObtenue = noteObtenue;
        this.noteRattrapage = noteRattrapage;
    }
}
