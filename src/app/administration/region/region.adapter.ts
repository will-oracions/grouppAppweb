import { BaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { RegionModel } from "./region.model";

@Injectable()
export class RegionAdapter implements BaseAdapter<RegionModel> {
    adapt(item: any): RegionModel {
        return {
            name: item?.region,
            code: item?.code,
        };
    }

    adaptList(items: any[]): RegionModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
