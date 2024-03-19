import { BaseAdapter, IBaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { VulnerabilityModel } from "./vulnerability.model";

@Injectable()
export class VulnerabilitiesAdapter
    extends BaseAdapter
    implements IBaseAdapter<VulnerabilityModel>
{
    adapt(item: any): VulnerabilityModel {
        return {
            ...this.adaptBase(item),
            name: item?.nom,
            description: item?.description,
        };
    }

    adaptList(items: any[]): VulnerabilityModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
