import { Subject, interval, merge, Subscription, Observable, take } from "rxjs";
import { Piano } from "./piano";
import { Guitar } from './guitar';
import { Speaker } from './speaker';
import { MixerPreview } from "./mixer_preview";
import { Mixer } from './mixer';
import { Drums } from './drums';
import { Microphone } from './microphone';

export const SAMPLE_RATE=5000;

const piano = new Piano('Klavir');
const guitar = new Guitar('Gitara');
const drums= new Drums('Bubnjevi');
const microphone= new Microphone('Mikorfon');

const mixer = new Mixer([piano, guitar, drums, microphone]);
const mixer_Preview: MixerPreview = new MixerPreview();
const speaker = new Speaker();


mixer.sound$.subscribe(sound => {
    speaker.playSound(sound);
  });


  mixer.combinedSound$.subscribe(combinedSound => {
    console.log(combinedSound);
  });

  



  

