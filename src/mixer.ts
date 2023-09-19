import { Subject, Observable,map,bufferCount, filter, combineLatest, zip, take, mergeMap, of} from 'rxjs';


export class Mixer {
  private mixerSubject: Subject<string>;
  private soundSpeaker$: Observable<string>; 
  private instruments: Observable<string>[] = [];
  public combinedSound$: Observable<string>;

  


  constructor(instruments: any[]) {
    this.mixerSubject = new Subject<string>();

    // Pretplata na sve instrumente
    instruments.forEach(instrument => {
      instrument.sound$.subscribe((sound: string) => {
        this.mixerSubject.next(sound);
      });
    });

    // Pretplata na Observable za slanje zvuka zvučniku
    this.soundSpeaker$ = this.mixerSubject.asObservable();


    this.combinedSound$ = this.soundSpeaker$.pipe(
      bufferCount(4),
      mergeMap(sounds => {
        return zip(
          ...sounds.map(sound => {
            return of(sound).pipe( 
              map((s: string) => s.slice(1))
            );
          })
        ).pipe(
          map(([piano, guitar, microphone, drums]) => {
            const combinedNotes = `${piano}, ${guitar}, ${microphone}, ${drums}`;
            return `Musical passage: ${combinedNotes}`;
          })
        );
      })
    );
  }

  get combinedSound(): Observable<string> {
    return this.combinedSound$;
  }

   get sound$(): Observable<string> {
    return this.soundSpeaker$;
   }

   private  getInstrumentName(instrumentId: string): string {
      switch (instrumentId) {
        case '0':
          return 'Guitar';
        case '1':
          return 'Piano';
        case '2':
          return 'Drums';
        case '3':
          return 'Microphone';
        default:
          return 'Unknown';
      }
  }
}
