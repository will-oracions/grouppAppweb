import { OperationStatusDto } from "./operation-status.dto";

export interface IBaseAdapter<TModel> {
    adapt(res: any): TModel;
    adaptList?(res: any[]): TModel[];
    adaptOperationStatus?(res: any): OperationStatusDto;
}

export class BaseAdapter {
    protected adaptBase(res) {
        return {
            id: res.id,
            createdAt: res.createdAt,
            updatedAt: res.updatedAt,
        };
    }
}
