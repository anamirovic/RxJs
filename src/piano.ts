import { Observable, interval, map, delay,take } from "rxjs";
import { SAMPLE_RATE } from "./index";

export class Piano{
    private _name: string;
    private pianoIcon: HTMLElement;
    private instrumentId: number = 1;
    sound$: Observable<string>;

    constructor(name: string){
        this._name=name;
        this.pianoIcon = document.getElementById("piano");
        this.sound$=interval(SAMPLE_RATE).pipe(
            map(()=> `${this.instrumentId}${this.generateRandomNote()}`),
            delay(Math.random() * 300),
            take(5)
        );

    }

    private generateRandomNote(): string {
        const notes = ["c", "d", "e", "f", "g", "a", "h"];
        const randomIndex = Math.floor(Math.random() * notes.length);
        return notes[randomIndex];
      }

    //   public animatePiano() {
    //     this.pianoIcon.style.filter = "brightness(200%)";
    //     setTimeout(() => {
    //         this.pianoIcon.style.filter = "brightness(100%)";
    //     }, 500);
    // }
   
}
