
import { EvaluationModule } from './evaluatoinTest';
import { Inscription } from './inscription';

export interface TestModule {
    id?: number;
    code?: String;
    pourcentage?: number;
    moyenne?: number;
    evaluations?: EvaluationModule[];
}

