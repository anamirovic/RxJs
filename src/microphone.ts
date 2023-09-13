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
      delay(7000),
      take(5)
  );
  }

  private generateRandomVocal(): string {
    const vocals = ["Ahh", "Ohh", "Lala", "Woohoo", "Oh-la-la"];
    const randomIndex = Math.floor(Math.random() * vocals.length);
    return vocals[randomIndex];
  }

}

 // Simulacija zvuka sa mikrofona (npr. vokali)
//  this.sound$ = new Observable<string>((observer) => {
//     const intervalId = setInterval(() => {
//       const randomVocal = Math.random() > 0.5 ? 'Ahh' : 'Ooh';
//       // Slanje identifikatora 3 uz generisane vokale
//       observer.next(`3${randomVocal}`)
      
      

//     }, 3000); // Generiše zvuk svakih 3 sekunde

    
//      // return () => clearInterval(intervalId); // Čisti interval prilikom odjave
//     });
//   }

  // this.sound$ = new Observable<string>((observer) => {
  //   let count = 0;
  //   const intervalId = setInterval(() => {
  //     const randomVocal = Math.random() > 0.5 ? 'Ahh' : 'Ooh';
  //     // Slanje identifikatora 3 uz generisane vokale
  //     observer.next(`3${randomVocal}`);

  //     count++;
  //     if (count >= 5) {
  //       clearInterval(intervalId); // Stop emitting after 5 values
  //       observer.complete(); // Complete the observable
  //     }
  //   }, 3000); // Generate sound every 3 seconds
  // }).pipe(
  //   take(5) // Take the first 5 values emitted by the observable
  // );
  // }

