import { Subject, interval, merge, Subscription, Observable } from "rxjs";
import { Piano } from "./piano";
import { Guitar } from './guitar';
import { Speaker } from './speaker';
import { MixerPreview } from "./mixer_preview";
import { Mixer } from './mixer';

export const SAMPLE_RATE=5000;



const piano = new Piano('Steinway & Sons');
const guitar = new Guitar('Blatobran');

const mixer = new Mixer([piano, guitar]);
const mixer_Preview: MixerPreview = new MixerPreview();

const speaker = new Speaker(piano, guitar);


// Spajanje svih instrumenata u miksetu
const mergedSound$ = merge(piano.sound$, guitar.sound$);

// // Slanje zvuka u miksetu
// mergedSound$.subscribe(sound => {
//     mixer.sendSound(sound);
//   });

  // Pretplata na miksetu i reprodukcija zvuka
mixer.sound$.subscribe(sound => {
    speaker.playSound(sound);
  });

