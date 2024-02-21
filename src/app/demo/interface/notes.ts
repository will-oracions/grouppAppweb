import { Evaluation } from "./evaluation";

export class Notes {
    matricule?: string;
    fullName?: string;
    module?: string;
    testModuleId?: number;
    evaluation?: Evaluation;

    constructor(matricule: string, fullName: string, testModuleId: number,evaluations: Evaluation, module: string) {
        this.matricule = matricule;
        this.fullName = fullName;
        this.testModuleId = testModuleId;
        this.evaluation = evaluations;
        this.module = module;
      }
}
