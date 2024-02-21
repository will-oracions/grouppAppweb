export class Evaluation {
    evaluationTestId?: number;
    dateEvaluation?: string;
    note?: number;


    constructor(evaluationTest: number, dateEvaluations:string, notes:number) {
        this.evaluationTestId = evaluationTest;
        this.dateEvaluation = dateEvaluations;
        this.note = notes;
    }
}
