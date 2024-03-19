import { BaseModel } from "src/app/parteger/base.model";

export class CommuneModel extends BaseModel {
    constructor(public name: string, public code: string) {
        super();
    }
}
