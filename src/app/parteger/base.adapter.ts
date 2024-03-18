import { OperationStatusDto } from "./operation-status.dto";

export interface BaseAdapter<TModel> {
    adapt(res: any): TModel;
    adaptList(res: any[]): TModel[];
    adaptOperationStatus?(res: any): OperationStatusDto;
}
