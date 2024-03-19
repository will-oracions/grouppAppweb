import { BaseAdapter, IBaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { ResidenceModel } from "./residence.model";

@Injectable()
export class ResidenceAdapter
    extends BaseAdapter
    implements IBaseAdapter<ResidenceModel>
{
    adapt(item: any): ResidenceModel {
        return {
            ...this.adaptBase(item),
            name: item?.commune,
            code: item?.code,
        };
    }

    adaptList(items: any[]): ResidenceModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
