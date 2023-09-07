import { Observable, interval, map } from 'rxjs';
import { SAMPLE_RATE } from './index';

export class Guitar {
  private _name: string;
  private guitarIcon: HTMLElement;
  sound$: Observable<string>;

  constructor(name: string) {
    this._name = name;
    this.guitarIcon = document.getElementById("guitar");
    this.sound$ = interval(SAMPLE_RATE).pipe(
      map(() => this._name + `sound data`)
    );
  }


   public animateGuitar() {
        this.guitarIcon.style.filter = "brightness(200%)";
        setTimeout(() => {
            this.guitarIcon.style.filter = "brightness(100%)";
        }, 100);
    }
}
