import { Subject, Observable } from 'rxjs';

export class Mixer {
  private mixerSubject: Subject<string>;
  private soundSpeaker$: Observable<string>; // Observable za slanje zvuka zvučniku

  constructor(instruments: any[]) {
    this.mixerSubject = new Subject<string>();

    // Pretplata na sve instrumente
    instruments.forEach(instrument => {
      instrument.sound$.subscribe((sound:string) => {
        this.decodeAndSendSound(sound);
      });
    });

    // Pretplata na Observable za slanje zvuka zvučniku
    this.soundSpeaker$ = this.mixerSubject.asObservable();
  }

   // Sada možete dodati svojstvo sound$
   get sound$(): Observable<string> {
    return this.soundSpeaker$;
  }

//   // Funkcija za slanje zvuka zvučniku
//   sendSoundToSpeaker(): Observable<string> {
//     return this.soundSpeaker$;
//   }

  decodeAndSendSound(sound: string): void {
    const instrumentId = sound.charAt(0); // Prvi karakter je identifikator instrumenta
    const note = sound.slice(1); // Ostatak stringa je nota

    // Dodajte logiku za dekodiranje zvuka na osnovu identifikatora i note
    let decodedSound = "";

    switch (instrumentId) {
      case "0":
        // Dekodiranje za guitar
        decodedSound = `Guitar plays ${note}`;
        break;
      case "1":
        // Dekodiranje za piano
        decodedSound = `Piano plays ${note}`;
        break;
        case "2":
        // Dekodiranje za drums
        decodedSound = `Drums plays ${note}`;
        break;
        case "3":
          // Dekodiranje za mikrofon
          decodedSound = `Microphone vocal: ${note}`;
          break;
      // Dodajte druge instrumente po potrebi
      default:
        decodedSound = `Unknown instrument plays ${note}`;
    }

    // Slanje dekodiranog zvuka zvučniku
    this.mixerSubject.next(decodedSound);
  }
}
