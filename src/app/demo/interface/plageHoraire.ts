
import { Time } from "@angular/common";

export interface PlageHoraire {
    id?: number;
    code?: String;
    startTime?: Time;
    endTime: Time;
    jour?: String;
}

