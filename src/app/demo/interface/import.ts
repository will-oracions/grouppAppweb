export interface Import {
    id?: number;
    code?: string;
    libelle?: string;
}

export class Import{
    id?: number;
    code?: string;
    libelle?: string;

    constructor(data: any){
        this.id = 0;
        this.code = data[1];
        this.libelle = data[2];
    }
}