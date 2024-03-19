import { BaseAdapter, IBaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { QuartierModel } from "./quartier.model";

@Injectable()
export class QuartierAdapter
    extends BaseAdapter
    implements IBaseAdapter<QuartierModel>
{
    adapt(item: any): QuartierModel {
        return {
            ...this.adaptBase(item),
            name: item?.libelle,
            code: item?.code,
        };
    }

    adaptList(items: any[]): QuartierModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
