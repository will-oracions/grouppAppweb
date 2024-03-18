import { BaseAdapter } from "src/app/parteger/base.adapter";
import { OperationStatusDto } from "src/app/parteger/operation-status.dto";
import { Injectable } from "@angular/core";
import { DepartmentModel } from "./department.model";

@Injectable()
export class DepartmentAdapter implements BaseAdapter<DepartmentModel> {
    adapt(item: any): DepartmentModel {
        return {
            name: item?.departement,
            code: item?.code,
        };
    }

    adaptList(items: any[]): DepartmentModel[] {
        return items.map((item) => this.adapt(item));
    }

    adaptOperationStatus(res: any): OperationStatusDto {
        return {
            success: !!res,
            message: res.message,
        };
    }
}
