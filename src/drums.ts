import { Observable, interval, map, delay,take } from 'rxjs';
import { SAMPLE_RATE } from './index';

export class Drums {
  private _name: string;
  private drumsIcon: HTMLElement;
  private instrumentId: number = 2;
  sound$: Observable<string>;

  constructor(name: string) {
    this._name = name;
    this.drumsIcon = document.getElementById("drums");
    this.sound$ = interval(SAMPLE_RATE).pipe(
      map(() => `${this.instrumentId}kick`),
      delay(Math.random() * 500),
      take(5)
    );
  }
}
