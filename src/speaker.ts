import { Observable } from 'rxjs';
import { Guitar } from './guitar';
import { Piano } from './piano';
import { Drums } from './drums';
import { Microphone } from './microphone';

export class Speaker {
  private speakerIcon: HTMLElement;
  private speakerInfoElement: HTMLElement | null;

  constructor(private piano: Piano, private guitar: Guitar, private drums: Drums, private microphone: Microphone){
    this.speakerInfoElement = document.getElementById('speaker-info');
    this.speakerIcon = document.getElementById("speaker");
  }

  playSound(sound: string): void {
    console.log(`Playing sound: ${sound}`);
    
    if (this.speakerInfoElement) {
      this.speakerInfoElement.textContent = `Playing sound: ${sound}`;
      this.animateSpeaker();
    }
  }

    public animateSpeaker() {
      this.speakerIcon.style.filter= "brightness(50%)";
      setTimeout(() => {
          this.speakerIcon.style.filter = "brightness(200%)";
      }, 200);
  }

}