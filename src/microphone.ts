import { Observable, take, interval,map, delay } from 'rxjs';
import { SAMPLE_RATE } from "./index";

export class Microphone {
  private _name: string;
  private instrumentId: number = 3;
  sound$: Observable<string>;

  constructor(name: string) {
    this._name = name;
    this.sound$=interval(SAMPLE_RATE).pipe(
      map(()=> `${this.instrumentId}${this.generateRandomVocal()}`),
      delay(3000),
      take(5)
  );
  }

  private generateRandomVocal(): string {
    const vocals = ["Ahh", "Ohh", "Lala", "Woohoo", "Oh-la-la"];
    const randomIndex = Math.floor(Math.random() * vocals.length);
    return vocals[randomIndex];
  }

}


