import { Subject, merge, Observable } from 'rxjs';

export class Mixer {
    private mixerSubject: Subject<string>;
  
            constructor() {
            this.mixerSubject = new Subject<string>();
            }

            // Dodajte funkciju za slanje zvuka u miksetu
        sendSound(sound: string): void {
            this.mixerSubject.next(sound);
        }

        // Pretvorite miksetu u Observable za pretplatu
        get sound$(): Observable<string> {
            return this.mixerSubject.asObservable();
        }
    

  }