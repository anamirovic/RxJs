import { Observable } from 'rxjs';
import { Guitar } from './guitar';
import { Piano } from './piano';
import { Drums } from './drums';
import { Microphone } from './microphone'

export class Speaker {
  constructor(private piano: Piano, private guitar: Guitar, private drums: Drums, private microphone: Microphone){

  }
  playSound(sound: string): void {
    console.log(`Playing sound: ${sound}`);

    // if (instrument instanceof Guitar) {
    //   instrument.animateGuitar();
    // } else if (instrument instanceof Piano) {
    //   instrument.animatePiano();
    // }
    
    // this.piano.animatePiano();
    // this.guitar.animateGuitar();
  
 }
}