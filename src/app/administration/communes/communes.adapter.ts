import { BaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { CommuneModel } from "./commune.model";

@Injectable()
export class CommuneAdapter implements BaseAdapter<CommuneModel> {
    adapt(item: any): CommuneModel {
        return {
            name: item?.commune,
            code: item?.code,
        };
    }

    adaptList(items: any[]): CommuneModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
