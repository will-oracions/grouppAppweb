

import { ModuleFormation } from "./moduleFormation";
import { TestModule } from "./testModule";

export interface EvaluationModule {
    id?: number;
    dateEvaluation?: Date;
    note: number;

    testModuleId?: String;
    moduleFormationId?: String;

    testModule?: TestModule;
    moduleFormation?: ModuleFormation;

}

