import { Observable, interval, map } from 'rxjs';
import { SAMPLE_RATE } from './index';

export class Guitar {
  private _name: string;
  private guitarIcon: HTMLElement;
  private instrumentId: number = 0;
  sound$: Observable<string>;

  constructor(name: string) {
    this._name = name;
    this.guitarIcon = document.getElementById("guitar");
    this.sound$ = interval(SAMPLE_RATE).pipe(
      map(() => `${this.instrumentId}${this.generateRandomNote()}`)
    );
  }

  private generateRandomNote(): string {
    const notes = ["c", "d", "e", "f", "g", "a", "h"];
    const randomIndex = Math.floor(Math.random() * notes.length);
    return notes[randomIndex];
  }

   public animateGuitar() {
        this.guitarIcon.style.filter = "brightness(200%)";
        setTimeout(() => {
            this.guitarIcon.style.filter = "brightness(100%)";
        }, 500);
    }
}
