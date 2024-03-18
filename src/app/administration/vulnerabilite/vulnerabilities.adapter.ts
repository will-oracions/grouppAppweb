import { BaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { VulnerabilityModel } from "./vulnerability.model";

@Injectable()
export class VulnerabilitiesAdapter implements BaseAdapter<VulnerabilityModel> {
    adapt(item: any): VulnerabilityModel {
        return {
            name: item?.commune,
            code: item?.code,
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
