import { BaseModel } from "src/app/parteger/base.model";

export class RegionModel extends BaseModel {
    constructor(public name: string, public code: string) {
        super();
    }
}
