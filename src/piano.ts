import { Observable, interval, map } from "rxjs";
import { SAMPLE_RATE } from "./index";

export class Piano{
    private _name: string;
    private pianoIcon: HTMLElement;
    sound$: Observable<string>;

    constructor(name: string){
        this._name=name;
        this.pianoIcon = document.getElementById("piano");
        this.sound$=interval(1000/SAMPLE_RATE).pipe(
            map(()=> this._name + `sound data`)
        );

    }
    
    public animatePiano() {
        this.pianoIcon.style.filter = "brightness(200%)";
        setTimeout(() => {
            this.pianoIcon.style.filter = "brightness(100%)";
        }, 100);
    }
   
}
