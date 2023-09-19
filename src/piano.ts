import { Observable, interval, map, delay,take } from "rxjs";
import { SAMPLE_RATE } from "./index";

export class Piano{
    private _name: string;
    private instrumentId: number = 1;
    sound$: Observable<string>;

    constructor(name: string){
        this._name=name;
        this.sound$=interval(SAMPLE_RATE).pipe(
            map(()=> `${this.instrumentId}${this.generateRandomNote()}`),
            delay(1000),
            take(5)
        );
    }

    private generateRandomNote(): string {
        const notes = ["c", "d", "e", "f", "g", "a", "h"];
        const randomIndex = Math.floor(Math.random() * notes.length);
        return notes[randomIndex];
      }

}
