import { Observable, interval, map, delay,take } from 'rxjs';
import { SAMPLE_RATE } from './index';

export class Drums {
  private _name: string;
  private instrumentId: number = 2;
  sound$: Observable<string>;

  constructor(name: string) {
    this._name = name;
    this.sound$ = interval(SAMPLE_RATE).pipe(
      map(() => `${this.instrumentId}kick`),
      delay(5000),
      take(5)
    );
  }

}
