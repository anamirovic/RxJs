import { Observable } from 'rxjs';
import { Guitar } from './guitar';
import { Piano } from './piano';

export class Speaker {
  constructor(private piano: Piano, private guitar: Guitar){

  }
  playSound(sound: string): void {
    console.log(`Playing sound: ${sound}`);
    
    this.piano.animatePiano();
    this.guitar.animateGuitar();
  }
}