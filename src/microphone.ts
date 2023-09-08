import { Observable } from 'rxjs';

export class Microphone {
  private _name: string;
  private instrumentId: number = 3;
  private microphoneIcon: HTMLElement;
  sound$: Observable<string>;

  constructor(name: string) {
    this._name = name;
    this.microphoneIcon = document.getElementById("microphone");

 // Simulacija zvuka sa mikrofona (npr. vokali)
 this.sound$ = new Observable<string>((observer) => {
    const intervalId = setInterval(() => {
      const randomVocal = Math.random() > 0.5 ? 'Ahh' : 'Ooh';
      // Slanje identifikatora 3 uz generisane vokale
      observer.next(`3${randomVocal}`);
    }, 3000); // Generiše zvuk svakih 3 sekunde

    
      return () => clearInterval(intervalId); // Čisti interval prilikom odjave
    });
  }
}
