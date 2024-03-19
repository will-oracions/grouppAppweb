import { BaseModel } from "src/app/parteger/base.model";

export class ResidenceModel extends BaseModel {
    constructor(public name: string, public code: string) {
        super();
    }
}
